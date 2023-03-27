function solution(left, right) {
    var answer = 0;
    
    let arr = [];
    for(let i=left; i<=right; i++){
        arr.push(i);
    }
    
    let divisor = [];
    for(let i=0; i<arr.length; i++){
       let cnt = 0;
        for(let j=1; j<=arr[i]; j++){
            if(arr[i] % j === 0){
                cnt += 1;
            }
            
        }
        divisor.push(cnt);
    }
    
    let result = arr.reduce((acc, cur, idx) => {
        return divisor[idx] % 2 === 0 ? acc + cur : acc - cur
    },0)
    
    
    return result;
}