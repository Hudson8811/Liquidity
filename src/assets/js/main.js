$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10)
                $('.header').addClass('header--slicky');
            else
                $('.header').removeClass('header--slicky');
        });
    });
});