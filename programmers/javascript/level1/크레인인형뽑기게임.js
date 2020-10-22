// 분류 : 카카오
// 내가 배울 수 있었던 것 :
// 1. stack

function solution(board, moves) {
  var answer = 0;
  let basket = [];
  for (let move of moves) {
    let index = move - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][index] !== 0) {
        basket.push(board[i][index]);
        board[i][index] = 0;
        break;
      }
    }
    if (
      basket.length >= 2 &&
      basket[basket.length - 1] === basket[basket.length - 2]
    ) {
      basket.pop();
      basket.pop();
      answer += 2;
    }
  }
  return answer;
}

// 다른 사람의 풀이