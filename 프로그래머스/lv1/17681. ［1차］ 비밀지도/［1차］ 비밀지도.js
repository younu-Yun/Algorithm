function binary(num, n){
    let binaryArr = [];
    if(num === 1) binaryArr = [1];
    while(num > 1){
        binaryArr.unshift(num % 2);
        if(num <= 3){
            binaryArr.unshift(Math.floor(num / 2));
            break;
        }else{
            num = Math.floor(num / 2)
        }
    }
    
    return binaryArr.join('').padStart(n, "0");
}

function solution(n, arr1, arr2) {
    var answer = [];
    let binArr1 = arr1.map(item => binary(item, n));
    let binArr2 = arr2.map(item => binary(item, n));
    
    for(let i=0; i<n; i++){
        let str = ''
        for(let j=0; j<n; j++){
            if(binArr1[i][j] === "0" && binArr2[i][j] === "0"){
                str += ' ';
            }else{
                str += '#';
            }
        }
        answer.push(str);
    }
    console.log(`arr1 : ${binArr1}`)
    console.log(`arr2 : ${binArr2}`)
    return answer;
}