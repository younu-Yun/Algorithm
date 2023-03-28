function solution(s) {
    var answer = true;
    let arr = s.split('')
    let newArr = arr.find((item, index, array) => isNaN(item))
    
    if(newArr === undefined){
        if(arr.length === 4 || arr.length === 6){
            answer = true;    
        }else{
            answer = false;   
        }
    }else{
        answer = false;
    }
    
    
    
    
    
    
    
    return answer;
}