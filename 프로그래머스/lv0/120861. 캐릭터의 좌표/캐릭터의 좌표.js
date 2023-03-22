function solution(keyinput, board) {
    var answer = [];
    let x = 0;
    let y = 0;
    
    
    //1. 이동한 좌표값 구하기
    for(let i=0; i<keyinput.length; i++){
        let xMax = Math.abs(Math.floor(board[0] / 2));
        let xMin = -Math.abs(Math.floor(board[0] / 2));
        let yMax = Math.abs(Math.floor(board[1] / 2));
        let yMin = -Math.abs(Math.floor(board[1] / 2));
        
        if(keyinput[i] === "left"){
            if(x <= xMin){
                x = xMin;
            }else{
                x--;
            }
        }else if(keyinput[i] === "right"){
            if(x >= xMax){
                x = xMax;
            }else{
                x++;
            }
        }else if(keyinput[i] === "up"){
            if(y >= yMax){
                y = yMax;
            }else{
                y++;
            }
        }else{
            if(y <= yMin){
                y = yMin;
            }else{
                y--;
            }
            
        }
    }
    
    let spot = [x, y];
    
    //2. 보드판의 최대, 최소좌표 구하기
    
//     function map(spot, size){
//         let max = Math.abs(Math.floor(size / 2));
//         let min = -Math.abs(Math.floor(size / 2));
        
//         if(spot >= max){
//             return spot = max;
//         }else if(spot <= min){
//             return spot = min;
//         }else{
//             return spot;
//         }
//     }
    
    // return [map(x, board[0]), map(y, board[1])];
    
    return spot;

}