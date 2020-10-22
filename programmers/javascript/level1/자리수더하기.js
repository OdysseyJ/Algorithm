//내풀이
function solution(n)
{
    let total = 0;
    String(n).split("").map((num)=>{total+=Number(num);})
    return total;
}

//다른사람
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

//2
function solution(n){
    // 문자 풀이
    // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

    // 숫자풀이
    var sum = 0;

    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
}
