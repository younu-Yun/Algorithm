function solution(arr, divisor) {
    var answer = [];
    
    let divArr = arr.filter(item => item % divisor === 0).sort((a, b) => a - b)
    return divArr.length !== 0 ? divArr : [-1] ;
}