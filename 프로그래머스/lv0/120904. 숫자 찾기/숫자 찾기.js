function solution(num, k) {
    
    // 정수 -> 문자열로 변경
    const str = String(num);
    
    // element를 문자열에서 정수로 변경
    const mapfn = (arg) => Number(arg);
    
    // 문자열 -> 배열로 변경
    let newArr = Array.from(str, mapfn);
    
    let answer = newArr.indexOf(k);
    
    if(answer !== -1){
        answer += 1
    }
    
    
    return answer;
}