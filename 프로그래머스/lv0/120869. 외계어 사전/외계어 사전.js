function solution(spell, dic) {
    
    
    for(let i=0; i<spell.length; i++){
        dic = dic.filter((item, index) => item.includes(spell[i]))
        console.log(spell[i], dic);
    }
    
    return dic.length === 0 ? 2 : 1;
}