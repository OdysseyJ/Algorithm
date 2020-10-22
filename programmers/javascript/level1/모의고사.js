// 나의 풀이
// 내가 배운 것
// 1.인덱스를 따로 뺐지만, 사실 필요없었음. 왜냐면 %로 어차피 나누기 때문에
// 2.filter를 이용해 깔끔하게 구해낼 수 있었다.

function solution(answers) {
    var answer = [];
    let persons = [[],[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    let index = [0,0,0,0];
    let point = [0,0,0,0];
    for (let i = 0; i < answers.length; i++){
        for (let j = 1; j <= 3; j++){
            if(answers[i]===persons[j][index[j]]){
                point[j]++;
            }
            index[j]++;
            index[j]=index[j]%persons[j].length;
        }
    }
    let max = 0;
    for (let i = 1; i < 4; i++){
        if(point[i]>max){
            max = point[i];
        }
    }
    for (let i = 1; i < 4; i++){
        if(point[i] === max){
            answer.push(i)
        }
    }
    return answer;
}

// 다른 사람의 풀이
// 1. filter를 사용해서 answer의 개수 각각 구하기

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

// 2. split()을 통해서 배열로 만든게 인상적이고,
// 매핑한 결과를 필터링해서, 다시 scores배열로 만든게 인상적.
function solution(answers) {
    const A = '12345'.split('')
    const B = '21232425'.split('')
    const C = '3311224455'.split('')

    const scores = [A,B,C]
        .map(p => {
            return answers.map((answer, i)=> answer === Number(p[i % p.length]))
                .filter(c => c)
                .length
        })
        .map((score, i) => ({id: i+1, score}))
        .sort((a, b) => b.score - a.score)

    const ret = []

    while(scores.length){
        const p = scores.shift()
        if(ret[0] && ret[0].score !== p.score) break;
        ret.push(p)
    }

    return ret.map(p => p.id).sort()
}