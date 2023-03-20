function solution(balls, share) {
    var answer = 0;
    
    //팩토리얼 함수 만들기
    function factorial(n) {
        var result = 1;
        
        for(var i=2; i<=n; i++) result *= i;
        
        return result;
    }


    
    //1. 분자 구하기
    let numer = factorial(balls);
    //2. 분모 구하기
    let denom = factorial(balls - share) * factorial(share);
    
    
    if(balls === share) return 1
    return Math.round(numer/denom);
    
    
}