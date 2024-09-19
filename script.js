$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.tips .box').show(400);
        }
        else{
            $('.tips .box').not('.' + filter).hide(200);
            $('.tips .box').filter('.' + filter).show(400);
        }

    });

});