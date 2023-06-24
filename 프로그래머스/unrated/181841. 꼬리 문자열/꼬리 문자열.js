function solution(str_list, ex) {
    var answer = '';
    
    for(let i=0; i<str_list.length; i++){
        str_list[i].indexOf(ex) === -1 ? answer += str_list[i] : answer
    }
    
    
    return answer;
}