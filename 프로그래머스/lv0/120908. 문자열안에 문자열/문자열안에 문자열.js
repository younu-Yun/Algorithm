function solution(str1, str2) {
    var answer = 0;
    
    let count = str2.length;
    
    for(let i=0; i<str1.length; i++){
        if(str1.substr(i, count) === str2){
            answer = 1;
            break;
        }else{
            answer = 2;
        }
    }
    
    
    return answer;
}