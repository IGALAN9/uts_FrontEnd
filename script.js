$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

            $('.tips .box').not('.' + filter).hide(100);
            $('.tips .box').filter('.' + filter).show(100);

    });

    $('.buttons[data-filter="sport"]').trigger('click');
    
    $('.link[href="#resttime"]').click(function(event) {
        event.preventDefault(); 
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

});
