// 내풀이
function solution(x, n) {
    return Array.from(Array(n).keys()).map((num)=> x*(num+1));
}

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
