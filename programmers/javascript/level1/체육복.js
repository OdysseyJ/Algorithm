// 나의 풀이
// 문제분류 : Greedy
// Greedy = 각 상황에서 최선의 해를 선택해 최적의 답을 도출
// 각 상황에서의 선택이 다음 선택에 영향을 주지 않아야 함.
// 체육복이 2개인 사람이, 자기보다 번호가 낮은 사람에게 무조건 체육복을 우선적으로 빌려주게 한다.

function solution(n, lost, reserve) {
    var answer = 0;
    let arr = [-1]
    for (let i = 1; i <= n; i++){
        arr[i] = 1;
    }
    for (let i = 0; i < lost.length; i++){
        arr[lost[i]]--;
    }
    for (let i = 0; i < reserve.length; i++){
        arr[reserve[i]]++;
    }
    const test = new Date(2016,1,1);
    for (let i = 1; i <= n; i++){
        if(arr[i]===2){
            if(arr[i-1]===0){
                arr[i-1]++;
                arr[i]--;
            }
            else if(arr[i+1]===0){
                arr[i+1]++;
                arr[i]--;
            }
        }
    }
    answer = arr.filter((a)=>{return (a===1)||(a===2)}).length;
    return answer;
}

// 다른 사람의 풀이
// 나와 유사한 방식
// foreach를 사용한 것이 인상적.
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}

// 다른 사람의 풀이. 나와 유사하지만, foreach 사용
function solution(n, lost, reserve) {
    var arr = [];
    for(var i=0; i<n;i++){
        arr.push(1);
    }
    lost.forEach((value, index) =>{arr[value-1] -= 1})
    reserve.forEach((value,index) => {arr[value-1] += 1});
    arr.forEach((value,index,array) => {
        if(value>1 && arr[index+1]===0){
            array[index] --;
            array[index+1] ++;
        }else if(value===0 && arr[index+1]>1){
            array[index] ++;
            array[index+1] --;
        }
    })
    return arr.filter(value => value>0).length;
}

// 다른 사람의 풀이
// set 사용 후, lost를 중심으로 다시 어레이를 만듬.
function solution(n, lost, reserve) {

   const lostSet =  new Set(lost)
   const reserveSet =  new Set(reserve)

   for(let lostNumber of lost){
    if(reserveSet.has(lostNumber)){
      reserveSet.delete(lostNumber)
      lostSet.delete(lostNumber)    
    }
   }
   let lostItems = lostSet.size;
   lost.sort((a,b)=>a-b)
   for(let lostNumber of lost){
    if(lostSet.has(lostNumber)){
      if(reserveSet.has(lostNumber-1)){
        lostItems-=1;
        reserveSet.delete(lostNumber-1)
      }
      else if(reserveSet.has(lostNumber+1)){
        lostItems-=1
        reserveSet.delete(lostNumber+1)
      }
    }
   }
   return n-lostItems 
  }

console.log(solution(5, [2,1,5], [3,4,5]))

console.log(solution(6, [2,1,3,4], [3,4,5]))