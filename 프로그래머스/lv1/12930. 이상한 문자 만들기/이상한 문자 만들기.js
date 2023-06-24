function solution(s) {
    
    let answer = [];
    const sArr = s.split(' ');
    
    for(let i=0; i<sArr.length; i++){
        let string = '';
         for(let j=0; j<sArr[i].length; j++){
            if(j % 2 === 0){
                string += sArr[i][j].toUpperCase(); 
                
            }else{
                string += sArr[i][j].toLowerCase();
            }
        }
        answer.push(string)
    }
    
    return answer.join(' ');
}