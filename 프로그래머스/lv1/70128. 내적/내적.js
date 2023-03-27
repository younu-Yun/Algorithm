function solution(a, b) {
    var answer = 1234567890;
    
    let arr = a.reduce((acc, cur, idx) => {
        return acc + cur * b[idx]
    }, 0)
    
    return arr;
}