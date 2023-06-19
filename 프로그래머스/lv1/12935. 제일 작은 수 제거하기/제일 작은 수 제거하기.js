function solution(arr) {
    
    if(arr.length === 1) {
        return [-1];
    }
    
    let min = [...arr].sort((a,b) => a - b)[0];
    
    
    const answer = arr.filter(item => item !== min)
    
    return answer
    
}