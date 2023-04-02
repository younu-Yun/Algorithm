function solution(sides) {
    var answer = 0;
    let big = Math.max(sides[0], sides[1]);
    let small = Math.min(sides[0], sides[1]);
    
    let result = [];
    
    //가장 긴 변이 big인 경우
    let cnt = 0;
    for(let i=1; i<=big; i++){
        if(i > big - small && i <= big){
             cnt++
        }
    }
    
    for(let i=big + 1; i<big + small; i++){
        cnt++;
    }
    
    
    
    return cnt;
}