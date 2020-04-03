jQuery(function($){

    if ($('.post-type-archive-news').length > 0) {
    let canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
        bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts

        $(window).scroll(function () {
            let data = {
                'action': 'loadmore',
                'query': b2bx_loadmore_params.posts,
                'page': b2bx_loadmore_params.current_page
            };

            if ($(document).scrollTop() > ($(document).height() - bottomOffset) && canBeLoaded === true) {
                $('.preloader').fadeIn('slow');
                $.ajax({
                    url: b2bx_loadmore_params.ajaxurl,
                    data: data,
                    type: 'POST',
                    beforeSend: function (xhr) {
                        canBeLoaded = false;
                    },
                    success: function (data) {
                        $('.preloader').fadeOut('slow');
                        if (data) {
                            $('body').find('.news__item:last-of-type').after(data); // where to insert posts
                            canBeLoaded = true; // the ajax is completed, now we can run it again
                            b2bx_loadmore_params.current_page++;
                        }
                    }
                });
            }
        });
    }
});