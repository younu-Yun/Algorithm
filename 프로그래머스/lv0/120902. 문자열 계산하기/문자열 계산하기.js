function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(' ');
    
    for(let i=0; i<arr.length; i++){
        if(i === 0){
            answer += Number(arr[i])
        }
        if(i % 2 !== 0){
            if(arr[i] === '+'){
                answer += Number(arr[i+1])
            }else{
                answer -= Number(arr[i+1])
            }
        }
        console.log(answer)
    }
    
    return answer;
}