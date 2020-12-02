function solution(s) {
    const alphabetArray = s.split("");
    let splitLength = 1;
    let lengthArray = [];
    while(true){
        if (splitLength === s.length){
            lengthArray.push(s.length);
            break;
        }
        let converted = [];
        for (let i = 0; i < alphabetArray.length;){
            let wordCount = 1;
            const word = s.substr(i, splitLength);
            let start = i+splitLength;
            while(true){
                if (start+splitLength > alphabetArray.length) break;
                let compare = s.substr(start, splitLength);
                if(compare === word){
                    wordCount+=1;
                    start += splitLength;
                } else{
                    break;
                }
            }
            if (wordCount===1){
                converted.push(word)
            } else{
                converted.push(wordCount+word);
            }
            i = i+(word.length*wordCount);
        }
        let totalLength = converted.join("").length;
        lengthArray.push(totalLength);
        splitLength+=1;
    }
    return Math.min.apply(Math, lengthArray);
}