let passcode = Math.floor( Math.random()*1000);
let tries = 10;
let guess = new Guess();

function guessNumber(guess){
	tries--;
	if( guess == passcode ){
		printGameOver('WIN');
	}
	else if(tries <= 0){
		printGameOver('lose');
	}
	else{
		printAttemptsRemaining(tries);
		giveClue(guess);
	}
}

function giveClue(guess){
	if(guess > passcode){
		printClue('HI', guess);
	}
	else{
		printClue('LO', guess);
	}
}