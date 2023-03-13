function solution(money) {
    var answer = [];
    
    //아메리카노 갯수
    let coffee = Math.floor(money / 5500);
    //나머지 값
    let change = money % 5500;
    
    return [coffee, change];
}