function solution(lines) {
    var answer = 0;
    let allSpot = [];
    for(let i=0; i<lines.length; i++){
        
        for(let j=lines[i][0]; j<lines[i][1]; j++){
            allSpot.push(String([j, j+1]))
        }
    }
    
    let arr = allSpot.filter((item, index) => allSpot.indexOf(item) === index)
    let result = []
    for(let i=0; i<arr.length; i++){
        let cnt = 0;
        for(let j=0; j<allSpot.length; j++){
            if(arr[i] === allSpot[j]){
                cnt++
            }
        }
        result.push([arr[i], cnt])
    }
    
    result = result.filter(item => item[1] >= 2)
    
    return result.length;
}