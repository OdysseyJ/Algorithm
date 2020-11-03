function solution(d, budget) {
    let total = 0;
    let idx = 0;
    let exist = false;
    d.sort((a,b)=> a-b).map((_d, i)=>{
        total+=_d;
        if(total <= budget){
            exist = true;
            idx = i;
        }
    })
    return exist ? idx+1 : 0
}