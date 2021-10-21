var guessNumber = prompt("Guess how many attempts you will find");
var randomNumber = Math.round((Math.random() * 9) + 1);
var guess = prompt("Guess (1-10)");
var contur = 0;
while (guessNumber > 0) {
    guessNumber--;
    contur++;
    console.log(randomNumber);

    if (guessNumber == randomNumber) {
        confirm(`Successfull , You found number.This number is ${guessNumber}.point ${100-(10*contur)} `);
        break;
    } else if (guessNumber > randomNumber) {
        confirm(`Over number , Guess is over number. Remaining right ${guessNumber}.`);
        var guess = prompt("Guess (1-10)");

    } else if (guessNumber < randomNumber) {
        confirm(`Under number , Guess is under number. Remaining right ${guessNumber}.`);
        var guess = prompt("Guess (1-10)");

    } else {
        confirm(`Game Over , This number is ${guessNumber}.  `);



    }

}