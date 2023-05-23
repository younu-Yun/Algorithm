function solution(array, height) {
    var answer = 0;
    
    const newArr = array.filter(item => item > height).length
    return newArr;
}