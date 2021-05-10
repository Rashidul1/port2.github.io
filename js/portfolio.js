new WOW().init();
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});


$(window).on('scroll', function () {

    if ($(window).scrollTop()) {

        $('nav').addClass('after_scroll')

    } else {
        $('nav').removeClass('after_scroll')

    }


});