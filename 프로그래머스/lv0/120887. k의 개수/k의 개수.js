function solution(i, j, k) {
    var answer = '';
    for(i; i<=j; i++){
        answer += i;
    }
    
    let newArr = answer.split('').map((elm, idx)=>{
        return parseInt(elm);
    })
    let newArr2 = newArr.filter(elm => elm === k)
    
    return newArr2.length;
}