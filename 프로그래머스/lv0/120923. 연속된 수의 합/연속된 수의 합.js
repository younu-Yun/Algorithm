function solution(num, total) {
    var answer = [];
    
    
    if(num % 2 !== 0){
        let center = total / num;
        
        answer.push(center);
        for(let i=1; i<=(num-1)/2; i++){
            answer.push(center + i);
            answer.unshift(center - i);
        }
        
        
    }else{
        let center_lft = Math.floor(total / num);
        let center_rgt = Math.round(total / num);
        
        answer.push(center_lft);
        answer.push(center_rgt);
        
        for(let i=1; i<=(num-2)/2; i++){
            answer.push(center_rgt + i);
            answer.unshift(center_lft - i);
        }
        
    }
    
    return answer;
}