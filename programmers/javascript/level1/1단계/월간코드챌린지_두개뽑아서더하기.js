function solution(numbers) {
    let array = new Array(201);
    for (let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            array[numbers[i]+numbers[j]] = 1;
        }
    }
    const answer = array.map((num, idx)=> {if(num===1){
        return idx;
    }}).filter((num)=>num !== undefined)
    return answer;
}

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}