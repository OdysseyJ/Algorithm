// 내풀이
function solution(n) {
    return Number((n+"").split("").sort().reverse().join(""))
}

//다른사람의 풀이
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
