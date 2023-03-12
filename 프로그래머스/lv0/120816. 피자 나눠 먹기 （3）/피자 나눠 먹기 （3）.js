function solution(slice, n) {
    var answer;
    
    if(n % slice === 0){
        answer = parseInt(n / slice);
    }else if(n % slice !== 0){
        answer = parseInt(n / slice) + 1;
    }
    
    return answer;
}