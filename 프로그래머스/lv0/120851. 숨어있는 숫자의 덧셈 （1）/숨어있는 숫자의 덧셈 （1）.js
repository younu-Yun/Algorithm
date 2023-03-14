function solution(my_string) {
    var answer = 0;
    var arr = my_string.split('');
    
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "1" || arr[i] === "2" || arr[i] === "3" || arr[i] === "4" || arr[i] === "5" || arr[i] === "6" || arr[i] === "7" || arr[i] === "8" || arr[i] === "9"){
            answer += parseInt(arr[i])
        }
    }
    
    return answer;
}