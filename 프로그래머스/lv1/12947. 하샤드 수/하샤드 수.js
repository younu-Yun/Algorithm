function solution(x) {
    var answer = true;
    const sum = String(x).split('').reduce((prev, cur) => Number(prev) + Number(cur))
    
    
    return x % sum === 0 ? true : false;
}