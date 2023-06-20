function solution(n) {
    const word = '수박';
    if(n % 2 === 0){
        return word.repeat(n/2);
    }else{
        let arr = word.repeat(Math.round(n/2)).split('');
        
        arr.pop()
        
        return arr.join('')
        
    }
    
    
}
    