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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let child = Math.floor(Math.random() * (max - min + 1)) + min;

  if (
    !$(".we_are_a_company__item:nth-child(" + child + ")").hasClass("active")
  ) {
    $(".we_are_a_company__item").removeClass("active");
    $(".we_are_a_company__item:nth-child(" + child + ")").addClass("active");
  }
}

$(document).ready(function () {
  setInterval(() => {
    getRandomIntInclusive(1, 8);
  }, 1000);

  $(document).on("change", "#file_input1", function () {
    $("#ap_images_wrapper1").addClass("active");
    $("#file_input_wrapper2").addClass("active");
    $("#file_input_wrapper1").addClass("disabled");
  });

  $(document).on("change", "#file_input2", function () {
    $("#ap_images_wrapper2").addClass("active");
    $(".wrapper_more_file").addClass("disabled");
  });

  $(document).on("click", "#ap_images_wrapper1 .remove_file", function () {
    $(this).parent(".ap_images_wrapper").removeClass("active");
    $("#file_input_wrapper1").removeClass("disabled");
    $("#file_input_wrapper2").removeClass("active");
  });

  $(document).on("click", "#ap_images_wrapper2 .remove_file", function () {
    $(this).parent(".ap_images_wrapper").removeClass("active");
    $("#file_input_wrapper1").addClass("disabled");
    $("#file_input_wrapper2").addClass("active");
    $(".wrapper_more_file").removeClass("disabled");
  });

  $(document).on("click", ".show_on_map_btn", function (e) {
    e.preventDefault();
    var mapId = $(this).data("id");
    $(".map__wrapper .map").fadeOut();
    $(".map__btn_block").addClass("active");
    $(".map__btn_block--js").removeClass("active");
    $('.map__btn_block--js[data-id="' + mapId + '"]').addClass("active");
    $('.map__wrapper .map[data-id="' + mapId + '"]').fadeIn();

    $("html, body").animate(
      {
        scrollTop: $(".map__wrapper").offset().top - 320,
      },
      700
    );
  });

  $(document).on("click", ".map__btn_block--js", function (e) {
    e.preventDefault();
    var mapId = $(this).data("id");
    $(".map__wrapper .map").fadeOut();
    $(".map__btn_block").addClass("active");
    $(".map__btn_block--js").removeClass("active");
    $('.map__btn_block--js[data-id="' + mapId + '"]').addClass("active");
    $('.map__wrapper .map[data-id="' + mapId + '"]').fadeIn();
  });

  $(".fancybox-thumb").fancybox({
    prevEffect: "none",
    nextEffect: "none",

    thumbs: {
      autoStart: true,
    },
  });

  $(
    ".lema_section .hear_flickity--js, .includes_team .hear_flickity--js"
  ).flickity({
    pageDots: false,
    prevNextButtons: false,
    adaptiveHeight: false,
    asNavFor: " .hear_flickity_small--js",
  });

  $(
    ".lema_section .hear_flickity_small--js, .includes_team .hear_flickity_small--js"
  ).flickity({
    adaptiveHeight: false,
    pageDots: false,
    prevNextButtons: false,
    contain: true,
    autoPlay: true,
  });

  $(".lema_section .hear_flickity_small--js .item").hover(function () {
    let index = $(this).index();
    $(".lema_section .hear_flickity--js").flickity("select", index);
    $(".lema_section .hear_flickity_small--js").flickity("select", index);
  });

  if ($("body").hasClass("bigAnimation")) {
    var elem = document.getElementById("animation_brand");
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
    const element1 = $('.ab__text__item[data-id="1"]');
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

    setProgress(0);
    startAnimTriger = true;
    let animationFirstStepTrigger = false;
    let animationLastStepTrigger = false;
    let logoAnimTrigger = false;
    let fullAnimTrigger = false;
    let logo1Trigger = false;
    let logo2Trigger = false;
    let logo3Trigger = false;
    let logo4Trigger = false;
    let logo5Trigger = false;
    let logo6Trigger = false;
    let logo7Trigger = false;
    let logo8Trigger = false;
    let logo9Trigger = false;
    let warking = true;

    $(document).on("click", ".reanim_btn", function () {
      $(".ab__content").css("opacity", "0");
      warking = true;
      startAnimTriger = true;
      bacFirstTrigger = false;
      animationFirstStepTrigger = false;
      animationLastStepTrigger = false;
      logoAnimTrigger = false;
      fullAnimTrigger = false;
      logo1Trigger = false;
      logo2Trigger = false;
      logo3Trigger = false;
      logo4Trigger = false;
      logo5Trigger = false;
      logo6Trigger = false;
      logo7Trigger = false;
      logo8Trigger = false;
      logo9Trigger = false;
      $(".ab__title_block").removeClass("active");
      $(".ab__text").removeClass("disabled");
      $(".ab__circle").removeClass("disabled");
      activated(".ab__text__item");
      $(".ab__logo")
        .removeClass("lastStep-anim logoAnim")
        .removeClass("disabled")
        .removeClass("new_disabled");
      $(".ab__content").removeClass("height800-anim");
      $(".ab__core").removeClass("lastStepOpacity0");
      $(".ab__core__item").removeClass("p0-anim");
      $(".ab__core__icon").removeClass("active disabled opacity1-anim");
      $(".animation_brand .section__title").removeClass(
        "disabled height0-anim"
      );
      $(".animation_brand .new_logo")
        .removeClass("height0-anim")
        .removeClass("disabled");

      $(".ab__content").css({
        transform: "translateY(10%)",
      });

      setTimeout(() => {
        $(".ab__content").css({
          opacity: 1,
          transform: "translateY(0%)",
        });
      }, 500);
    });

    $(document).on("click", ".skip__anim_btn--js", function () {
      setTimeout(() => {
        $(".ab__logo").attr("style", "");
      }, 500);

      logo1Trigger = false;
      logo2Trigger = false;
      logo3Trigger = false;
      logo4Trigger = false;
      logo5Trigger = false;
      logo6Trigger = false;
      logo7Trigger = false;
      logo8Trigger = false;
      logo9Trigger = false;
      discription1.removeClass("active");
      discription2.removeClass("active");
      discription3.removeClass("active");
      discription4.removeClass("active");
      discription5.removeClass("active");
      discription6.removeClass("active");
      discription7.removeClass("active");
      discription8.removeClass("active");
      discription9.removeClass("active");
      discription1.removeClass("active");
      discription2.removeClass("active");
      discription3.removeClass("active");
      discription4.removeClass("active");
      discription5.removeClass("active");
      discription6.removeClass("active");
      discription7.removeClass("active");
      discription8.removeClass("active");
      discription9.removeClass("active");
      logo1.addClass("disabled active opacity1-anim");
      logo2.addClass("disabled active opacity1-anim");
      logo3.addClass("disabled active opacity1-anim ");
      logo4.addClass("disabled active opacity1-anim");
      logo5.addClass("disabled active opacity1-anim ");
      logo6.addClass("disabled active opacity1-anim");
      logo7.addClass("disabled active opacity1-anim");
      logo8.addClass("disabled active opacity1-anim");
      logo9.addClass("active opacity1-anim");
      $(".ab__logo").css("transition", "none");

      $(".ab__logo svg").removeClass("active");
      $(".ab__logo")
        .addClass("new_disabled lastStep-anim opacity0-anim")
        .removeClass("active disabled");
      $(".ab__core__item").addClass("p0-anim");
      $(".animation_brand .section__title")
        .addClass("height0-anim")
        .addClass("disabled");
      $(".ab__content").addClass("height800-anim");
      setProgress(0);
      $(".skip__anim_btn").removeClass("active");
      animationLastStepTrigger = true;
      animationFirstStepTrigger = false;
      $(".ab__core__text").css("display", "none");
      setTimeout(() => {
        $(".ab__core__text").attr("style", "");
      }, 500);
    });

    function onWheel(e) {
      e = e || window.event;

      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      let info = document.getElementById("info");
      let value = -info.innerHTML + delta;
      info.innerHTML = -value;

      if (warking) {
        if (startAnimTriger) {
          startAnimTriger = false;
          $("html, body").animate(
            {
              scrollTop:
                $("#animationTrigger").offset().top - window.innerHeight / 2,
            },
            700
          );
          $(".ab__logo").removeClass("disabled");

          setTimeout(() => {
            activated(element1);
          }, 500);

          setTimeout(() => {
            $(".ab__circle").addClass("active");
            setProgress(100);
          }, 800);

          setTimeout(() => {
            activated(element2);
          }, 1000);

          setTimeout(() => {
            activated(element3);
          }, 1500);

          setTimeout(() => {
            activated(element4);
          }, 2000);

          setTimeout(() => {
            activated(element5);
          }, 2500);

          setTimeout(() => {
            activated(element6);

            $(".ab__logo").addClass("active");
          }, 3000);

          setTimeout(() => {
            animationFirstStepTrigger = true;
          }, 3500);
        } else if (animationFirstStepTrigger) {
          setTimeout(() => {}, 700);

          setTimeout(() => {
            $(".ab__logo svg").addClass("active");
            $(".ab__text").addClass("disabled");
            $(".ab__logo").addClass("new_disabled");
            $(".ab__circle").addClass("disabled");
          }, 1400);

          setTimeout(() => {
            $(".skip__anim_btn--js").addClass("active");
            logo1.addClass("active");
            discription1.addClass("active");
          }, 2000);

          setTimeout(() => {
            logo1Trigger = true;
            bacFirstTrigger = true;
          }, 3000);
          animationFirstStepTrigger = false;
        }

        if (logo1Trigger) {
          $(".ab__logo").addClass("disabled");
          setTimeout(() => {
            logo1.addClass("disabled");
            discription1.removeClass("active");
            logo2.addClass("active");

            discription2.addClass("active");
          }, 0);

          setTimeout(() => {
            logo2Trigger = true;
          }, 1000);
          logo1Trigger = false;
        } else if (logo2Trigger) {
          setTimeout(() => {
            logo2.addClass("disabled");
            discription2.removeClass("active");
            logo3.addClass("active");
            discription3.addClass("active");
          }, 0);

          setTimeout(() => {
            logo3Trigger = true;
          }, 1000);
          logo2Trigger = false;
        } else if (logo3Trigger) {
          setProgress(0);
          setTimeout(() => {
            logo3.addClass("disabled");
            discription3.removeClass("active");
            logo4.addClass("active");
            discription4.addClass("active");
            $(".ab__core__item").addClass("p0-anim");

            $(".animation_brand .new_logo")
              .addClass("height0-anim")
              .addClass("disabled");
            $(".ab__content").addClass("height800-anim");
          }, 0);

          setTimeout(() => {
            logo4Trigger = true;
          }, 1000);

          logo3Trigger = false;
        } else if (logo4Trigger) {
          setTimeout(() => {
            logo4.addClass("disabled");
            discription4.removeClass("active");
            logo5.addClass("active");
            discription5.addClass("active");
          }, 0);

          setTimeout(() => {
            logo5Trigger = true;
          }, 1000);
          logo4Trigger = false;
        } else if (logo5Trigger) {
          setTimeout(() => {
            logo5.addClass("disabled");
            discription5.removeClass("active");
            logo6.addClass("active");
            discription6.addClass("active");
          }, 0);

          setTimeout(() => {
            logo6Trigger = true;
          }, 1000);
          logo5Trigger = false;
        } else if (logo6Trigger) {
          setTimeout(() => {
            logo6.addClass("disabled");
            discription6.removeClass("active");
            logo7.addClass("active");
            discription7.addClass("active");
          }, 0);

          setTimeout(() => {
            logo7Trigger = true;
          }, 1000);
          logo6Trigger = false;
        } else if (logo7Trigger) {
          setTimeout(() => {
            logo7.addClass("disabled");
            discription7.removeClass("active");
            logo8.addClass("active");
            discription8.addClass("active");
          }, 0);

          setTimeout(() => {
            logo8Trigger = true;
          }, 1000);
          logo7Trigger = false;
        } else if (logo8Trigger) {
          setTimeout(() => {
            logo8.addClass("disabled");
            discription8.removeClass("active");
            logo9.addClass("active");
            discription9.addClass("active");
          }, 0);
          setTimeout(() => {
            logo9Trigger = true;
          }, 1000);
          $(".ab__logo")
            .addClass("lastStep-anim")
            .removeClass("disabled")
            .removeClass("active")
            .addClass("opacity0-anim");

          $(".ab__logo svg").removeClass("active");

          logo8Trigger = false;
        } else if (logo9Trigger) {
          setTimeout(() => {
            $(".animation_brand .section__title")
              .addClass("height0-anim")
              .addClass("disabled");
            $(".skip__anim_btn").removeClass("active");
            $(".ab__core__icon").addClass("opacity1-anim");
            discription9.removeClass("active");

            animationLastStepTrigger = true;
          }, 0);
          logo9Trigger = false;
        } else if (animationLastStepTrigger) {
          setTimeout(() => {
            $(".ab__logo").removeClass("opacity0-anim");
            $(".ab__core").addClass("lastStepOpacity0");
          }, 700);

          setTimeout(() => {
            $(".ab__logo").addClass("logoAnim");
            $(".skip__anim_btn").removeClass("active");
          }, 1000);

          setTimeout(() => {
            $(".ab__title_block").addClass("active");
          }, 1200);

          setTimeout(() => {
            fullAnimTrigger = true;
          }, 1400);

          setTimeout(() => {
            logoAnimTrigger = true;
          }, 1400);

          animationLastStepTrigger = false;
        }
        if (!fullAnimTrigger) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        }
      }
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
  let checkNewSpeedBlock1Trigger = false;
  let checkNewSpeedBlock2Trigger = false;

  function checkNewSpeedBlock1() {
    if (
      checkContent("#grove1 .pac_ad__trigeer") === true &&
      !checkNewSpeedBlock1Trigger
    ) {
      $("#grove1 .new_speed").addClass("active");
      checkNewSpeedBlock1Trigger = true;
    } else if (
      checkContent("#grove2 .pac_ad__trigeer") === true &&
      !checkNewSpeedBlock2Trigger
    ) {
      $("#grove2 .new_speed").addClass("active");
      checkNewSpeedBlock2Trigger = true;
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

  let chechNubmerTrigger = false;

  function checkNumber() {
    if (checkContent(".ab_resault .number__trigger") && !chechNubmerTrigger) {
      outNum(203, 3000, "#number-1");
      outNum(128, 2600, "#number-2");
      outNum(18, 2400, "#number-3");
      outNum(13, 2000, "#number-4");
      outNum(7, 1500, "#number-5");
      outNum(4, 1500, "#number-6");

      chechNubmerTrigger = true;
    }
  }
  let chechTextTrigger = false;

  function checkText() {
    if (checkContent(".mission__overlay") && !chechTextTrigger) {
      const mission = new Typed("#mission", {
        strings: [
          "<span> We don't tell you how to build your business.</span> <span class='db'></span> <span>Our mission is to work with you. </span>",
        ],
        typeSpeed: 20,
        backSpeed: 10,
        backDelay: 1000,
        startDelay: 1000,
        loop: false,
        showCursor: false,
        contentType: "html",
      });
      chechTextTrigger = true;
    }
  }

  function checkEngineers() {
    if (checkContent(".engineers__trigger") === true) {
      for (let index = 1; index < 71; index++) {
        $(`.images_catalog__item:nth-child(${index})`).css({
          transitionDelay: `${index / 30}s`,
        });
      }
      $(".images_catalog").addClass("active");
    }
  }

  function check() {
    if ($("body").hasClass("b2_core")) {
      checkPosition();
    } else if ($("body").hasClass("circle_anim")) {
      checkPositionCircle();
    } else if ($("body").hasClass("navbar_animation")) {
      checkPositionNavbarAnim();
    } else if ($("body").hasClass("bigAnimation")) {
      checkText();
      checkNumber();
    } else if ($("body").hasClass("team")) {
      checkEngineers();
    } else if ($("body").hasClass("forex_tk")) {
      checkNewSpeedBlock1();
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
  $(".feat_tk__slider1").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".feat_tk__slider_wrapper1 .feat_tk__arrow__prev"),
    nextArrow: $(".feat_tk__slider_wrapper1 .feat_tk__arrow__next"),
  });

  $(".feat_tk__slider2").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".feat_tk__slider_wrapper2 .feat_tk__arrow__prev"),
    nextArrow: $(".feat_tk__slider_wrapper2 .feat_tk__arrow__next"),
  });

  $(".feat_tk__slider3").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".feat_tk__slider_wrapper3 .feat_tk__arrow__prev"),
    nextArrow: $(".feat_tk__slider_wrapper3 .feat_tk__arrow__next"),
  });

  $(".feat_tk__slider4").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".feat_tk__slider_wrapper4 .feat_tk__arrow__prev"),
    nextArrow: $(".feat_tk__slider_wrapper4 .feat_tk__arrow__next"),
  });

  $(document).on("click", ".feat_tk__acard__title ", function () {
    if (!$(this).hasClass("active")) {
      $(".feat_tk__acard__title").removeClass("active");
      $(this).addClass("active");
      $(".feat_tk__acard__content").slideUp();
      $(this).siblings(".feat_tk__acard__content").slideDown();
    } else {
      $(this).removeClass("active");
      $(this).siblings(".feat_tk__acard__content").slideUp();
    }
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

  $(".js-action-btn").click(function (e) {
    modal();

    e.preventDefault();
    $.fancybox.open({
      src: "#modal",
      type: "inline",
      autoFocus: false,
    });
  });
  //

  $(".video_modal--js").click(function (e) {
    var video_id = $(this).data("id");
    console.log(video_id);
    e.preventDefault();
    $.fancybox.open({
      src: `#modal_video_${video_id}`,
      type: "inline",
      autoFocus: false,
    });
  });

  $(".js-modal2-btn").click(function (e) {
    e.preventDefault();

    $.fancybox.open({
      src: "#modal2",
      type: "inline",
      autoFocus: false,
    });
  });

  function modal3() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal3",
      type: "inline",
      autoFocus: false,
    });
  }

  function modal3Close() {
    event.preventDefault();
    $.fancybox.close({
      src: "#modal3",
      type: "inline",
      autoFocus: false,
    });
  }

  function modal4() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal4",
      type: "inline",
      autoFocus: false,
    });
  }

  $('.new_form__sabmit[type="submit"]').click(function (e) {
    e.preventDefault();

    $.fancybox.close({
      src: "#modal2",
      type: "inline",
      autoFocus: false,
    });
    $.fancybox.open({
      src: "#modal4",
      type: "inline",
      autoFocus: false,
    });
  });

  $(document).on("click", ".modal_new_form_1--js", function (e) {
    e.preventDefault();

    $.fancybox.open({
      src: "#modalFormNew",
      type: "inline",
      autoFocus: false,
    });
  });

  $(document).on("click", ".modal_new_form_2--js", function (e) {
    e.preventDefault();

    $.fancybox.open({
      src: "#modalFormNew2",
      type: "inline",
      autoFocus: false,
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
      const id = $(this).data("id");
      $(".lema__sidebar__item").removeClass("active").addClass("disabled");
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
            asNavFor:
              '.lema__content[data-id="' + id + '"] .hear_flickity_small--js',
          });

          $("  .hear_flickity_small--js").flickity({
            adaptiveHeight: false,
            pageDots: false,
            prevNextButtons: false,
            contain: true,
            autoPlay: true,
          });
          $(".lema__sidebar__item").removeClass("disabled");
        });
    }
  });

  $(document).on("click", ".careers_table .row", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("active")) {
      $(".careers_table .row").removeClass("active");
      $(".careers_table .row .row_content").removeClass("active").slideUp();
      $(this).addClass("active");
      $(this).children(".row_content").slideDown();
    } else {
      $(this).removeClass("active");
      $(this).children(".row_content").slideUp();
    }
  });

  // $(document).on("click", ".careers_table .row .row_content", function () {
  //   if ($(this).parent(".row").hasClass("active")) {
  //     $(this).parent(".row").removeClass("active");
  //     $(this).slideUp();
  //   }
  // });

  // $(document).on("click", " .ct--js", function () {
  //   if ($(this).parent().parent(".row").hasClass("active")) {
  //     $(this).parent().parent(".row").removeClass("active");
  //     $(this).parent(".col").siblings(".row_content").slideUp();
  //   } else {
  //     $(this).parent().parent(".row").addClass("active");
  //     $(this).parent(".col").siblings(".row_content").slideDown();
  //   }
  // });

  $(document).on("click", ".apply_now_careers_btn", function () {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal5",
      type: "inline",
      autoFocus: false,
    });
  });
});

