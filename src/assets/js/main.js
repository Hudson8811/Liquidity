$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10)
                $('.header').addClass('header--slicky');
            else
                $('.header').removeClass('header--slicky');
        });
    });
    $('.show_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').removeClass('hide');
        $('.hide_much').removeClass('hide');
    })
    $('.hide_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').toggleClass('hide');
        $('.show_much').removeClass('hide');
    })

    $('.grafic_slider--slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        prevArrow: $('.slick--prev'),
        nextArrow: $('.slick--next'),
    });
    $('.mac_slider--slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        prevArrow: $('.mac_slick--prev'),
        nextArrow: $('.mac_slick--next'),
    });
    $('.business--slick_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        adaptiveHeight: true,
        prevArrow: $('.business_slick--prev'),
        nextArrow: $('.business_slick--next'),
    });
    $('.video_block--preview').click(function() {
        $(this).toggleClass('video_block--preview--hidden');
        var src = $(this).siblings('iframe').attr('src');
        $(this).siblings('iframe').attr('src', src + '&autoplay=1');
    });
    $('.advanced_slider--slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.advanced_slick--prev'),
        nextArrow: $('.advanced_slick--next'),
    });
});