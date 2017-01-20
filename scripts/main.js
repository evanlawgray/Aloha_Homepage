$(function(){

	var emailSubmitButton = $('#email-submit-button');

	function validateEmail(email){
			var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (filter.test(email)) {
            	alert("Thanks for signing up!");
            } else {
            	alert("You didn't enter a valid e-mail. Please try again");
            }
		};

	/*$('email-input').on('focus', function hideText() {
		$('email-input').text("");
	});*/

	emailSubmitButton.on('click', function(event){
		event.preventDefault();
		var emailSubmitted = $('.email-input').val();
		console.log(emailSubmitted);
		validateEmail(emailSubmitted);
	});

});