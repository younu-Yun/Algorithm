function solution(num_list) {
    
    const odd = num_list.filter(item => item % 2 === 0)
    const even = num_list.filter(item => item % 2 !== 0)
    
    const answer = Number(odd.join('')) + Number(even.join(''))
    
    return answer;
}