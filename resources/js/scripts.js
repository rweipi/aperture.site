$(document).ready(function () {

    /* HIDDEN VIDEO */
    $('a.autoplay').YouTubePopUp();
    $('a.autoplay-null').YouTubePopUp({
        autoplay: 0,
    });

    /* SLIDE SHOW */
    $('.bxslider').bxSlider({
        auto: false,
        autoControls: false,
        mode: 'horizontal',
        useCSS: false,
        infiniteLoop: true,
        hideControlOnEnd: false,
        easing: 'easeOutElastic',
        speed: 1000,
    });

    /* STICKY NAV */
    $('.js--section-operations').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px'
    });

    /* MOBILE NAV */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});
