// 내풀이
function solution(n) {
    let answer = (n+"").split("").reverse().map((num)=>Number(num))
    return answer;
}

// 남의풀이
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}