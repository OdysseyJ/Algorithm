const getGcd = (w,h)=>{
    let big = w>=h ? w : h;
    let small = w>=h ? h : w;
    while(small != 0){
        const extra = big % small ;
		big = small;
		small = extra;
    }
    return big;
}

function solution(w, h) {
    const gcd = getGcd(w,h);
    let related = w/gcd + h/gcd - 1;
    return w*h - related * gcd;
}
