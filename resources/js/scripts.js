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

    /* SCROLL BUTTONS */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    $('.js--scroll-to-operations').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-operations').offset().top
        }, 1000);
    });

    /* SCROLL NAV */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* SCROLL ANIMATIONS */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated jello');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

});
