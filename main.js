guessNumber = Number(prompt("Pick a number 1-10"));
ranNumber = Math.random(1, 10);
console.log(guessNumber)
while (guessNumber == ranNumber) {
    console.log("You got it!")
    break;}
    else {
        console.log(Nope, try again!)
        continue;
    }
