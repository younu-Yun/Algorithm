function solution(n) {
    var answer;
    
    if(n <= 7){
        answer = 1;
    }else{
        answer = Math.ceil(n / 7);
    }
        
    return answer;
}