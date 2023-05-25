function solution(myString, pat) {
    var answer = 0;
    const string = myString.toLowerCase()
    const stringPat = pat.toLowerCase()
    
    string.indexOf(stringPat) !== -1 ? answer = 1 : answer = 0
    
    return answer;
}