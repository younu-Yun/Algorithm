function solution(num_list, n) {
    var answer = 0;
    
    answer = num_list.filter(item => item === n)
    return answer.length > 0 ? 1 : 0;
}