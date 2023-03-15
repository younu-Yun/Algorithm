function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => b - a);
    
    //만약 음수 두개의 값이 더 크다면?
    if((numbers[numbers.length-1] * numbers[numbers.length-2]) > numbers[0] * numbers[1]){
        return (numbers[numbers.length-1] * numbers[numbers.length-2]);
    }else{
        return numbers[0] * numbers[1];
    }
}