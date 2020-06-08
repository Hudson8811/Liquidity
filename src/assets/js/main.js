$(document).ready(function () {
  $(".big_menu_content--js").fadeOut();
  $(document).on("click", ".genuine__row", function () {
    var row = $(this).data("row_number");
    $(this).toggleClass("active");
    $(this)
      .siblings('.genuine__row--slide[data-row_number="' + row + '"]')
      .slideToggle();
  });

  function outNum1() {
    const wub1_num = 51;
    const wub1_time = 2500; //ms
    const wub1_step = 1;
    let wub1_el = document.querySelector("#wub1--js");
    let wub1_n = 0;
    let wub1_t = Math.round(wub1_time / (wub1_num / wub1_step));
    let interval = setInterval(function () {
      wub1_n = wub1_n + wub1_step;
      if (wub1_n == wub1_num) {
        clearInterval(interval);
      }
      wub1_el.innerHTML = wub1_n;
    }, wub1_t);

    // let timeout = setTimeout(function () {
    //   wub1_num2 = 51;
    //   wub1_t2 = wub1_t + 500;
    //   let wub1_interval = setInterval(function () {
    //     wub1_n = wub1_n + wub1_step;
    //     if (wub1_n == wub1_num2) {
    //       clearInterval(wub1_interval);
    //     }
    //     wub1_el.innerHTML = wub1_n;
    //   }, wub1_t2);
    // }, wub1_t);
  }

  function outNum2() {
    const wub2_num = 27;
    const wub2_time = 2100; //ms
    const wub2_step = 1;
    let wub2_el = document.querySelector("#wub2--js");
    let wub2_n = 0;
    let wub2_t = Math.round(wub2_time / (wub2_num / wub2_step));
    let interval2 = setInterval(function () {
      wub2_n = wub2_n + wub2_step;
      if (wub2_n == wub2_num) {
        clearInterval(interval2);
      }
      wub2_el.innerHTML = wub2_n;
    }, wub2_t);

    // let timeout2 = setTimeout(function () {
    //   wub2_num2 = 27;
    //   wub2_t2 = wub2_t + 500;
    //   let wub2_interval = setInterval(function () {
    //     wub2_n = wub2_n + wub2_step;
    //     if (wub2_n == wub2_num2) {
    //       clearInterval(wub2_interval);
    //     }
    //     wub2_el.innerHTML = wub2_n;
    //   }, wub2_t2);
    // }, wub2_t);
  }

  function outNum3() {
    const wub3_num = 15;
    const wub3_time = 1800; //ms
    const wub3_step = 1;
    let wub3_el = document.querySelector("#wub3--js");
    let wub3_n = 0;
    let wub3_t = Math.round(wub3_time / (wub3_num / wub3_step));
    let interval3 = setInterval(function () {
      wub3_n = wub3_n + wub3_step;
      if (wub3_n == wub3_num) {
        clearInterval(interval3);
      }
      wub3_el.innerHTML = wub3_n;
    }, wub3_t);

    // let timeout3 = setTimeout(function () {
    //   wub3_num2 = 15;
    //   wub3_t2 = wub3_t + 500;
    //   let wub3_interval = setInterval(function () {
    //     wub3_n = wub3_n + wub3_step;
    //     if (wub3_n == wub3_num2) {
    //       clearInterval(wub3_interval);
    //     }
    //     wub3_el.innerHTML = wub3_n;
    //   }, wub3_t2);
    // }, wub3_t);
  }

  function outNum4() {
    const wub4_num = 5;
    const wub4_time = 1500; //ms
    const wub4_step = 1;
    let wub4_el = document.querySelector("#wub4--js");
    let wub4_n = 0;
    let wub4_t = Math.round(wub4_time / (wub4_num / wub4_step));
    let interval4 = setInterval(function () {
      wub4_n = wub4_n + wub4_step;
      if (wub4_n == wub4_num) {
        clearInterval(interval4);
      }
      wub4_el.innerHTML = wub4_n;
    }, wub4_t);

    // let timeout4 = setTimeout(function () {
    //   wub4_num2 = 5;
    //   wub4_t2 = wub4_t + 0;
    //   let wub4_interval = setInterval(function () {
    //     wub4_n = wub4_n + wub4_step;
    //     if (wub4_n == wub4_num2) {
    //       clearInterval(wub4_interval);
    //     }
    //     wub4_el.innerHTML = wub4_n;
    //   }, wub4_t2);
    // }, wub4_t);
  }

  function outNum5() {
    const wub5_num = 18;
    const wub5_time = 2000; //ms
    const wub5_step = 1;
    let wub5_el = document.querySelector("#wub5--js");
    let wub5_n = 0;
    let wub5_t = Math.round(wub5_time / (wub5_num / wub5_step));
    let interval5 = setInterval(function () {
      wub5_n = wub5_n + wub5_step;
      if (wub5_n == wub5_num) {
        clearInterval(interval5);
      }
      wub5_el.innerHTML = wub5_n;
    }, wub5_t);

    // let timeout5 = setTimeout(function () {
    //   wub5_num2 = 18;
    //   wub5_t2 = wub5_t + 500;
    //   let wub5_interval = setInterval(function () {
    //     wub5_n = wub5_n + wub5_step;
    //     if (wub5_n == wub5_num2) {
    //       clearInterval(wub5_interval);
    //     }
    //     wub5_el.innerHTML = wub5_n;
    //   }, wub5_t2);
    // }, wub5_t);
  }

  function outNum6() {
    const wub4_num = 5;
    const wub4_time = 1500; //ms
    const wub4_step = 1;
    let wub4_el = document.querySelector("#wub6--js");
    let wub4_n = 0;
    let wub4_t = Math.round(wub4_time / (wub4_num / wub4_step));
    let interval4 = setInterval(function () {
      wub4_n = wub4_n + wub4_step;
      if (wub4_n == wub4_num) {
        clearInterval(interval4);
      }
      wub4_el.innerHTML = wub4_n;
    }, wub4_t);

    // let timeout4 = setTimeout(function () {
    //   wub4_num2 = 5;
    //   wub4_t2 = wub4_t + 0;
    //   let wub4_interval = setInterval(function () {
    //     wub4_n = wub4_n + wub4_step;
    //     if (wub4_n == wub4_num2) {
    //       clearInterval(wub4_interval);
    //     }
    //     wub4_el.innerHTML = wub4_n;
    //   }, wub4_t2);
    // }, wub4_t);
  }

  function outNum7() {
    const wub4_num = 1;
    const wub4_time = 1000; //ms
    const wub4_step = 1;
    let wub4_el = document.querySelector("#wub7--js");
    let wub4_n = 0;
    let wub4_t = Math.round(wub4_time / (wub4_num / wub4_step));
    let interval4 = setInterval(function () {
      wub4_n = wub4_n + wub4_step;
      if (wub4_n == wub4_num) {
        clearInterval(interval4);
      }
      wub4_el.innerHTML = wub4_n;
    }, wub4_t);

    // let timeout4 = setTimeout(function () {
    //   wub4_num2 = 5;
    //   wub4_t2 = wub4_t + 0;
    //   let wub4_interval = setInterval(function () {
    //     wub4_n = wub4_n + wub4_step;
    //     if (wub4_n == wub4_num2) {
    //       clearInterval(wub4_interval);
    //     }
    //     wub4_el.innerHTML = wub4_n;
    //   }, wub4_t2);
    // }, wub4_t);
  }
  function checkPositionSpeed() {
    // координаты дива
    var div_position2 = $(".speed_form--left").offset();
    // отступ сверху
    var div_top2 = div_position2.top;
    // отступ слева
    var div_left2 = div_position2.left;
    // ширина
    var div_width2 = $(".speed_form--left").width();
    // высота
    var div_height2 = $(".speed_form--left").height();

    // проскроллено сверху
    var top_scroll2 = $(document).scrollTop();
    // проскроллено слева
    var left_scroll2 = $(document).scrollLeft();
    // ширина видимой страницы
    var screen_width2 = $(window).width();
    // высота видимой страницы
    var screen_height2 = $(window).height();

    // координаты углов видимой области
    var see2_x1 = left_scroll2;
    var see2_x2 = screen_width2 + left_scroll2;
    var see2_y1 = top_scroll2;
    var see2_y2 = screen_height2 + top_scroll2;

    // координаты углов искомого элемента
    var div2_x1 = div_left2;
    var div2_x2 = div_left2 + div_height2;
    var div2_y1 = div_top2;
    var div2_y2 = div_top2 + div_width2;

    // проверка - виден див полностью или нет
    if (
      div2_x1 >= see2_x1 &&
      div2_x2 <= see2_x2 &&
      div2_y1 >= see2_y1 &&
      div2_y2 <= see2_y2
    ) {
      // если виден
      $(".speed_form--gray_gr").addClass("active");
      $(".speed_form--green_gr").addClass("active");

      $(document).off("scroll");
    } else {
    }
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
      outNum1();
      outNum2();
      outNum3();
      outNum4();
      outNum5();
      outNum6();
      outNum7();
      $(document).off("scroll");
    } else {
    }
  }

  function check() {
    if ($("body").hasClass("b2_core")) {
      checkPosition();
    } else {
      checkPositionSpeed();
    }
  }

  $(document).ready(function () {
    $(document).scroll(function () {
      // при скролле страницы делаем проверку
      check();
    });

    // после загрузки страницы сразу проверяем
    check();
    // проверка при масштабировании и изменении размера страницы
    $(window).resize(function () {
      check();
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
    adaptiveHeight: false,
  });

  $(".aml_slider--js").flickity({
    pageDots: false,
    contain: true,
  });

  $(".invoiced__slider--js").flickity({
    pageDots: false,
    contain: true,
  });

  $(".flow__slider--js").flickity({
    pageDots: false,
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
    adaptiveHeight: false,
    wrapAround: true,
  });

  $(".grafic_slider--slick").flickity({
    wrapAround: true,
    adaptiveHeight: true,
    pageDots: false,
    selectedAttraction: 0.1,
    friction: 0.8,
    prevNextButtons: false,
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
    prevNextButtons: false,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
  });

  $(".mac_slider--slick-item").on("click", function () {
    let index = $(this).index();
    $(".mac_slider--slick").flickity("select", index);
  });

  $(".business--slick_slider").flickity({
    wrapAround: true,
    adaptiveHeight: true,
    pageDots: false,
    percentPosition: false,
  });

  $(".section__envairoment .mam_tabs-btn").on("click", function () {
    let index = $(this).index();
    $(".section__envairoment .main_tabs_slider_b2_core--js ").flickity(
      "select",
      index
    );
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

  function modal3() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal3",
      type: "inline",
    });
  }

  function modal3Close() {
    event.preventDefault();
    $.fancybox.close({
      src: "#modal3",
      type: "inline",
    });
  }

  function modal4() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal4",
      type: "inline",
    });
  }

  $('.new_form__sabmit[type="submit"]').click(function () {
    $.fancybox.close({
      src: "#modal2",
      type: "inline",
    });
    $.fancybox.open({
      src: "#modal4",
      type: "inline",
    });
  });

  $(".packages_more_table_btn--js").click(function () {
    modal3();
  });

  $(".packages_hide_table_btn--js").click(function () {
    modal3Close();
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

  $(".invoiced__slider--js").on("change.flickity", function (event, index) {
    if (index == 2) {
      $(".invoiced_scroll__wrapper").slick({
        infinite: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        verticalSwiping: true,
      });
    }
  });

  $(".invoiced_scroll__wrapper").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    if (currentSlide === 1) {
      $(".invoiced_scroll__wrapper .item:nth-child(1)").addClass(
        "slick-current slick-active"
      );
    }
  });

  $("#machine-slider").slick({
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });

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

  ///////////////////////////// СТАРЫЕ ТАБЫ ////////////////////////////////

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
          $(".gif__slider--js").flickity({
            pageDots: false,
            contain: true,
          });
        });
    }
  });

  $(".tabs_slider:not(.tabs_slider_b2_core--js) .item").click(function () {
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
          .fadeOut(400)
          .promise()
          .done(function () {
            $('.big_menu_content--js[data-id="' + id + '"]')
              .addClass("active")
              .promise()
              .done(function () {
                $(this).fadeIn(400);
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
            .fadeOut(400)
            .promise()
            .done(function () {
              $('.big_menu_content--js[data-id="' + id + '"]')
                .addClass("active")
                .promise()
                .done(function () {
                  $(this).fadeIn(400);
                });
            });
        }
      });
    }
  });
  $(".tabs_slider_b2_core--js").flickity({
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    asNavFor: ".main_tabs_slider_b2_core--js",
    cellAlign: "left",
    contain: true,
    autoPlay: 5000,
  });
  $(".tabs_slider").flickity({
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    asNavFor: ".main_tabs_slider",
    cellAlign: "left",
    contain: true,
    autoPlay: false,
  });

  $(".main_tabs_slider_b2_core--js").flickity({
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  });

  $(".tabs_slider_b2_core--js").on("change.flickity", function (event, index) {
    $(".main_tabs_slider_b2_core--js").flickity("select", index);
  });

  $(".family").flickity({
    freeScroll: false,
    prevNextButtons: false,
    pageDots: false,
    asNavFor: ".says__flickity--js",
    contain: true,
    autoPlay: 3000,
  });

  $(".family").on("change.flickity", function (event, index) {
    $(".says__flickity--js").flickity("select", index);
  });

  ///////////////////////////////////// СТАРАЯ ТАБЛИЦА ///////////////////////////////////////
  // $(document).on("click", "body", function (e) {
  //   var targetI = e.target;
  //   if (
  //     !targetI.classList.contains("packages_table__wrapper") &&
  //     !targetI.classList.contains("packages_hide_table_btn") &&
  //     !targetI.classList.contains("packages_more_table_btn") &&
  //     !targetI.classList.contains("packages_table__row") &&
  //     !targetI.classList.contains("packages_table__col") &&
  //     !targetI.classList.contains("svg-sprite-icon") &&
  //     targetI.classList.contains("section__packages")
  //   ) {
  //     $("html, body").animate(
  //       { scrollTop: $(".section__packages").offset().top },
  //       2000
  //     );
  //     $(".packages_table__wrapper-js-2").slideUp();
  //     $(".packages_table__wrapper-js-1").slideDown();
  //     $(".packages_more_table_btn").removeClass("active");
  //     $(".packages_hide_table_btn").removeClass("active");
  //   }
  // });

  // $(function () {
  //   $(".packages_hide_table_btn").click(function (e) {
  //     e.preventDefault();
  //     var target = $(this).attr("href");
  //     $(".packages_table__wrapper-js-2").slideUp();
  //     $(".packages_table__wrapper-js-1").slideDown();
  //     $(".packages_more_table_btn").removeClass("active");
  //     $(".packages_hide_table_btn").removeClass("active");
  //     $("html, body").animate({ scrollTop: $(target).offset().top }, 2000);
  //   });
  // });

  // $(document).on("click", ".packages_more_table_btn--js", function (e) {
  //   e.preventDefault();
  //   $(this).addClass("active");
  //   $(".packages_hide_table_btn--js").addClass("active");
  //   $(".packages_table__wrapper-js-1").slideUp();
  //   $(".packages_table__wrapper-js-2").slideDown();
  // });

  $(".trading__slider").flickity({
    wrapAround: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    adaptiveHeight: false,
  });

  $(".trading__slider .item").on("click", function () {
    let index = $(this).index();
    $(".trading__slider").flickity("select", index);
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
    .fadeOut(400)
    .promise()
    .done(function () {
      $(this).removeClass("active");
    });
});

