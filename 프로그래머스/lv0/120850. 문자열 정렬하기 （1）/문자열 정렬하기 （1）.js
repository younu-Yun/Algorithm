function solution(my_string) {
    var answer = [];
    let regex = /[^0-9]/g;
    
    let newStr = my_string.replace(regex, '');
    let arr = newStr.split('');
    arr.sort((a, b) => a - b);
    
    for(i=0; i<arr.length; i++){
        answer.push(Number(arr[i]));
    }
    
    
    return answer;
}