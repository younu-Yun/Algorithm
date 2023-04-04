function solution(t, p) {
    var answer = [];
    let cnt = 0;
    for(let i=0; i<t.length-(p.length - 1); i++){
        answer.push(t.slice(cnt, cnt +p.length))
        cnt ++
    }
    
    answer = answer.filter(item => Number(item) <= Number(p))
    
    
    return answer.length;
}