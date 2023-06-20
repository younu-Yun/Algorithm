function solution(arr)
{
    
    const stack = [];
    
    for(let i=0; i<arr.length; i++){
        const num = arr[i];
        
        if(stack.length !== 0 && stack[stack.length -1] === num){
            continue;
        }
        
        stack.push(num)
    }
    
    
    return stack
}