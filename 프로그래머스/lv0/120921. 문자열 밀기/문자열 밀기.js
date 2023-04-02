function solution(A, B) {
    var answer = 0;
    
    let cnt = 0;
    for(let i=0; i<=A.length; i++){
        console.log(A)
        if(A === B){
            break;
        }else{
            let last = A[A.length - 1]
            A = A.slice(0, -1);;
            A = last + A
            cnt++
            
        }
    }
    
    
    
    
    
    return A.length < cnt ? -1 : cnt;
}