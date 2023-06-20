function solution(s) {
    //주의사항: 공백문자가 연속해서 나올 수 있음
    
    const arr = s.toLowerCase().split('');
    const answer = arr.map((item, index) => {
        if(item !== ' '){
            if(index === 0 || arr[index-1] === ' ') return item.toUpperCase();
            return item
        }else{
            return item
        }
    })
    
    return answer.join('');
}