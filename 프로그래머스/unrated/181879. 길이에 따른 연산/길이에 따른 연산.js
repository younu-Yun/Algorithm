function solution(num_list) {
    var answer = 0;
    
    if(num_list.length >= 11){
        return [...num_list].reduce((prev, cur) => {return prev + cur}, 0)
    }else{
        return [...num_list].reduce((prev, cur) => {return prev * cur})
    }
    
}