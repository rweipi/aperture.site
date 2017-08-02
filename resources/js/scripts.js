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

});
