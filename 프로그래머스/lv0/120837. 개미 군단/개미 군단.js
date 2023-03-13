function solution(hp) {
    var answer = 0;
    let general = Math.floor(hp / 5);
    let solider = Math.floor((hp % 5) / 3);
    let work = (hp % 5) % 3;
    
    
    return general + solider + work;
}