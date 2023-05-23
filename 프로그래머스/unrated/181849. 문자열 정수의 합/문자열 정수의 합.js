function solution(num_str) {
    var answer = 0;
    num_str = num_str.split('').map(index => Number(index)).reduce((prev, cur) => {return prev + cur}, 0)
    return num_str;
}