setTimeout(function () {
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

  $(".text_flicky--js").addClass("active");
}, 0);

$(document).ready(function () {
  if ($("body").hasClass("bigAnimation")) {
    var elem = document.getElementById("ab__content");
    if (elem.addEventListener) {
      if ("onwheel" in document) {
        elem.addEventListener("wheel", onWheel);
      } else if ("onmousewheel" in document) {
        elem.addEventListener("mousewheel", onWheel);
      } else {
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else {
      // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }
    function activated(element) {
      if ($(element).css("opacity") == 0) {
        $(element).css("opacity", "1");
      } else if ($(element).css("opacity") == 1) {
        $(element).css("opacity", "0");
      }
    }

    const element2 = $('.ab__text__item[data-id="2"]');
    const element3 = $('.ab__text__item[data-id="3"]');
    const element4 = $('.ab__text__item[data-id="4"]');
    const element5 = $('.ab__text__item[data-id="5"]');
    const element6 = $('.ab__text__item[data-id="6"]');

    const logo1 = $('.ab__core__item[data-id="1"] .ab__core__icon');
    const logo2 = $('.ab__core__item[data-id="2"] .ab__core__icon');
    const logo3 = $('.ab__core__item[data-id="3"] .ab__core__icon');
    const logo4 = $('.ab__core__item[data-id="4"] .ab__core__icon');
    const logo5 = $('.ab__core__item[data-id="5"] .ab__core__icon');
    const logo6 = $('.ab__core__item[data-id="6"] .ab__core__icon');
    const logo7 = $('.ab__core__item[data-id="7"] .ab__core__icon');
    const logo8 = $('.ab__core__item[data-id="8"] .ab__core__icon');
    const logo9 = $('.ab__core__item[data-id="9"] .ab__core__icon');

    const discription1 = $('.ab__core__item[data-id="1"] .ab__core__text');
    const discription2 = $('.ab__core__item[data-id="2"] .ab__core__text');
    const discription3 = $('.ab__core__item[data-id="3"] .ab__core__text');
    const discription4 = $('.ab__core__item[data-id="4"] .ab__core__text');
    const discription5 = $('.ab__core__item[data-id="5"] .ab__core__text');
    const discription6 = $('.ab__core__item[data-id="6"] .ab__core__text');
    const discription7 = $('.ab__core__item[data-id="7"] .ab__core__text');
    const discription8 = $('.ab__core__item[data-id="8"] .ab__core__text');
    const discription9 = $('.ab__core__item[data-id="9"] .ab__core__text');

    const bigCircle = document.querySelector(".circle");
    const radius = bigCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    bigCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    bigCircle.style.strokeDashoffset = circumference;

    function setProgress(persent) {
      const offset = circumference - (persent / 100) * circumference;
      if (bigCircle.style.strokeDashoffset !== offset) {
        bigCircle.style.strokeDashoffset = offset;
      } else {
        bigCircle.style.strokeDashoffset =
          bigCircle.style.strokeDashoffset - offset;
      }
    }

    function onWheel(e) {
      e = e || window.event;

      var delta = Math.max(1, Math.min(1, e.wheelDelta || -e.detail));
      let info = document.getElementById("info");
      let value = +info.innerHTML + delta;
      info.innerHTML = value;

      if (info.innerHTML == 0) {
        setProgress(0);
      }

      if (info.innerHTML == 10) {
        setProgress(20);
        activated(element2);
      } else if (info.innerHTML == 20) {
        setProgress(38);
        activated(element3);
      } else if (info.innerHTML == 30) {
        setProgress(55);
        activated(element4);
      } else if (info.innerHTML == 40) {
        setProgress(75);
        activated(element5);
        $(".ab__logo").removeClass("active");
      } else if (info.innerHTML == 50) {
        setProgress(100);
        activated(element6);
        $(".ab__logo").addClass("active");
        $(".ab__logo svg").removeClass("active");
      } else if (info.innerHTML == 60) {
        $(".ab__logo svg").addClass("active");
        $(".ab__logo").removeClass("active");
        $(".ab__logo").removeClass("disabled");
        $(".ab__text").removeClass("disabled");
        setProgress(100);
        discription1.removeClass("active");
        logo1.removeClass("active");
        $(".ab__content").removeClass("second_move");
        $(".animation_brand .section__title").removeClass("disabled");
      } else if (info.innerHTML == 70) {
        $(".ab__content").addClass("second_move");
        $(".animation_brand .section__title").addClass("disabled");
        $(".ab__text").addClass("disabled");
        $(".ab__logo").addClass("disabled");
        setProgress(0);
        logo1.addClass("active").removeClass("disabled");
        logo2.removeClass("active");
        discription1.addClass("active");
        discription2.removeClass("active");
      } else if (info.innerHTML == 80) {
        logo1.addClass("disabled");
        logo2.addClass("active").removeClass("disabled");
        logo3.removeClass("active");
        discription1.removeClass("active");
        discription2.addClass("active");
        discription3.removeClass("active");
      } else if (info.innerHTML == 90) {
        discription2.removeClass("active");
        discription3.addClass("active");
        discription4.removeClass("active");
        logo2.addClass("disabled");
        logo3.addClass("active").removeClass("disabled");
        $(".ab__core__item").removeClass("second_move");
        logo4.removeClass("active");
      } else if (info.innerHTML == 100) {
        discription3.removeClass("active");
        discription4.addClass("active");
        discription5.removeClass("active");
        logo3.addClass("disabled");
        logo4.addClass("active").removeClass("disabled");
        logo5.removeClass("active");
        $(".ab__core__item").addClass("second_move");
      } else if (info.innerHTML == 110) {
        discription4.removeClass("active");
        discription5.addClass("active");
        discription6.removeClass("active");
        logo4.addClass("disabled");
        logo5.addClass("active").removeClass("disabled");
        logo6.removeClass("active");
      } else if (info.innerHTML == 120) {
        discription5.removeClass("active");
        discription6.addClass("active");
        discription7.removeClass("active");
        logo5.addClass("disabled");
        logo6.addClass("active").removeClass("disabled");
        logo7.removeClass("active");
      } else if (info.innerHTML == 130) {
        discription6.removeClass("active");
        discription7.addClass("active");
        discription8.removeClass("active");
        logo6.addClass("disabled");
        logo7.addClass("active").removeClass("disabled");
        logo8.removeClass("active");
      } else if (info.innerHTML == 140) {
        discription7.removeClass("active");
        discription8.addClass("active");
        discription9.removeClass("active");
        logo7.addClass("disabled");
        logo8.addClass("active").removeClass("disabled");
        logo9.removeClass("active");
        $(
          ".ab__core__icon:not(.ab__core__item:nth-child(9) .ab__core__icon)"
        ).removeClass("opacity03");
      } else if (info.innerHTML == 150) {
        $(".ab__core__icon:not(.ab__core__item:nth-child(9) .ab__core__icon)")
          .addClass("opacity03")
          .removeClass("opacity1");
        discription8.removeClass("active");
        discription9.addClass("active");
        logo8.addClass("disabled");
        logo9.addClass("active");
        $(".ab__core__icon").removeClass("opacity1");
      } else if (info.innerHTML == 160) {
        $(
          ".ab__core__icon:not(.ab__core__item:nth-child(9) .ab__core__icon)"
        ).addClass("opacity1");
        discription9.removeClass("active");
        $(" .ab__core__item  .ab__core__icon").removeClass("gradient");
        $(".ab__core__icon").addClass("opacity1");
      } else if (info.innerHTML == 170) {
        $(" .ab__core__item  .ab__core__icon").addClass("gradient");
        $(" .ab__core__item  .ab__core__icon").removeClass("three_move");
      } else if (info.innerHTML == 180) {
        $(" .ab__core__item  .ab__core__icon")
          .addClass("three_move")
          .removeClass("for_move");
      } else if (info.innerHTML == 190) {
        $(" .ab__core__item  .ab__core__icon")
          .addClass("for_move")
          .removeClass("five_move");
        $(".ab__title_block__heading").removeClass("active");
        $(".ab__title_block__subtitle").removeClass("active");
      } else if (info.innerHTML == 200) {
        $(" .ab__core__item  .ab__core__icon")
          .addClass("five_move")
          .removeClass("six_move");
        $(".ab__title_block__heading")
          .addClass("active")
          .removeClass("six_move");
        $(".ab__title_block__subtitle")
          .addClass("active")
          .removeClass("six_move");
        $(".animation_brand").css({
          padding: "150px 0",
        });
      } else if (info.innerHTML == 210) {
        $(" .ab__core__item  .ab__core__icon").addClass("six_move");
        $(".ab__title_block__heading").addClass("six_move");
        $(".ab__title_block__subtitle").addClass("six_move");
        $(".animation_brand").css({
          padding: "0",
        });
      }
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
  }

  $(".big_menu_content--js").fadeOut();
  $(document).on("click", ".genuine__row", function () {
    var row = $(this).data("row_number");
    $(this).toggleClass("active");
    $(this)
      .siblings('.genuine__row--slide[data-row_number="' + row + '"]')
      .slideToggle();
  });

  function get_timer(id) {
    time = $(id).data("time");
    let date_new = time;
    let date_t = new Date(date_new);
    let date = new Date();
    let timer = date_t - date;
    let timeout = "00 : 00 : 00";
    let timedisabled = "72 : 00 : 00";

    if (date_t > date) {
      let hour = parseInt(timer / (60 * 60 * 1000));
      if (hour < 10) {
        hour = "0" + hour;
      }
      hour = hour.toString();
      let min = parseInt(timer / (1000 * 60)) % 60;
      if (min < 10) {
        min = "0" + min;
      }
      min = min.toString();
      let sec = parseInt(timer / 1000) % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      sec = sec.toString();
      let timethis = hour + ":" + min + ":" + sec;

      if ($(id).hasClass("disabled")) {
        $(` ${id}   .timer_section`).text(timedisabled);
      } else {
        $(` ${id}   .timer_section`).text(timethis);
      }
    } else {
      $(` ${id}   .timer_section`).text(timeout);
    }
  }

  timer = function (element) {
    setInterval(function () {
      get_timer(element);
    }, 1000);
  };

  timer("#timer1");
  timer("#timer2");
  timer("#timer3");
  timer("#timer4");
  timer("#timer5");

  function outNum(number, time, element) {
    const wub_num = number;
    const wub_time = time; //ms
    const wub_step = 1;
    let wub_el = document.querySelector(element);
    let wub_n = 0;
    let wub_t = Math.round(wub_time / (wub_num / wub_step));
    let interval = setInterval(function () {
      wub_n = wub_n + wub_step;
      if (wub_n == wub_num) {
        clearInterval(interval);
      }
      wub_el.innerHTML = wub_n;
    }, wub_t);
  }

  function checkContent(element) {
    // координаты дива
    let div_position = $(element).offset();
    // отступ сверху
    let div_top = div_position.top;
    // отступ слева
    let div_left = div_position.left;
    // ширина
    let div_width = $(element).width();
    // высота
    let div_height = $(element).height();

    // проскроллено сверху
    let top_scroll = $(document).scrollTop();
    // проскроллено слева
    let left_scroll = $(document).scrollLeft();
    // ширина видимой страницы
    let screen_width = $(window).width();
    // высота видимой страницы
    let screen_height = $(window).height();

    // координаты углов видимой области
    let see_x1 = left_scroll;
    let see_x2 = screen_width + left_scroll;
    let see_y1 = top_scroll;
    let see_y2 = screen_height + top_scroll;

    // координаты углов искомого элемента
    let div_x1 = div_left;
    let div_x2 = div_left + div_height;
    let div_y1 = div_top;
    let div_y2 = div_top + div_width;

    if (
      div_x1 >= see_x1 &&
      div_x2 <= see_x2 &&
      div_y1 >= see_y1 &&
      div_y2 <= see_y2
    ) {
      return true;
    }
  }
  function circleAnimation() {
    setTimeout(() => {
      $(".join__icon svg").addClass("is-active");
    }, 1500);
  }
  if (!$("body").hasClass("circle_anim")) {
    circleAnimation();
  } else {
  }

  function checkPositionSpeed() {
    // проверка - виден див полностью или нет
    if (checkContent(".speed_form--left") === true) {
      $(".speed_form--gray_gr").addClass("active");
      $(".speed_form--green_gr").addClass("active");
      $(document).off("scroll");
    }
  }

  function checkPositionCircle() {
    if (checkContent(".join__icon") === true) {
      circleAnimation();
      $(".join__icon svg").addClass("anim_circle_bar");
      $(document).off("scroll");
    }
  }

  function checkPositionNavbarAnim() {
    if (checkContent(".events_sidebar__ul") === true) {
      $(".events_sidebar__li.active").addClass("go_animation");
      $(document).off("scroll");
    }
  }

  function checkPosition() {
    if (
      checkContent(".who_uses_section .container .who_uses_block__item") ===
      true
    ) {
      outNum(51, 2500, "#wub1--js");
      outNum(27, 2100, "#wub2--js");
      outNum(15, 1800, "#wub3--js");
      outNum(5, 1500, "#wub4--js");
      outNum(18, 2000, "#wub5--js");
      outNum(5, 1500, "#wub6--js");
      outNum(1, 1000, "#wub7--js");
      $(document).off("scroll");
    }
  }

  function check() {
    if ($("body").hasClass("b2_core")) {
      checkPosition();
    } else if ($("body").hasClass("circle_anim")) {
      checkPositionCircle();
    } else if ($("body").hasClass("navbar_animation")) {
      checkPositionNavbarAnim();
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

  $(".mode_slider--js").flickity({
    wrapAround: true,
    adaptiveHeight: false,
    pageDots: false,
    percentPosition: false,
    prevNextButtons: false,
  });

  $(".section__mode .mam_tabs-btn").on("click", function () {
    let index = $(this).index();
    $(".mode_slider--js ").flickity("select", index);
  });

  $(".section__envairoment .mam_tabs-btn").on("click", function () {
    let index = $(this).index();
    $(".section__envairoment .main_tabs_slider_b2_core--js ").flickity(
      "select",
      index
    );
  });

  $(document).on("click", ".aside_burger--js", function (event) {
    $(this).toggleClass("active");
    $(".events_sidebar").toggleClass("active");
  });

  $(".business--slick_slider .item").on("click", function () {
    let index = $(this).index();
    $(".business--slick_slider").flickity("select", index);
  });

  $(".video_block--preview:not(.popup)").click(function () {
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
          $(window).scrollTop() + window.innerHeight > $(this).offset().top &&
          $(window).scrollTop() - window.innerHeight < $(this).offset().top
        ) {
          $(this).removeClass("goanim");
        } else if (
          $(this).hasClass("footan") &&
          $(window).scrollTop() + window.innerHeight >
            $("body").height() + 100 - $("body").height()
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

  $(".video_modal--js").click(function () {
    var video_id = $(this).data("id");
    console.log(video_id);
    event.preventDefault();
    $.fancybox.open({
      src: `#modal_video_${video_id}`,
      type: "inline",
    });
  });

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

  $(".filter__item").niceSelect();

  $(".filter__item .list").mCustomScrollbar({
    mouseWheel: { preventDefault: true },
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

  $(document).on("click", ".lema__sidebar__item", function (e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      var id = $(this).data("id");
      $(".lema__sidebar__item").removeClass("active");
      $(this).addClass("active");

      $(".lema__content")
        .fadeOut(100)
        .promise()
        .done(function () {
          $('.lema__content[data-id="' + id + '"]').fadeIn(100);
          $(" .hear_flickity--js, .hear_flickity_small--js").flickity(
            "destroy"
          );

          $(" .hear_flickity--js").flickity({
            pageDots: false,
            prevNextButtons: false,
            adaptiveHeight: false,
          });

          $("  .hear_flickity_small--js").flickity({
            adaptiveHeight: false,
            pageDots: false,
            prevNextButtons: false,
            contain: true,
            asNavFor: '.lema__content[data-id="' + id + '"] .hear_flickity--js',
          });
        });
    }
  });

  $(document).on("click", ".read_more_careers_btn--js", function (e) {
    e.preventDefault();
    $(".careers_table .row").removeClass("active");
    $(this).parent().parent(".row").addClass("active");
  });

  $(document).on("click", ".careers_table .row .row_content", function () {
    if ($(this).parent(".row").hasClass("active")) {
      $(this).parent(".row").removeClass("active");
    }
  });

  $(document).on("click", ".apply_now_careers_btn", function () {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal5",
      type: "inline",
    });
  });
});

function backPreloader() {
  let bacItems = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

  bacItems.forEach(function (item) {
    $(`.preloader__item[data-id='${item}']`).css("transform", "translateY(0");
  });
}
let check = false;
function preloader() {
  if (check === false) {
    let items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let duration = 0.333;

    items.forEach(function (item) {
      $(`.preloader__item[data-id='${item}']`).css({
        transform: "translateY(-100%)",
        transitionDelay: `${duration}s`,
      });

      duration = duration + 0.333;
    });
    check = true;
  } else {
    let items = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
    let duration = 0.333;

    items.forEach(function (item) {
      $(`.preloader__item[data-id='${item}']`).css({
        transform: "translateY(0%)",
        transitionDelay: `${duration}s`,
      });

      duration = duration + 0.333;
    });
    check = false;
  }
}

$(document).ready(function () {
  preloader();

  setInterval(() => {
    preloader();
  }, 3332);
});

$(".tabs_slider .item").on("click", function () {
  let index = $(this).index();
  $(".tabs_slider").flickity("select", index);
});

$(document).on("click", ".burger--js", function () {
  $(this).removeClass("active");
  $(".big_header").removeClass("active");
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

$(".family__block").hover(function () {
  let familyTarget = $(this).data("target");
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
