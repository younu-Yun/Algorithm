function solution(my_string) {
    var answer = '';
    let arr = my_string.split('');
    
    let result = arr.filter((v, i) => arr.indexOf(v) === i);
    return result.join('');
}