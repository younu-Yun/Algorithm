const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let star = '*';

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    for(let i=1; i<=input; i++){
        console.log(star.repeat(i))
    }
    
    // console.log(Number(input[0]));
});