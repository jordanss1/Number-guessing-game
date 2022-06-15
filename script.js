//Build a number-guessing game. A user has three tries to guess the number, between 1-100, that the computer picked.
//Whenever they guess, let them know if their guess is too high, or too low.
//After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.

/*
1. Defined empty array to "numberArr" to be used to hold the three values entered into the input element and will be used in a condition
to start the game over after three guesses. Also initialise "randomNumber" globally to be used across the different scopes

2. Added event listener to the submit button to stop the "onclick" event from submitting the form and refreshing the page. Because calling the value querys a string, I used parseInt to change the string to an integer to be used in the functions.

3. Within the event listener onclick, the value from the input is pushed to the empty array and within the called function "numberGuessingGame" whenever the array's length is equal to 3 the .splice method is used to empty the array (which is inside of the reset function) and a new random number is generated so the user can play again.

4. The "numberGuessingGame" has three parameters one for the values entered by the user and the random number to be compared in the conditions and one for the array. The splice method is used multiple times by calling the reset function to empty the array and start the game over. randomNumber is also assigned a new number in two of the conditions with the reset function. 

5. The reset function takes two parameters one for the array and another for the alert
*/

let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

const guessedNumbers = [];

const sub1 = document.getElementById("sub1");

const numberGuessingGame = (guessedNumber, randomNumber, arrOfGuessedNumbers) => {
	if (guessedNumber === randomNumber) {
		reset(arrOfGuessedNumbers,`Congratulations ${guessedNumber} is correct!`);
	} else if (arrOfGuessedNumbers.length === 3) {
		reset(arrOfGuessedNumbers, "You've guessed three times, start over");
	} else if (guessedNumber !== randomNumber) {
		alert("Try again"); 
	};
};

sub1.addEventListener("click", e => {
	e.preventDefault();
	const guessedNumber = parseInt(document.getElementById("number").value);
	guessedNumbers.push(guessedNumber);
	numberGuessingGame(guessedNumber, randomNumber, guessedNumbers);
	form1.reset();
});

const reset = (arrOfGuessedNumbers, alertString) => {
	alert(alertString);
	arrOfGuessedNumbers.splice(0, 3);
	console.log(randomNumber = Math.floor(Math.random() * 100));
}