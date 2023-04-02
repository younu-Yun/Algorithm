function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    
    // let arr = babbling.filter(item => item.includes("aya") || item.includes("ye") || item.includes("woo") || item.includes("ma"));
    
    let cnt = 0;
    for(let i=0; i<babbling.length; i++){
        console.log(babbling[i])
        for(let j=0; j<words.length; j++){
            if(babbling[i].includes(words[j])){
                babbling[i] = babbling[i].replaceAll(words[j], '*');
                
            }
        }
         console.log(babbling[i])
       
        if(babbling[i].replaceAll('*', '') === ''){
            cnt++
        }else{
            continue;
        }
    }
    
    return cnt;
}