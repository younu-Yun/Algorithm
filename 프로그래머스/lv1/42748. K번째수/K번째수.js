function solution(array, commands) {
    var answer = [];

    
    for (let [i, j, k] of commands) {
        answer.push(Number(
          array
            .slice(i - 1, j)
            .sort((a, b) => a - b)[k - 1]
        ));
      }

    
    
    
    
    return answer;
}