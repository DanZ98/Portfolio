//dropdown info

$(document).ready(function(){
  $(".fa-chevron-circle-down").click(function(){

    var target = $(this).parent().children(".info-text");
    $(target).slideToggle();
  });
});

// email dropdown info

$(document).ready(function(){
    $(".dzign-header").click(function(){
    $(".dzign_info").slideToggle("fast");
});
});

$(document).ready(function(){
    $(".flyair-header").click(function(){
    $(".dzign_info").slideToggle("fast");
})
});


$(document).ready(function(){
    $(".exercise-header").click(function(){
    $(".exercise_info").slideToggle("fast");
})
});

$(document).ready(function(){
    $(".ineffables-header").click(function(){
    $(".ineffables_info").slideToggle("fast");
})
});

// scrollup smooth css

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// scrolldown logo appear

(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('.header-logo').fadeIn(500);
            } else {
                $('.header-logo').fadeOut(500);
            }
        });
    });
})(jQuery);


$(document).ready(function () {


//TIMER

window.onload = function(){date(), time()}, setInterval(function(){time();}, 1000);

//SET DATE

   function date() {

     var months = new Array(12);

     months[0] = "January";

     months[1] = "February";

     months[2] = "March";

     months[3] = "April";

     months[4] = "May";

     months[5] = "June";

     months[6] = "July";

     months[7] = "August";

     months[8] = "September";

     months[9] = "October";

     months[10] = "November";

     months[11] = "December";



     var day = new Array(7);

     day[0] = "Sunday";

     day[1] = "Monday";

     day[2] = "Tuesday";

     day[3] = "Wednesday";

     day[4] = "Thursday";

     day[5] = "Friday";

     day[6] = "Saturday";


     var date = new Date();

     var month_value = date.getMonth();

     var day_value = date.getDay();

     var daydate = date.getDate();


    if (daydate < 10)  daydate = "0" + daydate;

     date = day[day_value] + " " + daydate + " " + months[month_value];

     $('#date').html(date);

}



//SET TIME

   function time() {

     var time = new Date();

     var hours = time.getHours();

     var minutes = time.getMinutes();

     var seconds = time.getSeconds();



     if (hours < 10)  hours = "0" + hours;

     if (minutes < 10)  minutes = "0" + minutes;

     if (seconds < 10)  seconds = "0" + seconds;

     time = hours + ':' + minutes + ':' + seconds;


     $('#time').html(time);


   }


});

//contact

$('#phone').click(function(){
		var $this = $(this);
	    if($this.hasClass('#phone')){
            } else {
			$this.text('612.718.8648');
     }

    $( '#phone' ).css( 'fontSize', '15px' );
});

$('#email').click(function(){
		var $this = $(this);
	   if($this.hasClass('#email')){
            } else {
			$this.text('danzins15@gmail.com');
    }

    $( '#email' ).css( 'fontSize', '15px' );
});

//enable safari Iphone touch

$(function () {
    $('.iphone-touch').on('click touchend', function() {
        var link = $(this).attr('href');
        window.open(link,'_blank'); // opens in new window as requested

        return false; // prevent anchor click
    });
});
