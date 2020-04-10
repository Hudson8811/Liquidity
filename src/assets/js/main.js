$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10)
                $('.header').addClass('header--slicky');
            else
                $('.header').removeClass('header--slicky');
        });
    });
    $('.js-show_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').removeClass('hide');
        $('.js-hide_much').removeClass('hide');
    })
    $('.js-hide_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').toggleClass('hide');
        $('.js-show_much').removeClass('hide');
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
    $('.js-burger').click(function() {
        $(this).toggleClass('burger--active');
        $('.header__top-row').toggleClass('menu--active');
        $('.header__bottom-row').toggleClass('menu--active');
    })
    $(window).on("scroll", function() {
        goanim();
    });
    // goanim
    setTimeout(function() {
        goanim();
    }, 3000);

    function goanim() {
        if ($(".goanim").length > 0) {
            $(".goanim").each(function() {
                if (
                    $(window).scrollTop() + (window.innerHeight / 1.5) > $(this).offset().top &&
                    $(window).scrollTop() - (window.innerHeight / 3) < $(this).offset().top
                ) {
                    $(this).removeClass("goanim");
                } else if (
                    $(this).hasClass("footan") &&
                    $(window).scrollTop() + window.innerHeight > $("body").height() - 100
                ) {
                    $(this).removeClass("goanim")
                }
            });
        }
    };
});