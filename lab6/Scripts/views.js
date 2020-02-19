function printAttemptsRemaining(tries){
	let attemptsText = document.getElementById("attempts");
	attemptsText.innerHTML = `Number of attempts left: ${tries}`;
}

function printClue(status, guess){
	let clueText = document.getElementById("clue");
	let clue = status=='HI' ? `<li>${guess} is too high</li>`:`<li>${guess} is too low</li>`
	clueText.innerHTML += clue;
}

function printGameOver(status){
	if(status == 'WIN'){
		var message = `<h1>You Win!</h1> <p>Got it in ${10-tries} tries.</p>`;
	}
	else{
		var message = `<h1>You lose!</h1> <p>The number was: ${passcode}</p>`;
	}
	document.body.innerHTML = message;
}

function printDigits(){
	document.getElementById("digit-100s").value = guess.hundreds;
	document.getElementById("digit-10s").value = guess.tens;
	document.getElementById("digit-1s").value = guess.ones;
}