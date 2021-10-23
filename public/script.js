$(document).ready(function () {
	$(".page_link").click(function () {
		var anchor = $(this).attr("dest");
		$("nav span").removeClass("active");
		$("nav")
			.find('[dest="' + anchor + '"]')
			.addClass("active");
		$("html, body").animate(
			{ scrollTop: $("#" + anchor).offset().top },
			400
		);
	});
	$(window).on("scroll", function () {
        function highlightLink(anchor) {
            $("nav .active").removeClass("active");
            $("nav")
                .find('[dest="' + anchor + '"]')
                .addClass("active");
        }
		var pos = $(window).scrollTop();
		if (pos + 50 > $("#home").offset().top) {
			highlightLink("home");
		}
		if (pos + 50 > $("#about").offset().top) {
			highlightLink("about");
		}
		if (pos + 50 > $("#projects").offset().top) {
			highlightLink("projects");
		}
		if (pos + 50 > $("#contact").offset().top) {
			highlightLink("contact");
		}
	});
});
