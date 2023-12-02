const fs = require("fs");


const input = fs.readFileSync("input.txt", "utf-8");
const array = input.split("\n");

console.log(array);



let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let calibrations = [];

for (let i = 0; i < array.length; i++) {

    // replace "one" with "o1e", "two" with "t2o", etc.
    for (let j = 0; j < array[i].length; j++) {
        array[i] = array[i].replace("one", "o1e");
        array[i] = array[i].replace("two", "t2o");
        array[i] = array[i].replace("three", "th3ee");
        array[i] = array[i].replace("four", "f4ur");
        array[i] = array[i].replace("five", "f5ve");
        array[i] = array[i].replace("six", "s6x");
        array[i] = array[i].replace("seven", "se7en");
        array[i] = array[i].replace("eight", "ei8ht");
        array[i] = array[i].replace("nine", "n9ne");
    }

    console.log(array[i]);

	let line = array[i].split("");
	
	if (array[i] === "") continue;

	console.log(i + ". " + array[i]  + ": " + line);
	

	let firstNum;
	let secondNum;

	for (let j = 0; j < line.length; j++) {
		let char = line[j];
		if (numbers.includes(char)) {
			firstNum = char;
			break;
		}
	}

	for (let j = line.length; j >= 0; j--) {
		let char = line[j];
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
	console.log(calibrations[i] + ": " + parsedInt);
} 

console.log(sum);
