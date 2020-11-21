//내풀이
function solution(n) {
    let array = [];
    let number = n;
    while(number){
        array.push(number%3);
        number = Math.floor(number/3);
    }
    let sum = 0;
    array.map((num, idx)=>sum+=(num*Math.pow(3,array.length-1-idx)));
    return sum;
}

// 다른사람 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 와우.
function solution(n) {
    n = n.toString(3).split('').reverse().join('')
    return parseInt(n, 3)
  }

// 자연수.toString(진법) => 진법 변환인듯.
// parseInt(string, 진법) => 해당 진법 수를 다시 10진법으로  표