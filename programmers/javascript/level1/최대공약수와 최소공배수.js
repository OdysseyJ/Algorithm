// 내풀이
const gcd = (a, b) => {
    let num1 = a;
    let num2 = b;
    while(num2!=0){
        let r = num1%num2;
        num1 =  num2;
        num2 = r;
    }
    return num1;
}

const lcm = (a, b) =>{
    return  a*b/gcd(a,b);
}

function solution(n, m) {
    return  [gcd(n,m),lcm(n,m)]
}