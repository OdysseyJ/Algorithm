function solution(numbers) {
    const sorted = numbers.sort((a,b)=>{
        const first = String(b).repeat(4);
        const second = String(a).repeat(4);
        if (first > second) return 1;
        if (first < second) return -1;
        return 0;
    })
    return String(Number(sorted.join("")));
}