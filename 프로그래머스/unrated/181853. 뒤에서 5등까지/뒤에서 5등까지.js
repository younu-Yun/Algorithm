function solution(num_list) {
    
    const answer = num_list.sort((a, b) => a - b).filter((item, index) => index <= 4 )
    return answer;
}