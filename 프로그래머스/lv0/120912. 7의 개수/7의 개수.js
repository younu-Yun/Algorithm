function solution(array) {
    var answer = 0;
    
    let str = array.join('').split('');
    
    let cnt = 0;
    
    let cntArr = str.filter((item) => item === "7")
    return cntArr.length;
}