function solution(arr) {
    var answer = [];
    let min = [...arr].sort((a, b) => a - b)[0];
    let min_idx = arr.indexOf(min)
    
    arr.splice(min_idx, 1)
    
    return arr.length === 0 ? [-1] : arr;
}