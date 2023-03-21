function solution(emergency) {
    
    //[3, 76, 24] → 역순정렬 → [76, 24, 3] → [[76, 1], [24, 2], [3, 3]]
    
    let arr = [...emergency]
        .sort((a, b) => b - a)
        .map((item, idx) => {return [item, idx + 1]});
    
    let answer = [];
    for(let i=0; i<emergency.length; i++){
        for(let j=0; j<arr.length; j++){
            if(emergency[i] === arr[j][0]){
                answer.push(arr[j][1]);
            }
        }
    }
    
    return answer;
}