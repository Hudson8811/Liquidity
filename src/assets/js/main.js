$(document).ready(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10)
                $('.header').addClass('header--slicky');
            else
                $('.header').removeClass('header--slicky');
        });
    });
    $('.js-show_much').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').removeClass('hide');
        $('.js-hide_much').removeClass('hide');
    })
    $('.js-hide_much').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').toggleClass('hide');
        $('.js-show_much').removeClass('hide');
    })
    // $('.grafic_slider--slick').slick({
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     sliderToScroll: 1,
    //     variableWidth: true,
    //     centerMode: true,
    //     prevArrow: $('.slick--prev'),
    //     nextArrow: $('.slick--next'),
    // });
    // $('.mac_slider--slick').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     variableWidth: true,
    //     centerMode: true,
    //     prevArrow: $('.mac_slick--prev'),
    //     nextArrow: $('.mac_slick--next'),
    // });

    $('.grafic_slider--slick').flickity({
        wrapAround: true,
        adaptiveHeight: true,
        pageDots: false,
        selectedAttraction: 0.1,
        friction: .8
    });

    $('.grafic_slider--slick_item').on('click', function () {
        let index = $(this).index();
        $(".grafic_slider--slick").flickity('select', index);
    });

    $('.mac_slider--slick').flickity({
        wrapAround: true,
        adaptiveHeight: false,
        pageDots: false,
        percentPosition: false,
        selectedAttraction: 0.1,
        friction: .8
    });

    $('.mac_slider--slick-item').on('click', function () {
        let index = $(this).index();
        $(".mac_slider--slick").flickity('select', index);
    });

    // $('.business--slick_slider').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     centerMode: true,
    //     adaptiveHeight: true,
    //     prevArrow: $('.business_slick--prev'),
    //     nextArrow: $('.business_slick--next'),
    // });

    // $('.slick-slide').on('click', function() {
    //     let index = $(this).index();
    //     console.log(index)
    //     $(".business--slick_slider").slick('slickGoTo', (index));

    // });

    $('.business--slick_slider').flickity({
        wrapAround: true,
        adaptiveHeight: true,
        pageDots: false,
        percentPosition: false
    });

    $('.business--slick_slider .item').on('click', function () {
        let index = $(this).index();
        $(".business--slick_slider").flickity('select', index);
    });

    $('.video_block--preview').click(function () {
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
    $('.js-burger').click(function () {
        $(this).toggleClass('burger--active');
        $('.header__top-row').toggleClass('menu--active');
        $('.header__bottom-row').toggleClass('menu--active');
    });
    // anchor
    $(document).on("click", ".js-anchor > a, a.js-anchor", function (e) {
        e.preventDefault();
        var hrf = $(this).attr("href");
        var top = $(hrf).offset().top;
        if (window.innerWidth > 768) {
            top -= 77;
        }
        $("html,body").animate({ scrollTop: top }, 300);
    });
    $(window).on("scroll", function () {
        goanim();
    });
    // goanim
    setTimeout(function () {
        goanim();
    }, 3000);

    function goanim() {
        if ($(".goanim").length > 0) {
            $(".goanim").each(function () {
                if (
                    $(window).scrollTop() + (window.innerHeight / 1.2) > $(this).offset().top &&
                    $(window).scrollTop() - (window.innerHeight) < $(this).offset().top
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

    $(document).on("focus", ".form_label input", function () {
        $(this).parent().addClass('active');
        $(this).parent().removeClass('error');
    });
    $(document).on("blur", ".form_label input", function () {
        if ($(this).val() == "") {
            $(this).parent().removeClass('active');
            $(this).parent().addClass('error');
        } else {
            $(this).parent().removeClass("error");
            if (
                $(this).attr("type") == "email" &&
                !isValidEmailAddress($(this).val())
            ) {
                $(this).parent().addClass("error");
            }
        }
    });

    function modal() {
        event.preventDefault();
        $.fancybox.open({
            src: '#modal',
            type: 'inline'
        });
    }
    $('.js-action-btn').click(function () {
        modal();
    })

    $('.question-item-js').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.question-item-js').removeClass('active');
            $(this).addClass('active');
        }
    })

    $('.head__item--show-btn--js').click(function (e) {
        e.preventDefault();
        $(this).addClass('hide');
        $(this).next().removeClass('hide');
        $(this).parent().next('.head__item--content').removeClass('hide');
    })

    $('.head__item--hide-btn--js').click(function (e) {
        e.preventDefault();
        $(this).addClass('hide');
        $(this).prev().removeClass('hide');
        $(this).parent().next('.head__item--content').addClass('hide');
    })
    ////////////////////////////////
    // $('.text_flicky--js').flickity({
    //     autoPlay: 7000,
    //     wrapAround: true,
    //     pageDots: false,
    //     prevNextButtons: false,
    // });

    $('.text_flicky--js').slick({
        infinite: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
    });


    // $('.big_header').mouseleave(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_content--js').removeClass('active');
    //     $('.big_menu_btn--js').removeClass('active');
    // })
    // $('#Crypto_Processing--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Crypto_Processing__content--js').addClass('active');
    // })

    // $('#Core_Products--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Core_Products__content--js').addClass('active');
    // })

    // $('#Liquidity--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Liquidity__content--js').addClass('active');
    // })

    // $('#Turnkey_Solutions--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Turnkey_Solutions__content--js').addClass('active');
    // })

    // $('#Money_Management--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Money_Management__content--js').addClass('active');
    // })

    // $('#About--js').click(function (e) {
    //     e.preventDefault();
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#About__content--js').addClass('active');
    // })

    // HOVER/////////////////////////////////////////////////////

    // $('#Crypto_Processing--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Crypto_Processing__content--js').addClass('active');
    // })

    // $('#Core_Products--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Core_Products__content--js').addClass('active');
    // })

    // $('#Liquidity--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Liquidity__content--js').addClass('active');
    // })

    // $('#Turnkey_Solutions--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Turnkey_Solutions__content--js').addClass('active');
    // })

    // $('#Money_Management--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#Money_Management__content--js').addClass('active');
    // })

    // $('#About--js').hover(function () {
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').removeClass('active');
    //     $(this).addClass('active');
    //     $('#About__content--js').addClass('active');
    // })

    var scrollPos = 0;
    $(window).scroll(function () {
        var newScrollPos = $(this).scrollTop();
        if ($(this).scrollTop() > 67) {
            if ($('.big_menu_content--js').hasClass('active')) {
                return
            }
            else if (newScrollPos > scrollPos) {
                $('.big_header__bg--2').addClass('scroll');
            }
            else {
                $('.big_header__bg--2').removeClass('scroll');
            }
            scrollPos = newScrollPos;
        }
        else {
            $('.big_header__bg--2').removeClass('scroll');
        }

    });

    $('.big_header__bg').hover(function () {
        $('.big_header__bg--2').removeClass('scroll');
    });

    $('.mam_tabs-btn-1').click(function () {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var id = $(this).data('id');
            $('.mam_tabs-btn-1').removeClass('active');
            $(this).addClass('active');
            $('.mam_tabs-content-1').fadeOut(300).promise().done(function () {
                $('.mam_tabs-content-1[data-id="' + id + '"]').fadeIn(300);
            });
        }
    });
    $('.mam_tabs-btn-2').click(function () {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var id = $(this).data('id');
            $('.mam_tabs-btn-2').removeClass('active');
            $(this).addClass('active');
            $('.mam_tabs-content-2').fadeOut(300).promise().done(function () {
                $('.mam_tabs-content-2[data-id="' + id + '"]').fadeIn(300);
            });
        }
    });
    $('.mam_tabs-btn-3').click(function () {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var id = $(this).data('id');
            $('.mam_tabs-btn-3').removeClass('active');
            $(this).addClass('active');
            $('.mam_tabs-content-3').fadeOut(300).promise().done(function () {
                $('.mam_tabs-content-3[data-id="' + id + '"]').fadeIn(300);
            });
        }
    });
    $('.mam_tabs-btn-4').click(function () {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var id = $(this).data('id');
            $('.mam_tabs-btn-4').removeClass('active');
            $(this).addClass('active');
            $('.mam_tabs-content-4').fadeOut(300).promise().done(function () {
                $('.mam_tabs-content-4[data-id="' + id + '"]').fadeIn(300);
            });
        }
    });

    $('.big_menu_btn--js').hover(function () {
        if ($(window).width() > 900) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                var id = $(this).data('id');
                $('.big_menu_btn--js').removeClass('active');
                $(this).addClass('active');
                $('.big_menu_content--js[data-id="' + id + '"]')
                $('.big_menu_content--js').fadeOut(300).promise().done(function () {
                    $('.big_menu_content--js[data-id="' + id + '"]').addClass('active').promise().done(function () {
                        $(this).fadeIn(300);
                    })
                });
            }
        }
        else {
            $('.big_menu_btn--js').click(function () {
                event.preventDefault();
                if (!$(this).hasClass('active')) {
                    $('body').addClass('hidden');
                    $('.big_header').addClass('active');
                    var id = $(this).data('id');
                    $('.big_menu_btn--js').removeClass('active');
                    $(this).addClass('active');
                    $('.burger--js').addClass('active');
                    $('.big_menu_content--js').fadeOut(300).promise().done(function () {
                        $('.big_menu_content--js[data-id="' + id + '"]').addClass('active').promise().done(function () {
                            $(this).fadeIn(300);
                        });
                    });
                }
            });
        }
    });

    // $('.burger--js').click(function () {
    //     $(this).removeClass('active');
    //     $('body').removeClass('hidden');
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.big_menu_content--js').fadeOut(300).promise().done(function () {
    //         $(this).removeClass('active');
    //     });
    // });

    // $('.big_header').mouseleave(function () {
    //     event.preventDefault();
    //     $('.big_menu_content--js').fadeOut(300).promise().done(function () {
    //         $(this).removeClass('active');
    //     });
    //     $('.big_menu_btn--js').removeClass('active');
    //     $('.burger--js').removeClass('active');
    // });
});

