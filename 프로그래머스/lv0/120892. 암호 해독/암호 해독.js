function solution(cipher, code) {
    var answer = '';
    
    for(let i=1; i<=cipher.length; i++){
        let num = (i*code) - 1;
        if(num < cipher.length){
            answer += cipher[num];    
        }
        
    }
    
    return answer;
}