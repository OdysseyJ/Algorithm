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

// 다른사람거 미쳤다.r
const solution = s => {
    const range = [...Array(s.length)].map((_, i) => i + 1);
    return Math.min(...range.map(i => compress(s, i).length));
  };
  
  const compress = (s, n) => {
    const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
    return make(
      chunk(s, n).reduce(
        ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
        ['', '', 0]
      )
    );
  };
  
  const chunk = (s, n) =>
    s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
  
  