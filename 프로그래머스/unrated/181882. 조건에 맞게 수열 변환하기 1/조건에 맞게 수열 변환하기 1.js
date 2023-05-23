function solution(arr) {
    var answer = [];
    
    const newArr = arr.map(item => {
        if(item >= 50 && item % 2 === 0){
            return item / 2
        }else if(item < 50 && item % 2 !== 0){
            return item * 2
        }else{
            return item    
        }
        
    })
    
    return newArr;
}