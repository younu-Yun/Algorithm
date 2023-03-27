function solution(absolutes, signs) {
    var answer = 123456789;
    
    let arr = absolutes.reduce((acc, cur, idx) => {
        return signs[idx] === true ?  acc+cur :  acc-cur
    }, 0)
    return arr;
}