let check = false;
function preloader() {
  if (check === false) {
    let items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let duration = 0.333;

    items.forEach(function (item) {
      $(`#preloader1 .preloader__item[data-id='${item}']`).css({
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
      $(`#preloader1 .preloader__item[data-id='${item}']`).css({
        transform: "translateY(0%)",
        transitionDelay: `${duration}s`,
      });

      duration = duration + 0.333;
    });
    check = false;
  }
}

let check2 = false;
function preloader2() {
  if (!check2) {
    let items2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let duration2 = 0.1;

    items2.forEach(function (item) {
      $(`#preloader2 .preloader__item[data-id='${item}']`).css({
        transform: "translateY(-100%)",
        transition: `0.3s`,
        transitionDelay: `${duration2}s`,
      });

      duration2 = duration2 + 0.1;
    });
    check2 = true;
  } else {
    let items2 = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
    let duration2 = 0.1;

    items2.forEach(function (item) {
      $(`#preloader2 .preloader__item[data-id='${item}']`).css({
        transform: "translateY(0%)",
        transition: `0.3s`,
        transitionDelay: `${duration2}s`,
      });

      duration2 = duration2 + 0.1;
    });
    check2 = false;
  }
}

let check3 = false;

function startPreloader3(item, t, o) {
  $(item).css({
    transitionDelay: `${t}s`,
    opacity: `${o}`,
  });
}

function preloader3() {
  if (!check3) {
    startPreloader3('#preloader3 .preloader__item[data-id="7"]', 0.3, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="4"]', 0.4, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="8"]', 0.4, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="1"]', 0.5, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="5"]', 0.5, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="9"]', 0.5, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="2"]', 0.6, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="6"]', 0.6, 1);
    startPreloader3('#preloader3 .preloader__item[data-id="3"]', 0.7, 1);

    check3 = true;
  } else {
    startPreloader3('#preloader3 .preloader__item[data-id="3"]', 0.3, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="6"]', 0.4, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="2"]', 0.4, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="9"]', 0.5, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="5"]', 0.5, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="1"]', 0.5, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="8"]', 0.6, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="4"]', 0.6, 0);
    startPreloader3('#preloader3 .preloader__item[data-id="7"]', 0.7, 0);

    check3 = false;
  }
}