// $(document).on('click', '.head__item--show-btn--js', function (e) {

// });

$(document).on('click', '.burger--js', function () {
    $(this).removeClass('active');
    $('body').removeClass('hidden');
    $('.big_menu_btn--js').removeClass('active');
    $('.big_menu_content--js').fadeOut(300).promise().done(function () {
        $(this).removeClass('active');
    });
});

$(document).on('mouseleave', '.big_header', function (event) {
    event.preventDefault();
    $('.big_menu_content--js').fadeOut(300).promise().done(function () {
        $(this).removeClass('active');
    });
    $('.big_menu_btn--js').removeClass('active');
    $('.burger--js').removeClass('active');
});

$(document).on('hover', '.big_menu_btn--js', function (event) {
    if ($(window).width() > 900) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var id = $(this).data('id');
            $('.big_menu_btn--js').removeClass('active');
            $(this).addClass('active');
            $('.big_menu_content--js[data-id="' + id + '"]')
            $('.big_menu_content--js').fadeOut(300).promise().done(function () {
                $('.big_menu_content--js[data-id="' + id + '"]').addClass('active').promise().done(function () {
                    $(this).fadeIn(300);
                })
            });
        }
    }
    else return
});

$(document).on('click', 'big_menu_btn--js', function (event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
        $('body').addClass('hidden');
        $('.big_header').addClass('active');
        var id = $(this).data('id');
        $('.big_menu_btn--js').removeClass('active');
        $(this).addClass('active');
        $('.burger--js').addClass('active');
        $('.big_menu_content--js').fadeOut(300).promise().done(function () {
            $('.big_menu_content--js[data-id="' + id + '"]').addClass('active').promise().done(function () {
                $(this).fadeIn(300);
            });
        });
    }
});