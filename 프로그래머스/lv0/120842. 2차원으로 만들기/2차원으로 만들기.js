function solution(num_list, n) {
    var answer = [];
    let newArr = []
    const divide = Math.floor(num_list.length / n) + (Math.floor(num_list.length % n ) > 0 ? 1 : 0);
    for(let i=0; i<divide; i++){
        answer.push(num_list.splice(0, n))
    }
    
    
    
    return answer;
}