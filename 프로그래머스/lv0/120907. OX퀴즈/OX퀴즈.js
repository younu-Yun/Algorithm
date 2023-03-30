function solution(quiz) {
    var answer = [];

    
    for(let i=0; i<quiz.length; i++){
        let lft = quiz[i].split(' = ')[0];
        let rgt = quiz[i].split(' = ')[1];
        let result = 0;

        if(lft.includes('+')){
           result = Number(lft.split(' + ')[0]) + Number(lft.split(' + ')[1])
        }else if(lft.includes('-')){
           result = Number(lft.split(' - ')[0]) - Number(lft.split(' - ')[1])
        }else if(lft.includes('*')){
           result = Number(lft.split(' * ')[0]) * Number(lft.split(' * ')[1])
        }else{
           result = Number(lft.split(' / ')[0]) / Number(lft.split(' / ')[1])
        }

        if(result == rgt){
            answer.push("O")
        }else{
            answer.push("X")
        }
    }
    
    
    
    return answer;
}