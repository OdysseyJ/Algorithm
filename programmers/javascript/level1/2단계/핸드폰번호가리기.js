
//내풀이
function solution(phone_number) {
    return phone_number.split("").reverse().map((num, idx)=> idx<4 ? num : "*").reverse().join("");
}

// 정규식버전 - 정규식 공부하자.
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
