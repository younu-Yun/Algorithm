function solution(price, money, count) {
    var answer = -1;
    let add = 0;
    
    for(let i = 1; i<=count; i++ ){
        add += price * i
    }
    
    

    return money >= add ? 0 : add - money ;
}