function solution(polynomial) {
    
    let arr = polynomial.split(' ');
    let xArr = arr.filter(item => item.includes('x'))
    let numArr = arr.filter(item => !isNaN(item))


    let answerX = '';
    let answerNum = '';
    
    let x = xArr.reduce((acc, cur) => {
        if(cur === 'x'){
            return acc + 1;
        }else{
            return acc + Number(cur.replace("x", ""))
        }
    }, 0)
    
    if(x === 1){
        answerX = 'x';
    }else if(x === 0){
        answerX = '';
    }else{
        answerX = x + 'x';
    }
    
    
    let num = numArr.reduce((acc, cur) => {return acc + Number(cur)}, 0)
    
    if(num === 0){
        answerNum = '';
    }else{
        answerNum = String(num);
    }
    

    
    if(x === 0) {
        return answerNum;
    }else if(num === 0){
        return answerX;
    }else{
        return `${answerX} + ${answerNum}`
    }
    
    
}