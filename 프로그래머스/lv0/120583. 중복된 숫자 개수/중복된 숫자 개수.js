function solution(array, n) {
    console.log(array, n)
    let newArr = [];
    for(var i=0; i<array.length; i++){
        
        
        if(array[i] === n){
            newArr.push(array[i]);
        }    
        
    }
    console.log(newArr)
    let answer = newArr.length;
    
    
    return answer;
}