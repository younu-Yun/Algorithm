function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    //1. 분수 2개 더하기
    //1-1) 분모의 합
    let denom = denom1 * denom2;
    //1-1) 분자의 합
    let numer = numer1 * denom2 + numer2 * denom1;
    
    
   
    
    //2. 현재분수를 기약분수로 나타내기
    let miner;
    if(numer < denom){
        miner = numer;
    }else{
        miner = denom;
    }
    
    for(let i=miner; i>=1; i--){
        if(numer % i === 0 && denom % i === 0){
            answer.push(numer/i);
            answer.push(denom/i);
            break;
        }
        
        
    }
    
    return answer;
}