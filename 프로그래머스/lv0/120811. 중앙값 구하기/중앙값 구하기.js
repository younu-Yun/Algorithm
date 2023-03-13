function solution(array) {
    var answer = [];
    
    //array 오름차순 정리
    array.sort((a, b) => a-b);
    
    //array의 중앙값 출력
    // 3 → 2, 5 → 3, 7 → 5
    
    let middle = Math.floor(array.length / 2);
    
    
    return array[middle];
}