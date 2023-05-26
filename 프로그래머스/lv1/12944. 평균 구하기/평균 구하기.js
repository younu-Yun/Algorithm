function solution(arr) {
    
    let answer = arr.reduce((prev, cur) => prev + cur)/arr.length
    
    return answer;
}