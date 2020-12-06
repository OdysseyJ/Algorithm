function solution(clothes) {
    const clothMap = new Map();
    clothes.forEach((cloth)=>{
        const before  = clothMap.get(cloth[1]);
        if(before) clothMap.set(cloth[1], before+1);
        else clothMap.set(cloth[1], 1);
    })
    let result = 1;
    clothMap.forEach((value)=>{
        result *= value+1;
    })
    return result-1;
}