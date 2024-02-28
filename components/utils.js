IMAGE_CHANGE_TIME_IN_SEC = 7;

$(document).ready(function() {
	var currentIndex = 0;
	var images = [
		'components/media/bg_1.jpeg',
		'components/media/bg_2.png',
		'components/media/bg_3.jpg',
		'components/media/bg_4.avif'
	];
	var totalImages = images.length;

	function slideBackground() {
		$('body').css('background-image', 'url("' + images[currentIndex] + '")');
	}

	function nextBackground() {
		currentIndex = (currentIndex + 1) % totalImages;
		slideBackground();
	}

	setInterval(nextBackground, IMAGE_CHANGE_TIME_IN_SEC * 1000);

	mybutton = document.getElementById("scrollToTop");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
});


function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
