function solution(s){
    var answer = true;
    let arrP = s.toLowerCase().split('').filter(item => item === 'p');
    let arrY = s.toLowerCase().split('').filter(item => item === 'y');
    
    
    if(arrP.length === 0 && arrY.length === 0){
        return true
    }else if(arrP.length === arrY.length){
        return true
    }else{
        return false
    }
    


}