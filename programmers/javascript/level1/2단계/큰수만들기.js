function solution(number, k) {
    let leftCount = String(number).length - k;
    let nowString = String(number);
    let result = [];
    while(leftCount !== 0){
        const validLength = nowString.length - (leftCount-1);
        const validString = nowString.substr(0, validLength);
        let numArray = validString.split("").map((strNum)=>Number(strNum)); 
        const max = String(Math.max.apply(null,numArray));
        const maxIndex = nowString.indexOf(max);
        result.push(max); 
        nowString = nowString.substr(maxIndex+1, nowString.length - (maxIndex+1));
        leftCount -= 1;
    }
    return result.join("");
}