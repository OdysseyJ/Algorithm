function solution(citations) {
    let  result;
    let now = 0;
    citations.sort((a,b)=>{return b-a}).forEach((val, idx)=>{
        if(val < idx+1  && result===undefined) {
            result = idx;
        }
        if(result===undefined && idx === citations.length-1){
            result =  citations.length;
        }
    })
    return result;
}