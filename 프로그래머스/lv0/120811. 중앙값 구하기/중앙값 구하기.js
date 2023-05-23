function solution(array) {
    var answer = 0;
    let newArr = array.sort((a,b) => a-b)
    return newArr[Math.floor(newArr.length/2)]
}