function solution(n, k) {
    var answer = 0;
    let food = n*12000;
    let drink = k*2000;
    
    if(n < 10){
        answer = food + drink;
    }else if(n >= 10){
        answer = food + drink - (parseInt(n / 10) * 2000);
    }
    
    
    return answer;
}