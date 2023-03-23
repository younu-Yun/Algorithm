function solution(bin1, bin2) {
    
//     function decimal(str) {
//         let num = 0;
//         let top = str.length -1;
//         if(str === "0"){
//             return 0;
//         }else{
//             for(let i=0; i<str.length; i++){
//                 num += Math.pow(2, top) * str[i]
//                 top--
//             }
//             return num
//         }
//     }
    
//     function binary(num){
//         let answer = [];
        
//         if(num === 0) {
//             return 0;
//         }else{
//             for(let i=num; i>0; i = Math.floor(i/2)){
//                 answer.unshift(i % 2);
//             }
//             return answer.join('');
//         }
//     }
    
//     return binary(decimal(bin1) + decimal(bin2));
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}