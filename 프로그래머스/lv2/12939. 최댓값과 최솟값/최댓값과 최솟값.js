function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    let min = arr.sort((a, b) => a - b)[0];
    let max = arr.sort((a, b) => b - a)[0];
    
    
    return min+' '+max;
}