function solution(arr)
{

    let answer = arr.filter((item, index) => item !== arr[index + 1])

    return answer;
}