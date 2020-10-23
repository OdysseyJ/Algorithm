function solution(arr) {
    let solution = arr;
    let min = solution[0];
    let idx = 0;
    solution.map((value, index)=> {
        if(min > value){
            min = value;
            idx = index;
        }
    })
    solution.splice(idx,1);
    return solution.length === 0 ? [-1] : solution;
}

// 다른 사람의 풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}