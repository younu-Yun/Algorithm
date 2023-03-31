function solution(s) {
    
    let str = s.toLowerCase();
    let arr = str.split(' ');
    
    
    let result = []

     for(let i = 0; i<arr.length; i++){
        var answer = '';
        for(let j=0; j<arr[i].length; j++){
            if(j === 0 || j % 2 === 0){
                answer += arr[i][j].toUpperCase();
            }else{
                answer += arr[i][j];
            }
        }
        result.push(answer);
     }  
        
        
    
    
    
    return result.join(' ');
}