$(document).on("mouseleave", ".big_header", function (event) {
  event.preventDefault();
  $(".big_menu_content--js")
    .fadeOut(400)
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

$(".castom_select__content").mCustomScrollbar();

$(document).on("click", ".castom_select .castom_select__heading", function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(".castom_select__content").slideToggle();
});

$(".filter__content").mCustomScrollbar();

$(document).on("focus", ".new_form__label .new_form__input", function () {
  $(this).parent().addClass("active");
  $(this).parent().removeClass("error");
});

$(document).on("blur", ".new_form__label .new_form__input", function () {
  if ($(this).val() == "") {
    $(this).parent().removeClass("active");

    if ($(this).attr("required")) {
      $(this).parent().addClass("error");
    }
  } else {
    $(this).parent().removeClass("error");
    if (
      $(this).attr("type") == "email" &&
      !isValidEmailAddress($(this).val())
    ) {
      if ($(this).attr("required")) {
        $(this).parent().addClass("error");
      }
    }
  }
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

$(".flickity_notification--js").flickity({
  wrapAround: false,
  adaptiveHeight: false,
  pageDots: false,
  percentPosition: false,
  adaptiveHeight: false,
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

$(".family__block").hover(function () {
  var familyTarget = $(this).data("target");
  $(".says__flickity--js").flickity("select", familyTarget);
});

function falidator(item) {
  check = true;
  $(item)
    .find("input")
    .each(function () {
      if ($(this).hasClass("required") && $(this).val() == "") {
        check = false;
        $(this).css("border", "1px red solid");
      } else {
        $(this).css("border", "1px transparent solid");
      }
    });
  if (check) {
    return true;
  } else {
    return false;
  }
}

var machine = new Typed("#machine", {
  strings: [
    '<span style="font-weight: 900;">L^10i^20q^90u^50i^30d^30i^80t^20y</span>  &amp; <b style="font-weight: 900;">T^10e^20c^30h^50n^20o^50logy</b>',
    "<span>P^10r^20i^20m^10e of Pr^20ime</span> </br> <b style='font-weight: 900;'>M^40u^20l^50t^30i-As^40s^30et Liquidity</b>",
    "<span>A^20d^50v^30a^10nc^20ed</span></br> <b style='font-weight: 900;'>W^100hi^30te La^20bel Sol^30uti^20on^50s</b>",
    "<b style='font-weight: 900;'>Tec^20hnolo^300gy Sol^40uti^20ons</b>",
  ],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
  showCursor: false,
  contentType: "html",
});

$(".produst_tabs_btn--js").hover(function (e) {
  e.preventDefault();
  if (!$(this).hasClass("active")) {
    var id = $(this).data("id");
    $(".produst_tabs_btn--js").removeClass("active");
    $(this).addClass("active");
    $(".produst_tabs_content--js").removeClass("active");
    $('.produst_tabs_content--js[data-id="' + id + '"]').addClass("active");
  }
});
