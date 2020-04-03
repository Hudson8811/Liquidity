let utmParamQueryString = '';
let utm_source = getRefQueryParam("utm_source");
let utm_medium = getRefQueryParam("utm_medium");
let utm_content = getRefQueryParam("utm_content");
let utm_campaign = getRefQueryParam("utm_campaign");
let utm_term = getRefQueryParam("utm_term");
let header = document.querySelector('header');
let $header = $('header');
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $header.outerHeight();

//slider left and right
let multiItemSlider = (function () {
    return function (selector) {
        let _mainElement = document.querySelector(selector); // основный элемент блока
        if (!_mainElement) {
            return false;
        }

        let _sliderControlsSelector = '.slider__control'; // элементы управления

        let _sliderImagesSelector   = '.slider__item'; // элементы управления

        let _controlClick = function (step) {
            let slideItem = document.querySelector('#slid' + step);
            if (!slideItem) {
                return false;
            }
            slideItem.parentElement.style.transform = 'translateX(' + -slideItem.offsetLeft + 'px)';
        };



        let _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            $(_sliderControlsSelector).on('click', function(e) {
                e.preventDefault();
                _controlClick($(e.currentTarget).data('step'));
            });
            $(_sliderImagesSelector).swipe( {
                //Single swipe handler for left swipes
                swipeRight:function(e) {
                    e.preventDefault();
                    _controlClick($(e.currentTarget).find('.container__points-active').data('step') - 1)
                },
                swipeLeft:function(e) {
                    e.preventDefault();
                    _controlClick($(e.currentTarget).find('.container__points-active').data('step') + 1)
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold:0
            });
        };

        // инициализация
        _setUpListeners();
    }
}());

function scroll() {

    if (!header) {
        return;
    }

    window.pageYOffset > 2 ? header.classList.remove("is-transparent") : header.classList.add("is-transparent");
}

