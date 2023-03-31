function solution(arr)
{
    // var answer = [];
    
    // const uniq = array => [...new Set(array)];
    
    let answer = arr.filter((item, index) => item !== arr[index + 1])

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}