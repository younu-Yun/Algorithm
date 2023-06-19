function solution(phone_number) {
    
    const arr = String(phone_number).split('')
    const answer = arr.map((item, index) => {
        if(arr.length - 4 <= index) {
            return item
        }else{
            return item = '*'
        }
    })
    
    return answer.join('');
}