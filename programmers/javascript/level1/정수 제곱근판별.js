// 내풀이
function solution(n) {
    let i = 0;
    while(true){
        if(n < i*i){
            break;
        }
        i+=1;
    }
    if ((i-1)*(i-1) === n){
        return i*i
    }
    else
        return -1
}
