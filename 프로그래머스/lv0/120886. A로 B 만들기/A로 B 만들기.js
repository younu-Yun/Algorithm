function solution(before, after) {
    var answer = 0;
    let arr1 = before.split('');
    let arr2 = after.split('');
    
    let newBefore =  arr1.sort().join('');
    let newAfter = arr2.sort().join('');
    
    if(newBefore ===  newAfter){
        return 1
    }else{
        return 0
    }
    

    
}