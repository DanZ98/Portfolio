
// Video Modal
$(function() {
    $(".video").click(function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
});

// Smooth Anchor Scrolling
$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});





 




