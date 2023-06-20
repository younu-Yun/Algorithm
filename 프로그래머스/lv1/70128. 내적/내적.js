function solution(a, b) {
    const arr = a.map((item, index) => item * b[index]).reduce((acc, cur) => acc + cur)
    return arr;
}