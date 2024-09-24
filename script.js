$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

            $('.tips .box').not('.' + filter).hide(100);
            $('.tips .box').filter('.' + filter).show(100);

    });

    $('.buttons[data-filter="sport"]').trigger('click');

});


$(document).ready(function() {
    var swiper = new Swiper('.review-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });
});
