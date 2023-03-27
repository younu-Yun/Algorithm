function solution(x) {
    var answer = true;
    let acc = String(x)
    .split('')
    .reduce((acc, cur, idx) => {return Number(acc) + Number(cur)}, 0)
    
    
    
    return x % acc === 0 ? true : false;
}