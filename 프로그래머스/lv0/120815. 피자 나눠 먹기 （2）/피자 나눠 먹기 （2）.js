function solution(n) {
    var answer = [];

    
    //피자 조각과 인원 중 누가 더 큰지 구하기
    let num;
    if(n>=6){
        num = n;
    }else{
        num = 6;
    }
    
    for(let i=num; i<=num*6; i++){
        if(i%6 === 0 && i%n === 0){
            answer.push(i);
        }
    }
    
    
    
    return answer[0]/6;
}