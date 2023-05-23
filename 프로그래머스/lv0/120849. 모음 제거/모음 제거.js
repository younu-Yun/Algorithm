function solution(my_string) {

    const newString = my_string.split('').filter(item => {
        if(item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u'){
            return item
        }
    })
    
    
    return newString.join('');
}