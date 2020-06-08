'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

 function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    var r = parseInt(readLine());
    // Print the area of the circle:
    var area = PI * r * r;
    console.log(area);

    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
    try {    
