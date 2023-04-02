function solution(dots) {
    var answer = 0;
    //dots중 x, y 둘다 최고로 큰 값 찾기
    let arr = dots.sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]);
    let maxdot = arr[0];
    
    let x = maxdot[0] - arr[3][0];
    let y = maxdot[1] - arr[3][1];
    
    
    return x*y;
}