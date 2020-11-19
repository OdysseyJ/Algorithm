// 내 풀이
function solution(dartResult) {
    let answer = 0;
    let number = [];
    let ten = false;
    let idx = -1;
    const result = dartResult.split("").map((el, i)=>{
        // check num
        if(!isNaN(el)){
            let curNum = el;
            if (curNum==="0" && ten){
                curNum = 10;
                ten = false;
            }
            if (curNum==="1" && dartResult[i+1] === "0"){
                ten = true;
                return;
            }
            number.push(Number(curNum));
            idx += 1;
            return;
        }
        switch (el){
            case "S": {
                return;
            }
            case "D": {
                number[idx] = Math.pow(number[idx],2);
                return;
            }
            case "T":{
                number[idx] = Math.pow(number[idx],3);
                return;
            }
            case "*":{
                if(idx===0){
                    number[idx] = 2*number[idx];
                }
                else{
                    number[idx-1] = 2*number[idx-1];
                    number[idx] = 2*number[idx];
                }
                return;
            }
            case "#": {
                number[idx] = number[idx] * (-1);
                return;
            }
            default: {
                return;
            }
        }
        
    })
    return number.reduce((a,b)=>a+b);
}

// 다른 사람 풀이. 깔끔하게 정규표현식.
function solution(dartResult) {
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    let darts = dartResult.match(/\\d.?\\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(\\d{1,})([SDT])([*#])?/),
            score = Math.pow(split[1], bonus[split[2]]);

        if (split[3] !== undefined) {
            if (split[3] === '*') {
                score *= 2;

                if (i > 0) darts[i - 1] *= 2;
            } else score *= -1;
        }

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
