function solution(letter) {
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    
    var answer = '';
    let arr = letter.split(' ');
    //morse의 키값을 돌다가 arr[i]번째와 같은게 있다면 해당 value값 추출
    
    for(let i=0; i<arr.length; i++){
        answer += morse[String(arr[i])];
    }
    
    
    return answer;
}