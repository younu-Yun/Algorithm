function solution(numbers) {
    
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    
     
    for(let i = 0; i < arr.length; i++){
      //split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔주는 방식(?)이다.
        numbers = numbers.split(arr[i]).join(i)
        
        console.log(numbers)
    }
    


    return Number(numbers);
}