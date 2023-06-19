function solution(numbers) {
    let num = 0;
    
    for(let i=0; i<=9; i++){
        num += i
    }
    
    const answer = numbers.reduce((acc, cur) => {return acc - cur}, num)
    
    
    
    return answer;
}