$(document).ready(function () {
  preloader();

  preloader2();

  preloader3();

  setInterval(() => {
    preloader();
  }, 3332);

  setInterval(() => {
    preloader2();
  }, 2000);

  setInterval(() => {
    preloader3();
  }, 1000);
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

$(".includes_team .hear_flickity--js").flickity({
  adaptiveHeight: false,
  pageDots: false,
  prevNextButtons: false,
  contain: true,
  asNavFor: ".hear_flickity_small--js",
});

$(".includes_team .hear_flickity_small--js").flickity({
  adaptiveHeight: false,
  pageDots: false,
  prevNextButtons: false,
  contain: true,
  autoPlay: true,
});

$(".includes_team .hear_flickity_small--js .item").hover(function () {
  let index = $(this).index();
  $(".includes_team .hear_flickity--js").flickity("select", index);
  $(".includes_team .hear_flickity_small--js").flickity("select", index);
});

$(".careers_wrapper .hear_flickity--js").flickity({
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: false,
  asNavFor: ".careers_wrapper  .hear_flickity_small--js",
});

$(".careers_wrapper .hear_flickity_small--js").flickity({
  adaptiveHeight: false,
  pageDots: false,
  prevNextButtons: false,
  contain: true,

  autoPlay: true,
});

$(document).on("click", ".towns li:not(:nth-child(1))", function () {
  let townTarget = $(this).data("id");

  if (!$(this).hasClass("active")) {
    $(".towns li").removeClass("active");
    $(this).addClass("active");
    $(".towns li").addClass("disabled");

    $(".careers_wrapper")
      .fadeOut()
      .promise()
      .done(function () {
        $(" .hear_flickity--js, .hear_flickity_small--js").flickity("destroy");
        $('.careers_wrapper[data-id="' + townTarget + '"]').fadeIn();
        $(
          '.careers_wrapper[data-id="' + townTarget + '"] .hear_flickity--js'
        ).flickity({
          pageDots: false,
          prevNextButtons: false,
          adaptiveHeight: false,
          asNavFor:
            '.careers_wrapper[data-id="' +
            townTarget +
            '"] .hear_flickity_small--js',
        });

        $(
          '.careers_wrapper[data-id="' +
            townTarget +
            '"] .hear_flickity_small--js'
        ).flickity({
          adaptiveHeight: false,
          pageDots: false,
          prevNextButtons: false,
          contain: true,
          autoPlay: true,
        });

        $(".towns li").removeClass("disabled");
      });
  }
});

$(".careers_wrapper .hear_flickity_small--js .item").hover(function () {
  let index = $(this).index();
  $(".careers_wrapper .hear_flickity--js").flickity("select", index);
  $(".careers_wrapper .hear_flickity_small--js").flickity("select", index);
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

if ($("body").hasClass("bigAnimation")) {
} else {
  const machine = new Typed("#machine", {
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
}
