function solution(arr1, arr2) {
    return arr1.map((block, row)=> block.map((el, idx)=>{
            return arr2[row][idx] + el;
            }
        )
    )
}

return A.map((a,i) => a.map((b, j) => b + B[i][j]));