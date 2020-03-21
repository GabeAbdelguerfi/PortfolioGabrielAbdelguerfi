const initControllers = function(){
	const submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
	const formData = new Object();
	formData[name] = document.getElementById('name').value;
	formData[message] = document.getElementById('message').value;
	
		postToGoogleDB(formData);
}

initControllers();