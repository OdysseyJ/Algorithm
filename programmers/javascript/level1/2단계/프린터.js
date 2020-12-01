function solution(priorities, location) {
    let priorityArray = priorities.map((priority,index)=>{
        if(index===location){
            return [priority, 1];
        }
        return [priority,0];
    });
    let order = 0;
    while(true){
        const current = priorityArray.shift();
        const isBiggerExist = priorityArray.filter((priority)=>priority[0] > current[0]).length !== 0;
        if(isBiggerExist){
            priorityArray.push(current);
        }
        else{
            order += 1;
            if(current[1] === 1){
                break;   
            }
        }
    }
    return order;
}