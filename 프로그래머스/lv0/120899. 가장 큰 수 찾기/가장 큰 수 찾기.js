function solution(array) {
    var answer = [];
    
    let newArr = array.map(n => n);
    newArr.sort((a, b) => b - a);
    
    for(let i=0; i<array.length; i++){
        if(array[i] === newArr[0]){
            answer = [newArr[0], i]
        }
    }
    
    return answer;
}