// 분류 : hash
// 내가 배울 수 있었던 것 : 
// 1.javascript의 배열 해쉬
// 2.for ..in, for...of 은 성능이 좋지 않음
// 3.일일히 for문을 통해서 돌려주거나, foreach 사용이 권장.

// 4.find()메서드 - 주어진 판별 함수를 만족하는 첫번째를 return
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
// // expected output: 12

function solution(participant, completion) {
  var answer = "";
  let participantHashArr = [];
  // 초기화
  for (let i = 0; i < participant.length; i++) {
    participantHashArr[participant[i]] = 0;
  }
  // 숫자세기
  for (let i = 0; i < participant.length; i++) {
    participantHashArr[participant[i]]++;
  }
  // 숫자빼주기
  for (let i = 0; i < completion.length; i++) {
    participantHashArr[completion[i]]--;
  }
  // 0이아니면 => 완주못한사람
  for (let i = 0; i < participant.length; i++) {
    if (participantHashArr[participant[i]] !== 0) {
      answer = participant[i];
    }
  }
  return answer;
}

// 다른 사람의 풀이 (지리는거 모음)

// 0. 나랑 유사한 풀이 (for문 안에서 초기화를 같이 해줬다.)
function solution(participant, completion) {
    const hash = {};

    for(let val of participant) {
      if(!hash[val]) hash[val] = 0;
      hash[val]++;
    }

    const result = completion.forEach(val => hash[val]--);

    for(let key in hash) if(hash[key]) return key;
}

// 1. 배열 정렬해서, 같은지 비교해서 다르면 return
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 2. 배열을 정렬해서, 하나씩 빼면서 비교(1번과 유사)
const solution = (p, c) => {
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}

// 3. 완주자 배열을 {이름:완주자배열에 등장하는 횟수}로 맵핑하고, 그 맵에 참가자 이름 하나씩 넣어서 찾아볼때마다 횟수 떨어뜨려서 횟수 0나오는 놈 찾아뱉는 함수같네요
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
