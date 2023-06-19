function solution(s) {
    
    let arr = s.split(' ');
    
    const answer = arr.sort((a, b) => a - b)
    
    const min = answer[0]
    const max = answer[arr.length - 1]
    
    return `${min} ${max}`;
}