const fs = require("fs");


const input = fs.readFileSync("input.txt", "utf-8");
const array = input.split("\n");

console.log(array);

let sum = 0;

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace("\r", "");

    let split = array[i].split(":");

    let game = split[0];
    let data = split[1];

    let rounds = data.split(";")

    let roundsData = []

    for (let j = 0; j < rounds.length; j++) {
        let roundCubes = rounds[j].split(",");
        let Cubes = [];
        roundCubes.forEach(cube => {
            let data = cube.split(" ");
            let color = data[2];
            let amount = parseInt(data[1]);

            let json = {
                color,
                amount
            }

            Cubes.push(json)
        });

        roundsData.push(Cubes);
    }

    console.log(roundsData)

    let leastCubes = {
        "red": 0,
        "green": 0,
        "blue": 0
    }

    roundsData.forEach(rounds => {
        rounds.forEach(round => {
            if(round.amount > leastCubes[round.color]) leastCubes[round.color] = round.amount
        })
    });
    console.log(leastCubes)
    let power = leastCubes.red * leastCubes.green * leastCubes.blue;
    console.log(power)
    sum += power
}

console.log(sum)