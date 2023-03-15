function solution(n, t) {
    var answer = 0;
    
    let i = 1;
    do{
        n *= 2;
        i++;
        
    }while(i <= t)
    
    return n;
}