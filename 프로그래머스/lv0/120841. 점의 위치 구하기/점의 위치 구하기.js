function solution(dot) {
    var answer;
    let x = dot[0];
    let y = dot[1];
    
    if(x > 0 && y > 0) answer = 1;
    if(x < 0 && y > 0) answer = 2;
    if(x < 0 && y < 0) answer = 3;
    if(x > 0 && y < 0) answer = 4;
    
    return answer;
}