const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
const array = input.split("\n");

const symbols = ['*', '/', '-', '$', '%', '@', '&', '=', '#', '+'];

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace('\r', "");
}

let sum = 0;

for (let i = 1; i < array.length - 1; i++) {
    let line = array[i].split("");
    console.log(line);
    for (let j = 1; j < line.length - 1; j++) {
        if (symbols.includes(line[j])) {
            // get a 9x3 matrix with the current symbol in the middle with the previous and next line
            let matrix = [];
            matrix.push(array[i - 1].slice(j - 4, j + 4));
            matrix.push(array[i].slice(j - 4, j + 4));
            matrix.push(array[i + 1].slice(j - 4, j + 4));

            console.log(matrix);
        }
    }
}

