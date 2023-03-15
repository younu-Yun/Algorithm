function solution(my_string) {
    var answer = '';
    var small = 'abcdefghijklnmopqrstuvwxyz';
    var large = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ';
    
    for(let i=0; i<my_string.length; i++){
        for(j=0; j<small.length; j++){
            
            if(my_string[i] === small[j]){
                answer += large[j];
            }else if(my_string[i] === large[j]){
                answer += small[j];
            }
            
        }
    }
    
    
    return answer;
}