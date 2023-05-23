function solution(s1, s2) {
    var answer = 0;
    
    const newArr = s1.filter(item => s2.includes(item)).length
    return newArr;
}