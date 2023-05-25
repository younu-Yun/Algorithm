function solution(my_string, alp) {
    var answer = '';
    const bigAlp = alp.toUpperCase();
    
    return my_string.replaceAll(alp, bigAlp);
}