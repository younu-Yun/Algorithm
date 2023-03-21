function solution(my_string) {
    var answer = '';
    //1.대문자를 소문자로 변경
    let arr = my_string.split('');
    
    //2. 알파벳을 다른 통일된 문자로 변경
    let arrSpace = arr.map(item => isNaN(item) ? "*" : item);
    
    //3. arrSpace[i]가 숫자이고 arrSpace[i+1]이 "*"이면 뒤에 뛰어쓰기 붙여서 출력,
    // arrSpace[i]가 숫자이고 arrSpace[i+1]도 숫자면 뒤에 뛰어쓰기 없이 출력
    for(let i=0; i<arrSpace.length; i++){
    
        if(arrSpace[i] !== "*" && arrSpace[i+1] === "*"){
            answer += arrSpace[i]+' ';
        }else if(arrSpace[i] !== "*" && arrSpace[i+1] !== "*"){
            answer += arrSpace[i];
        }
    }
    
    let result = answer.split(' ');
    
    let cnt = 0;
    for(let i=0; i<result.length; i++){
        if(isNaN(result[i])){
           cnt
        }else{
            cnt += Number(result[i]);
        }
    }
    
    return cnt;
}