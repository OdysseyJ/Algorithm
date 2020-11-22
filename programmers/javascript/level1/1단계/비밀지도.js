function solution(n, arr1, arr2) {
    let result = [];
    for (let i = 0; i < n; i++){
        const array1 =  Array.from(new Array(n),()=>0);
        let array1Idx = n-1;
        const array2 =  Array.from(new Array(n),()=>0);
        let array2Idx = n-1;
        let firstArray = arr1[i].toString(2).split("");
        let secondArray = arr2[i].toString(2).split("");
        for (let j = firstArray.length-1; j >= 0; j--){
            array1[array1Idx] = firstArray[j];
            array1Idx -= 1;
        }
        for (let j = secondArray.length-1; j >= 0; j--){
            array2[array2Idx] = secondArray[j];
            array2Idx -= 1;
        }
        let temp = [];
        for (let j = 0; j < n; j++){
            if (array1[j]==='1' || array2[j]==="1"){
                temp.push("#");
            } else{
                temp.push(" ");
            }
        }
        result.push(temp.join(""))
    }
    return result;
}