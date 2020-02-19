// let passcode = Math.floor(Math.random()*1000);
// let guess = prompt("Guess a number from 1-1000:");
// if ( guess = passcode){
// 	console.log("You win!");
// }
// else{
// 	console.log("You lost");
// }

// // let passcode = Math.floor(Math.random()*1000);
// // let guess = prompt("Guess a number from 1-1000:");


let passcode = Math.floor( Math.random()*1000);
let tries = 10;
let guess;


while(tries > 0 && guess != passcode){
	console.log("You have " + tries + " guesses left.");
	guess = prompt("Enter a number")
	tries--;

	if( guess == passcode ){
		console.log("You win! Got it in " + (10-tries) + " guesses");
	}
	else if( tries == 0){
		console.log("You lose! The number was " + passcode);
	}
	else{
		giveClue(guess);
	}
}

function giveClue(guess){
	if(guess > passcode){
		console.log(guess + " is too High!");
	}
	else{
		console.log(guess + " is too Low!");
	}
}