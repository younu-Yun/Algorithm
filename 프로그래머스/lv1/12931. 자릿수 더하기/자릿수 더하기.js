function solution(n)
{
    var answer = 0;
    const arr = String(n).split('');
    
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(arr)
    
    if(arr.length === 1){
        return n
    }else{
        return arr.reduce((prev, cur) => Number(prev) + Number(cur));    
    }
    
}