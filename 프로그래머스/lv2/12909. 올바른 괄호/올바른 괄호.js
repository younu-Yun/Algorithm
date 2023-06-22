function solution(s) {
  let count = 0; // 괄호 개수

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++; // 여는 괄호일 경우 개수 증가
    } else {
      count--; // 닫는 괄호일 경우 개수 감소
    }

    if (count < 0) {
      return false; // 닫는 괄호가 더 많은 경우, 올바르지 않은 괄호
    }
  }

  return count === 0;
}