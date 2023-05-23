function solution(my_string, n) {
    
    const answer = my_string.split('').map(item => item.repeat(n)).join('')
    
    return answer;
}