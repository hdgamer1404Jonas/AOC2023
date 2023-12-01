const fs = require("fs");


const input = fs.readFileSync("test.txt", "utf-8");
const array = input.split("\n");

console.log(array);



let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let numChars = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}

let calibrations = [];

for (let i = 0; i < array.length; i++) {
    let line = array[i];
	let lineArr = array[i].split("");
	
	if (array[i] === "") continue;
	

	let firstNum;
	let secondNum;

	for (let j = 0; j < lineArr.length; j++) {
		let char = lineArr[j];

        for (let key in numChars) {
            let keyLength = key.length;

            // get the amount of chars after the current char (including the current char)
            let charsAfter = line.slice(j, j + keyLength);
            console.log(charsAfter);
            // check if the chars include the key
            if (charsAfter.includes(key)) {
                firstNum = numChars[key];
                break;
            }
        }


		if (numbers.includes(char)) {
			firstNum = char;
			break;
		}
	}

	for (let j = lineArr.length; j >= 0; j--) {
		let char = lineArr[j];
        
        for (let key in numChars) {
            let keyLength = key.length;

            // get the amount of chars after the current char (including the current char)
            let charsAfter = line.slice(j, j + keyLength);
            console.log(charsAfter);
            // check if the chars include the key
            if (charsAfter.includes(key)) {
                secondNum = numChars[key];
                break;
            }
        }


		if (numbers.includes(char)) {
			secondNum = char;
			break;
		}
	}

	let cal = firstNum + "" + secondNum;

	calibrations.push(cal);
}



let sum = 0;

for (let i = 0; i < calibrations.length; i++) {
	let parsedInt = parseInt(calibrations[i]);
	sum += parsedInt;
} 

console.log(sum);
