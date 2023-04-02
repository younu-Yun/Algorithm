function solution(array) {
    var answer = [];
    
    let arr = array.filter((item, index) => array.indexOf(item) === index);
    
    for(let i=0; i<arr.length; i++){
        let cnt = 0;
        for(let j=0; j<array.length; j++){
            if(arr[i] === array[j]){
                cnt++
            }
        }
        answer.push([arr[i], cnt])
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    
    if(answer.length === 1){
        return answer[0][0];
    }else if(answer[0][1] > answer[1][1]){
        return answer[0][0];
    }else{
        return -1
    }
    
}