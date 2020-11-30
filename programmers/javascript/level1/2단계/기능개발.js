function solution(progresses, speeds) {
    let current = progresses;
    let currentSpeed = speeds;
    let result = [];
    while(true){
        let count = 0;
        while(true){
            if(current[0] && current[0] >= 100){
                current.shift();
                currentSpeed.shift();
                count+=1;
            } else{
                if (count !== 0) result.push(count);
                break;
            }
        }
        if (current.length === 0) break;
        current = current.map((progress, index)=> progress+currentSpeed[index]);
    }
    return result;
}