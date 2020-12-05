function solution(number, k) {
    let nowIndex = 0;
    let validLength = number.length - k;
    let leftCount = validLength;
    let result = [];
    let nowString = number;
    while(leftCount !== 0){
        const validString = nowString.substr(0, validLength);
        let numArray = validString.split("").map((strNum)=>Number(strNum));
        const max = String(Math.max.apply(null,numArray));
        result.push(max);
        const maxIndex = nowString.indexOf(max);
        nowString = nowString.substr(maxIndex+1, nowString.length - (maxIndex+1));
        leftCount -= 1;
        validLength = nowString.length - (leftCount-1);
    }
    return result.join("");
}