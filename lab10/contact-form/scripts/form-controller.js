const initControllers = function(){
	console.log("initializing controllers");
	const submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
	console.log("buttonclicked");
	const formData = new Object();
	formData[entry1] = document.getElementById('name').value;
	formData[entry2] = document.getElementById('email').value;
	formData[entry3] = document.getElementById('message').value;

	postToGoogleDB(formData);
// 	const contactForm = document.getElementById('contact-form');
// 	contactForm.action = getPath(formId);
// 	contactForm.method = "POST";
	}

initControllers();