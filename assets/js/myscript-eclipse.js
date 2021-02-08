// Retrieving hamgburger bars and adding click toggle
const hamMenuBars = document.querySelector('.mobile-bars');

hamMenuBars.addEventListener('click', function(){
    hamMenuBars.classList.toggle('toggle');
});

// Adding hamgburger menu items and overlay background
function hamMenuDisplay() {
    const hamMenuItems = document.querySelector('.mobile-nav');
    const overlayBg = document.querySelector('.overlay');

    if (hamMenuItems.style.display === 'block' && overlayBg.style.display === 'block') {
        hamMenuItems.style.display = 'none';
        overlayBg.style.display = 'none';
    } else {
        hamMenuItems.style.display = 'block';
        overlayBg.style.display = 'block';
    }
}

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

