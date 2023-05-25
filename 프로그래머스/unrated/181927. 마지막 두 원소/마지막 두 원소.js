function solution(num_list) {
    var answer = [];
    const arrLast = num_list[num_list.length-1]
    const arrLast2 = num_list[num_list.length-2]
    
    arrLast > arrLast2 ? num_list.push(arrLast - arrLast2) :  num_list.push(arrLast * 2)
    
    return num_list;
}