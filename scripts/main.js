$(function(){

	var emailSubmitButton = $('#email-submit-button');
	var $pageRoot = $(document.body);
	var $emailInput = $('.email-input');

	function validateEmail(email){
			var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (filter.test(email)) {
            	alert("Thanks for signing up!");
            } else {
            	alert("You didn't enter a valid e-mail. Please try again");
            }
		};

	$('nav a').on('click', function(event){
		event.preventDefault();

		var target = $(this.hash);
		var $headerHeight = $('header').innerHeight();

		$pageRoot.animate({
        scrollTop: target.offset().top -$headerHeight}, 700, 'swing');
    	return false;
	});

	$('.product-list').flickity({
		accessibility: true,
		resize: false,
		setGallerySize: false,
		initialIndex: 0,
		cellSelector: '.product-list-item',
		cellAlign: 'left',
		groupCells: '100%',
		percentPosition: false,
		autoPlay: 3000,
		pauseAutoPlayOnHover: true,
		contain: true
	});

	$emailInput.on('focus', function hideText() {
		$('.email-input').attr('value', ' ');
	});

	emailSubmitButton.on('click', function(event){
		event.preventDefault();
		var emailSubmitted = $('.email-input').val();
		validateEmail(emailSubmitted);
	});

});