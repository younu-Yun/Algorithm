function solution(s) {
    var answer = [];
    
    // s.sort();
    let arr = s.split('');
    
    //1. 돌면서 각각 몇개가 겹치는지 파악
    
    for(let i=0; i<arr.length; i++){
        let cnt = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                cnt++;
            }
            
        }
         answer.push(cnt);   
    }
    
    //2. 겹치는 수가 1인 수만 다시 새 배열로 추출하기
    let result = arr.filter((item, index) => {
        if(answer[index] === 1) return item;
    })
    
    //3. 오름차순 정렬 후 문자열로 추출
    return result.sort().join('');;
}