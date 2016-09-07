// Check viewport of container, rahter its tablet or phone
function checkSize() {
	if ($(".responsive-tablet").css("float") == "none") {
		// you're on media query tablet resized viewport

		$(".header_navigation-links").removeClass("is_active");

	}

	if ($(".responsive-phone").css("float") == "none") {
		// you're on media query phone resized viewport

	}
};



$(document).ready(function() {
	checkSize();


	// jQuery datepicker
	$('.date-picker').datepicker({
		orientation: "left",
		autoclose: true
	});


	// Select 2 functionality
	$('.orders-f-name-service').select2();



	// Slick carousel used for partners section
	$('.partners-carousel').slick({
		slidesToShow: 6,
		infinite: false,
		variableWidth: false,
		appendArrows: '.partners-carousel-controls',
		nextArrow: '<i class="fa fa-angle-right"></i>',
		prevArrow: '<i class="fa fa-angle-left"></i>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false,
				slidesToShow: 6,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				dots: true,
				arrows: false,
				slidesToScroll: 3,
				slidesToShow: 3
			}
		}]
	});


	// Hiding the navigation menu if click event is out of menu
	$(document).on("click", function(e) {
		var navigation_menu = $(".header_navigation-links, .header_navigation-links-toggle")

		if (!$(e.target).closest(navigation_menu).length) {
			$(navigation_menu).removeClass("is_active");
		}
	});



	$(window).resize(function(event) {
		checkSize();
	});
	// End of window.resize

});
// End of document.ready