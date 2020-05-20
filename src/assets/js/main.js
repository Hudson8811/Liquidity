$(document).ready(function () {
  $(document).on("click", ".genuine__row", function () {
    var row = $(this).data("row_number");
    $(this).toggleClass("active");
    $(this)
      .siblings('.genuine__row--slide[data-row_number="' + row + '"]')
      .slideToggle();
  });

  function outNum(num, elem) {
    const time = 2500; //ms
    const step = 1;
    let el = document.querySelector("#" + elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(function () {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      el.innerHTML = n;
    }, t);
  }

  function checkPosition() {
    // координаты дива
    var div_position = $(
      ".who_uses_section .container .who_uses_block__item"
    ).offset();
    // отступ сверху
    var div_top = div_position.top;
    // отступ слева
    var div_left = div_position.left;
    // ширина
    var div_width = $(
      ".who_uses_section .container .who_uses_block__item"
    ).width();
    // высота
    var div_height = $(
      ".who_uses_section .container .who_uses_block__item"
    ).height();

    // проскроллено сверху
    var top_scroll = $(document).scrollTop();
    // проскроллено слева
    var left_scroll = $(document).scrollLeft();
    // ширина видимой страницы
    var screen_width = $(window).width();
    // высота видимой страницы
    var screen_height = $(window).height();

    // координаты углов видимой области
    var see_x1 = left_scroll;
    var see_x2 = screen_width + left_scroll;
    var see_y1 = top_scroll;
    var see_y2 = screen_height + top_scroll;

    // координаты углов искомого элемента
    var div_x1 = div_left;
    var div_x2 = div_left + div_height;
    var div_y1 = div_top;
    var div_y2 = div_top + div_width;

    // проверка - виден див полностью или нет
    if (
      div_x1 >= see_x1 &&
      div_x2 <= see_x2 &&
      div_y1 >= see_y1 &&
      div_y2 <= see_y2
    ) {
      // если виден
      outNum(51, "wub1--js");
      outNum(27, "wub2--js");
      outNum(15, "wub3--js");
      outNum(5, "wub4--js");
      outNum(18, "wub5--js");
      outNum(5, "wub6--js");
      outNum(1, "wub7--js");
      $(document).off("scroll");
    } else {
    }
  }

  $(document).ready(function () {
    $(document).scroll(function () {
      // при скролле страницы делаем проверку
      checkPosition();
    });

    // после загрузки страницы сразу проверяем
    checkPosition();

    // проверка при масштабировании и изменении размера страницы
    $(window).resize(function () {
      checkPosition();
    });
  });

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) $(".header").addClass("header--slicky");
      else $(".header").removeClass("header--slicky");
    });
  });
  $(".js-show_much").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("hide");
    $(".lizy").removeClass("hide");
    $(".js-hide_much").removeClass("hide");
  });
  $(".js-hide_much").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("hide");
    $(".lizy").toggleClass("hide");
    $(".js-show_much").removeClass("hide");
  });
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

  $(".hear_flickity--js").flickity({
    pageDots: false,
    prevNextButtons: false,
    adaptiveHeight: true,
  });

  $(".hear_flickity_small--js").flickity({
    adaptiveHeight: false,
    pageDots: false,
    prevNextButtons: false,
    contain: true,
    asNavFor: ".hear_flickity--js",
  });

  $(".says__flickity--js").flickity({
    adaptiveHeight: false,
    pageDots: false,
    prevNextButtons: false,
    adaptiveHeight: true,
    wrapAround: true,
    autoPlay: true,
  });

  $(".grafic_slider--slick").flickity({
    wrapAround: true,
    adaptiveHeight: true,
    pageDots: false,
    selectedAttraction: 0.1,
    friction: 0.8,
  });

  $(".grafic_slider--slick_item").on("click", function () {
    let index = $(this).index();
    $(".grafic_slider--slick").flickity("select", index);
  });

  $(".mac_slider--slick").flickity({
    wrapAround: true,
    adaptiveHeight: false,
    pageDots: false,
    percentPosition: false,
    selectedAttraction: 0.04,
    friction: 0.5,
  });

  $(".mac_slider--slick-item").on("click", function () {
    let index = $(this).index();
    $(".mac_slider--slick").flickity("select", index);
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

  $(".business--slick_slider").flickity({
    wrapAround: true,
    adaptiveHeight: true,
    pageDots: false,
    percentPosition: false,
  });

  $(".business--slick_slider .item").on("click", function () {
    let index = $(this).index();
    $(".business--slick_slider").flickity("select", index);
  });

  $(".video_block--preview").click(function () {
    $(this).toggleClass("video_block--preview--hidden");
    var src = $(this).siblings("iframe").attr("src");
    $(this)
      .siblings("iframe")
      .attr("src", src + "&autoplay=1");
  });
  $(".advanced_slider--slick").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".advanced_slick--prev"),
    nextArrow: $(".advanced_slick--next"),
  });
  $(".js-burger").click(function () {
    $(this).toggleClass("burger--active");
    $(".header__top-row").toggleClass("menu--active");
    $(".header__bottom-row").toggleClass("menu--active");
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
          $(window).scrollTop() + window.innerHeight / 1.2 >
            $(this).offset().top &&
          $(window).scrollTop() - window.innerHeight < $(this).offset().top
        ) {
          $(this).removeClass("goanim");
        } else if (
          $(this).hasClass("footan") &&
          $(window).scrollTop() + window.innerHeight > $("body").height() - 100
        ) {
          $(this).removeClass("goanim");
        }
      });
    }
  }

  $(document).on("focus", ".form_label input", function () {
    $(this).parent().addClass("active");
    $(this).parent().removeClass("error");
  });
  $(document).on("blur", ".form_label input", function () {
    if ($(this).val() == "") {
      $(this).parent().removeClass("active");
      $(this).parent().addClass("error");
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
      src: "#modal",
      type: "inline",
    });
  }
  $(".js-action-btn").click(function () {
    modal();
  });

  function modal2() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal2",
      type: "inline",
    });
  }
  $(".js-modal2-btn").click(function () {
    modal2();
  });
  $(".question-item-js").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".question-item-js").removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".head__item--show-btn--js").click(function (e) {
    e.preventDefault();
    $(this).addClass("hide");
    $(this).next().removeClass("hide");
    $(this).parent().next(".head__item--content").removeClass("hide");
  });

  $(".head__item--hide-btn--js").click(function (e) {
    e.preventDefault();
    $(this).addClass("hide");
    $(this).prev().removeClass("hide");
    $(this).parent().next(".head__item--content").addClass("hide");
  });
  ////////////////////////////////
  // $('.text_flicky--js').flickity({
  //     autoPlay: 7000,
  //     wrapAround: true,
  //     pageDots: false,
  //     prevNextButtons: false,
  // });

  $(".text_flicky--js").slick({
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
  var countDelay = 0;
  $(window).scroll(function () {
    console.log(countDelay);
    var newScrollPos = $(this).scrollTop();
    if ($(this).scrollTop() > 67) {
      if ($(".big_menu_content--js").hasClass("active")) {
        return;
      } else if (newScrollPos > scrollPos) {
        $(".big_header__bg--2").addClass("scroll");
        countDelay = 0;
      } else if (newScrollPos < scrollPos) {
        countDelay++;
        if (countDelay > 30) {
          $(".big_header__bg--2").removeClass("scroll");
          countDelay = 0;
        }
      }
      scrollPos = newScrollPos;
    } else {
      $(".big_header__bg--2").removeClass("scroll");
    }
  });

  $(".big_header__bg").hover(function () {
    $(".big_header__bg--2").removeClass("scroll");
  });

  $(document).on("click", ".mam_tabs-btn", function (e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      var id = $(this).data("id");
      $(this)
        .addClass("active")
        .siblings(".mam_tabs-btn")
        .removeClass("active");
      $(this)
        .siblings(".mam_tabs-content")
        .fadeOut(300)
        .promise()
        .done(function () {
          $(this)
            .siblings('.mam_tabs-content[data-id="' + id + '"]')
            .fadeIn(300);
        });
    }
  });

  $(".tabs_slider .item").click(function () {
    event.preventDefault();
    if (!$(this).hasClass("active")) {
      var id = $(this).data("id");
      $(".tabs_slider .item").removeClass("active");
      $(this).addClass("active");
      $(".main_tabs_slider .item")
        .fadeOut(300)
        .promise()
        .done(function () {
          $('.main_tabs_slider .item[data-id="' + id + '"]').fadeIn(300);
        });
    }
  });
  $(".big_menu_btn--js").hover(function () {
    if ($(window).width() > 900) {
      event.preventDefault();
      if (!$(this).hasClass("active")) {
        var id = $(this).data("id");
        $(".big_menu_btn--js").addClass("disabled");
        $(".big_menu_btn--js").removeClass("active");
        $(this).addClass("active");
        $('.big_menu_content--js[data-id="' + id + '"]');
        $(".big_menu_content--js")
          .fadeOut(300)
          .promise()
          .done(function () {
            $('.big_menu_content--js[data-id="' + id + '"]')
              .addClass("active")
              .promise()
              .done(function () {
                $(this).fadeIn(300);
                $(".big_menu_btn--js").removeClass("disabled");
              });
          });
      }
    } else {
      $(".big_menu_btn--js").click(function () {
        event.preventDefault();
        if (!$(this).hasClass("active")) {
          $("body").addClass("hidden");
          $(".big_header").addClass("active");
          var id = $(this).data("id");
          $(".big_menu_btn--js").removeClass("active");
          $(this).addClass("active");
          $(".burger--js").addClass("active");
          $(".big_menu_content--js")
            .fadeOut(300)
            .promise()
            .done(function () {
              $('.big_menu_content--js[data-id="' + id + '"]')
                .addClass("active")
                .promise()
                .done(function () {
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

  $(".tabs_slider").flickity({
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    // asNavFor: ".main_tabs_slider",
    cellAlign: "left",
    contain: true,
    autoPlay: 4000,
  });

  $(".tabs_slider_b2_core--js").on("change.flickity", function (event, index) {
    var id = index + 1;
    $(".tabs_slider .item").removeClass("active");
    $('.tabs_slider .item[data-id="' + id + '"]').addClass("active");
    $(".main_tabs_slider .item")
      .fadeOut(300)
      .promise()
      .done(function () {
        $('.main_tabs_slider .item[data-id="' + id + '"]').fadeIn(300);
      });
  });

  $(document).on("click", "body", function (e) {
    var targetI = e.target;
    if (
      !targetI.classList.contains("packages_table__wrapper") &&
      !targetI.classList.contains("packages_hide_table_btn") &&
      !targetI.classList.contains("packages_more_table_btn") &&
      !targetI.classList.contains("packages_table__row") &&
      !targetI.classList.contains("packages_table__col") &&
      !targetI.classList.contains("svg-sprite-icon") &&
      targetI.classList.contains("section__packages")
    ) {
      $("html, body")
        .animate({ scrollTop: $(".section__packages").offset().top }, 2000)
        .promise()
        .done(function () {
          $(".packages_table__wrapper-js-2")
            .slideUp()
            .promise()
            .done(function () {
              $(".packages_table__wrapper-js-1").slideDown();
              $(".packages_more_table_btn").removeClass("active");
              $(".packages_hide_table_btn").removeClass("active");
            });
        });
    }
  });

  $(function () {
    $(".packages_hide_table_btn").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $("html, body")
        .animate({ scrollTop: $(target).offset().top }, 2000)
        .promise()
        .done(function () {
          $(".packages_table__wrapper-js-2")
            .slideUp()
            .promise()
            .done(function () {
              $(".packages_table__wrapper-js-1").slideDown();
              $(".packages_more_table_btn").removeClass("active");
              $(".packages_hide_table_btn").removeClass("active");
            });
        });
    });
  });

  $(document).on("click", ".packages_more_table_btn--js", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".packages_hide_table_btn--js").addClass("active");
    $(".packages_table__wrapper-js-1").slideUp();
    $(".packages_table__wrapper-js-2").slideDown();
  });
});
$(".tabs_slider .item").on("click", function () {
  let index = $(this).index();
  $(".tabs_slider").flickity("select", index);
});

$(document).on("click", ".burger--js", function () {
  $(this).removeClass("active");
  $("body").removeClass("hidden");
  $(".big_menu_btn--js").removeClass("active");
  $(".big_menu_content--js")
    .fadeOut(300)
    .promise()
    .done(function () {
      $(this).removeClass("active");
    });
});

$(document).on("mouseleave", ".big_header", function (event) {
  event.preventDefault();
  $(".big_menu_content--js")
    .fadeOut(300)
    .promise()
    .done(function () {
      $(this).removeClass("active");
    });
  $(".big_menu_btn--js").removeClass("active");
  $(".burger--js").removeClass("active");
});

// $(document).on("hover", ".big_menu_btn--js", function (event) {
//   if ($(window).width() > 900) {
//     event.preventDefault();
//     if (!$(this).hasClass("active")) {
//       var id = $(this).data("id");
//       $(".big_menu_btn--js").removeClass("active");
//       $(this).addClass("active");
//       $('.big_menu_content--js[data-id="' + id + '"]');
//       $(".big_menu_content--js")
//         .fadeOut(300)
//         .promise()
//         .done(function () {
//           $('.big_menu_content--js[data-id="' + id + '"]')
//             .addClass("active")
//             .promise()
//             .done(function () {
//               $(this).fadeIn(300);
//             });
//         });
//     }
//   } else return;
// });

// $(document).on("click", ".big_menu_btn--js", function (event) {
//   event.preventDefault();
//   if (!$(this).hasClass("active")) {
//     $("body").addClass("hidden");
//     $(".big_header").addClass("active");
//     var id = $(this).data("id");
//     $(".big_menu_btn--js").removeClass("active");
//     $(this).addClass("active");
//     $(".burger--js").addClass("active");
//     $(".big_menu_content--js")
//       .fadeOut(300)
//       .promise()
//       .done(function () {
//         $('.big_menu_content--js[data-id="' + id + '"]')
//           .addClass("active")
//           .promise()
//           .done(function () {
//             $(this).fadeIn(300);
//           });
//       });
//   }
// });

$(document).on("click", ".faq_btn_js", function (event) {
  event.preventDefault();

  if (!$(this).hasClass("active")) {
    var id = $(this).data("id");
    $(".faq_btn_js").removeClass("active");
    $(this).addClass("active");
    $(".question-item_content")
      .slideUp(300)
      .promise()
      .done(function () {
        $('.question-item_content[data-id="' + id + '"]').slideDown(300);
      });
  } else {
    $(".faq_btn_js").removeClass("active");
    $(".question-item_content").slideUp(300);
  }
});

$(document).on("focus", ".new_form__label input", function () {
  $(this).parent().addClass("active");
  $(this).parent().removeClass("error");
});
$(document).on("blur", ".new_form__label input", function () {
  if ($(this).val() == "") {
    $(this).parent().removeClass("active");
    $(this).parent().addClass("error");
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

$(".castom_select__content").mCustomScrollbar();

$(document).on("click", ".castom_select .castom_select__heading", function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(".castom_select__content").slideToggle();
});

$(document).on("click", "body", function (e) {
  var targetI = e.target;
  if (
    !targetI.classList.contains("castom_select__heading") &&
    !targetI.classList.contains("castom_select__content") &&
    !targetI.classList.contains("mCustomScrollBox") &&
    !targetI.classList.contains("mCSB_container") &&
    !targetI.classList.contains("mCSB_scrollTools") &&
    !targetI.classList.contains("mCSB_draggerContainer") &&
    !targetI.classList.contains("mCSB_dragger")
  ) {
    $(".castom_select__content").slideUp();
    $(".castom_select__heading").removeClass("active");
  }
});

$(".office_slider").flickity({
  wrapAround: false,
  adaptiveHeight: false,
  pageDots: false,
  percentPosition: false,
  selectedAttraction: 0.06,
  friction: 0.7,
});

$(".advanced_slider--slick-2").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $(".advanced_slick--prev-2"),
  nextArrow: $(".advanced_slick--next-2"),
});

$(document).on("click", ".office_slider__item", function (e) {
  let index = $(this).index();
  $(".office_slider").flickity("select", index);
});

var machine = new Typed("#machine", {
  strings: [
    '<span style="font-weight: 900;">L^100i^120q^90u^150i^300d^130i^380t^200y</span> &amp; <b style="font-weight: 900;">T^180e^210c^300h^50n^230o^150logy</b>',
    '<b style="font-weight: 900;">Liquidity</b> &amp; <b style="font-weight: 900;">Technology</b>',
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
  loopCount: 1,
  showCursor: false,
  contentType: "html",
});

function timer(f_time) {
  function timer_go() {
    var n_time = Date.now();
    var diff = f_time - n_time;
    if (diff <= 0) return false;
    var left = diff % 1000;

    //секунды
    diff = parseInt(diff / 1000);
    var s = diff % 60;
    if (s < 10) {
      $(".seconds_1").html(0);
      $(".seconds_2").html(s);
    } else {
      $(".seconds_1").html(parseInt(s / 10));
      $(".seconds_2").html(s % 10);
    }
    //минуты
    diff = parseInt(diff / 60);
    var m = diff % 60;
    if (m < 10) {
      $(".minutes_1").html(0);
      $(".minutes_2").html(m);
    } else {
      $(".minutes_1").html(parseInt(m / 10));
      $(".minutes_2").html(m % 10);
    }
    //часы
    diff = parseInt(diff / 60);
    var h = diff % 24;
    if (h < 10) {
      $(".hours_1").html(0);
      $(".hours_2").html(h);
    } else {
      $(".hours_1").html(parseInt(h / 10));
      $(".hours_2").html(h % 10);
    }
    //дни
    var d = parseInt(diff / 24);
    if (d < 10) {
      $(".days_1").html(0);
      $(".days_2").html(d);
    } else {
      $(".days_1").html(parseInt(d / 10));
      $(".days_2").html(d % 10);
    }
    setTimeout(timer_go, left);
  }
  setTimeout(timer_go, 0);
}

$(document).ready(function () {
  var time = $(".timer").attr("data-finish");
  timer(time);
});
