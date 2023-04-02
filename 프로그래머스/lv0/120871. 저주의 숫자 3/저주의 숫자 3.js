function solution(n) {
    var answer = 0;
    
    let i = 0;
    let binary3 = 0;
    
    
    while(i < n){
        binary3 += 1;
        if(binary3 % 3 === 0 || String(binary3).includes('3') === true){
            binary3 += 1;
        }else{
            binary3;
        }
        
        if(binary3 % 3 === 0 || String(binary3).includes('3') === true){
            i;
        }else{
            i += 1;
        }
        
        console.log(i, binary3);
        
    }
    
    return binary3;
}