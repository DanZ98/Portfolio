// scrollup smooth css 

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 4000);
        return false;
      }
    }
  });
});

// scrolldown logo appear

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 000) {
                $('.header-logo').fadeIn(500);
            } else {
                $('.header-logo').fadeOut(500);
            }
        });
    });
})(jQuery);

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 000) {
                $('#nav-2').fadeIn(500);
            } else {
                $('#nav-2').fadeOut(500);
            }
        });
    });
})(jQuery);