function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a, b) => a - b);
    
    for(let i=0; i<arr.length; i++){
        
        if(budget - arr[i] >= 0){
            answer += 1;
            budget = budget - arr[i];
        }
        
        
        
        console.log(budget)
    }
    
    
    return answer;
}