function solution(absolutes, signs) {
    const answer = absolutes.map((item, index) => {
        if(signs[index] === false){
            return Number(-item)
        }else{
            return item
        }
    }).reduce((acc, cur) => acc + cur)
    
    
    
    
    
    return answer;
}