function solution(n)
{
    var arr = String(n).split('');
    let answer = arr.reduce((acc, cur, idx) => {
        return Number(acc) + Number(cur);
    }, 0)
    

    return answer;
}