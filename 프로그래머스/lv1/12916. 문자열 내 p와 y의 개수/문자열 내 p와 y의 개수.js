function solution(s){
    var answer = true;
    const string = s.toLowerCase();

    const p = string.split('').filter(item => item === 'p').length
    const y = string.split('').filter(item => item === 'y').length

    return p !== y ? false : true;
}