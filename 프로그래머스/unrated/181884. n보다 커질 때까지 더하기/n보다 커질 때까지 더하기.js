function solution(numbers, n) {
    
    const answer = numbers.reduce((prev, cur) => {
        if(prev > n){
            return prev + 0
        }
        return prev + cur
    })
    
    
    return answer;
}