//get parametrs from url
function getRefQueryParam(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function popupToggle(event) {
    event.preventDefault();
    let popup = document.getElementById(event.currentTarget.getAttribute('data-popup'));
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    event.preventDefault();
}

function burgerMenu(selector) {

    let menu = document.querySelector(selector);

    if (!menu) {
        return;
    }

    let links = menu.querySelector('.header__burger-link, .header__burger-button');

    links.addEventListener("click", function (e) {
        e.preventDefault();
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle('burger_menu-active');

        if (menu.classList.contains('burger_menu-active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'visible';
        }
    }
}

//click button - change table
function openTable(evt, tableName) {
    let i, tabcontent, tablinks, parent, grandParent;
    parent = evt.currentTarget.parentNode;
    grandParent = evt.currentTarget.parentNode.parentNode;
    tabcontent = grandParent.querySelectorAll('.container__table');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = parent.querySelectorAll('button');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" button_active", "");
    }
    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += " button_active";
    evt.preventDefault();
}

function hasScrolled() {
    let st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $header.removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $header.removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//remove baclgtound-image block if they are empty
let bckgImages = document.querySelectorAll('.advantages__image');

for (let i = 0; i < bckgImages.length; ++i) {
    if (!bckgImages[i].style.backgroundImage) {
        bckgImages[i].style.display = 'none';
    }
}

if (utm_source) {
    utmParamQueryString += '&utm_source=' + utm_source;
}
if (utm_medium) {
    utmParamQueryString += '&utm_medium=' + utm_medium;
}
if (utm_content) {
    utmParamQueryString += '&utm_content=' + utm_content;
}
if (utm_campaign) {
    utmParamQueryString += '&utm_campaign=' + utm_campaign;
}
if (utm_term) {
    utmParamQueryString += '&utm_term=' + utm_term;
}
if(utmParamQueryString.length > 0) {
    utmParamQueryString = utmParamQueryString.substring(1);
}


if (utmParamQueryString) {

    let navLink = document.querySelectorAll('a');

    for (let i = 0; i < navLink.length; ++i) {
        if (navLink[i].href.indexOf(window.location.hostname) === -1) {

            navLink[i].href.indexOf('?') === -1  ? navLink[i].href += '?' : navLink[i].href += '&';

            navLink[i].href += utmParamQueryString;
        }
    }
}

multiItemSlider('.slider-1');
multiItemSlider('.slider-2');
multiItemSlider('.slider-3');
multiItemSlider('.advantages__slider-1');
multiItemSlider('.advantages__slider-2');
multiItemSlider('.advantages__slider-3');

//burgerMenu('.header__burger-menu');
//document.querySelector(".site-content").style.marginTop = header.offsetHeight + 'px'; //for sticky header

window.onscroll = function() {
    scroll()
};

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

$(document).ready(function () {

    //svg4everybody({});
    marketModule.connect(marketsConfig);
    marketModule.makeTable();

    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width > 1024) {
        $(".dropdown").hover(
            function () {
                $(this).find('.drop').next().stop().slideDown('slow');
            },
            function () {
                $(this).find('.drop').next().stop().slideUp('slow');
            }
        );
    } else {
        let $dropdown = $(".dropdown-mobile");
        $dropdown.on('click', function(){
            if ($(this).next().css('display') === 'none') {
                $('.dropdown__content').hide();
                $(this).next().stop().slideDown('slow');
            } else {
                $('.dropdown__content').hide();
                $(this).next().stop().slideUp('slow');
            }
        });
    }

    //$('.lazy').lazy();

    let popupLinks = document.querySelectorAll('.popup, .popup__container-close_btn');

    for (let i = 0; i < popupLinks.length; ++i) {
        popupLinks[i].addEventListener("click", function(event){
            popupToggle(event);
        });
    }

});


jQuery(document).ready(function(){
    // preload
    setTimeout(function(){
        jQuery(".preloader").fadeOut(300);
    },3000);
    // scroll
    function scroll_fn(){
        var scrl = jQuery(window).scrollTop();
        var prcnt = 100 / (jQuery("html").height() - window.innerHeight) * scrl;
        jQuery(".progress-line").css("width",prcnt+"%");
        if ( jQuery(window).scrollTop() > 0 || window.innerWidth < 1450 ) {
            jQuery("header").addClass("scroll");
        }
        else {
            jQuery("header").removeClass("scroll");
        }
    }

    scroll_fn();
    jQuery(window).on("resize",function(){
        scroll_fn();
    });
    jQuery(window).on("scroll",function(){
        scroll_fn();
        goanim();
    });
    // brgr
    jQuery(document).on("click",".brgr",function(){
        jQuery('header').toggleClass('active');
        jQuery('.overlay').toggleClass('active');
    });
    jQuery(document).on("click","header nav span",function(){
        jQuery(this).parent().toggleClass('active');
    });

    // anchor
    jQuery(document).on("click",".js-anchor > a, a.js-anchor",function (e){
        e.preventDefault();
        var hrf = jQuery(this).attr("href");
        if (!jQuery(hrf).offset()) {
            return;
        }
        var top = jQuery(hrf).offset().top;
        if (window.innerWidth > 768) {
            top -= 77;
        }
        jQuery("html,body").animate({scrollTop: top},300);
    });
    // goanim
    setTimeout(function(){
        goanim();
    },3000);
    function goanim(){
        if (jQuery(".goanim").length > 0) {
            jQuery(".goanim").each(function(){
                if (
                    jQuery(window).scrollTop()+(window.innerHeight/1.5) > jQuery(this).offset().top &&
                    jQuery(window).scrollTop()-(window.innerHeight/3) < jQuery(this).offset().top
                ) {
                    jQuery(this).removeClass("goanim");
                }
                else if (
                    jQuery(this).hasClass("footan") &&
                    jQuery(window).scrollTop()+window.innerHeight > jQuery("body").height()-100
                ) {
                    jQuery(this).removeClass("goanim")
                }
            });
        }
    }
    jQuery(document).on("focus",".mailform label input",function(){
        jQuery(this).parent().addClass('active');
        jQuery(this).parent().removeClass('error');
    });
    jQuery(document).on("blur",".mailform label input",function(){
        if (jQuery(this).val() == "") {
            jQuery(this).parent().removeClass('active');
            jQuery(this).parent().addClass('error');
        }
        else {
            jQuery(this).parent().removeClass("error");
            if (
                jQuery(this).attr("type") == "email" &&
                !isValidEmailAddress( jQuery(this).val() )
            ) {
                jQuery(this).parent().addClass("error");
            }
        }
    });
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
    // submit
    jQuery(document).on("submit",".mailform",function(e){
        e.preventDefault();
        jQuery(this).find("input").each(function(){
            if ( jQuery(this).val() == "" ) {
                jQuery(this).parent().addClass("error");
            }
        });
        if ( jQuery(this).find(".error").length == 0 ){
            var form_data = jQuery(this).serialize();
            jQuery(this).find('.done').addClass("active");
            jQuery.ajax({
                type: "POST",
                url: '/mail.php',
                data: form_data,
                success: function(data){
                    console.log(data);
                }
            });
        }
    });
    jQuery(document).on("click",".mailform .done",function(e){
        jQuery(this).removeClass("active");
        jQuery(this).closest(".mailform").find("label").removeClass("active").find("input").val("");
    });
});