document.addEventListener("DOMContentLoaded", function () {
	pushInStart();
	new WOW().init();
});
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 2000) {
			$("#back-to-top").css("display", "block");
			$('.navbar').css('backdrop-filter', 'blur(16px)');
		} else {
			$("#back-to-top").css("display", "none");
			$('.navbar').css('backdrop-filter', 'blur(0px)');

		}

	});

	$("#back-to-top").click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			400
		);
		return false;
	});
	$(document).scrollTop("30");
});
