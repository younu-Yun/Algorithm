function solution(n) {
    const answer = String(n).split('').reduce((prev, cur) => {return Number(prev) + Number(cur)}, 0)
    return answer;
}