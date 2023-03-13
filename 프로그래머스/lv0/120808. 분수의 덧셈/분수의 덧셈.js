function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    
    //합쳐진 분자,분모 중 작은 수를 찾기
    let minNum;
    if(numer > denom){
        minNum = denom;
    }else{
        minNum = numer;
    }
    
    //작은분모 기준으로 나누기(최대공약수 값 구하기)
    // let min = 1;
    // for(let i=minNum; i>=1; i--){
    //     if(denom % minNum === 0 && numer % minNum === 0){
    //         min *= i;
    //         break;
    //     }
    // }
    
    while(true){
        if(denom % minNum === 0 && numer % minNum === 0){
            return [numer/minNum, denom/minNum]
        }
        minNum--
    }
    
    
 
}