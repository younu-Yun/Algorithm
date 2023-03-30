function solution(spell, dic) {
    
    
    for(let i=0; i<spell.length; i++){
        var dic = dic.filter((item, index) => item.includes(spell[i]))
        // console.log(dic);
    }
    
    return dic.length === 0 ? 2 : 1;
}