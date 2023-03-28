function solution(n, m) {
    var answer = [];
    let min = Math.min(n,m);
    let max = Math.max(n,m);
    
    //1. 최대공약수
    for(let i = min; i>=1 ; i--){
        if(min % i === 0 && max % i === 0){
            answer.push(i);
            break;
        }
    }
    
    //2. 최소공배수
    let cnt = max;
    while(cnt >= max){
        if(cnt % n === 0 && cnt % m === 0){
            answer.push(cnt);
            break;
        }
        cnt++
    }
    
    
    
    return answer;
}