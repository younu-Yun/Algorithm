function solution(a, b) {
    var answer = 0;
    
    if(b === 1){
        return 1;
    }else{
        for(let i=a; i>=2; i--){
            if(a % i === 0 && b % i === 0){
                answer += i;
                break;
            }
        }

        if(answer !== 0){
            b = b / answer
        }
    }
    console.log(b)
    
    let arr = [];
    let cnt = 2;
    while(b > 1){
        if(b % cnt === 0){
            b = b / cnt;
            arr.push(cnt);
        }else{
            cnt++;
        }
    }
    
    let cnt2 = 0;
    let arr2 = arr.filter(item => 
        (item !== 2 && item !== 5)
    )
    
    
    return arr2.length === 0 ? 1 : 2;
}