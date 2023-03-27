function solution(a, b) {
    var answer = 0;
    //a,b중에 최댓값, 최솟값
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    for(let i=min; i<=max; i++){
        if(a === b){
            answer = a
        }else{
            answer += i
        }
    }
    
    return answer;
}