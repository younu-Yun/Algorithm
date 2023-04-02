function solution(numlist, n) {
    
    let arr = numlist.map((item, index) => {
        return [item, Math.abs(item - n)]
    })
    
    arr.sort((a, b) => {
        if(a[1] === b[1]){
            return b[0] - a[0];
        }else{
            return a[1] - b[1]; 
        }
    })
    
    let answer = arr.map(item => item[0])
    
     
    return answer;
}