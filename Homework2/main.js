$(document).ready(function(){
	$('.submit').click(function(event){

		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElement = $('.status')
		statusElement.empty()

		if(email.length > 4 && email.includes('@') && email.includes('.')){
			statusElement.append('<div>This email is valid.</div>');
		}else{
			event.preventDefault() //don't trigger submit right away
			statusElement.append('<div>This email is not valid. Please enter atleast 5 characters an @ sign and a .</div>');
		}
			
		if(subject.length > 2){
			statusElement.append('<div>This Subject is valid.</div>')
		}
		else{
			event.preventDefault() //don't trigger submit right away
			statusElement.append('<div>This Subject is not valid.  Please enter atleast 3 characters</div>')
		}

		if(message.length > 9){
			statusElement.append('<div>This Message is valid.</div>');
		}else{
			event.preventDefault() //don't trigger submit right away
			statusElement.append('<div>This Message is not valid.  Please enter atleast 10 characters</div>');
		}
	})
})
