var nextslider = function (e) {
    var $currentslide = $('.img-active');
    var nextslide = $currentslide.next();
    if (nextslide.length === 0) {
        nextslide = $('.img-set').first();
    }
    $currentslide.fadeOut(700);
    $currentslide.removeClass('img-active');
    nextslide.fadeIn(700);
    nextslide.addClass('img-active');
    var $currentradio = $('.active-dot');
    var nextradio = $currentradio.next();
    if (nextradio.length === 0) {
        nextradio = $('.dot').first();
    }
    $currentradio.removeClass('active-dot');
    nextradio.addClass('active-dot');
}
var prevslider = function (e) {
    var $currentslide = $('.img-active');
    var prevslide = $currentslide.prev();
    if (prevslide.length === 0) {
        prevslide = $('.img-set').last();
    }
    $currentslide.fadeOut(700);
    $currentslide.removeClass('img-active');
    prevslide.fadeIn(700);
    prevslide.addClass('img-active');
    var $currentradio = $('.active-dot');
    var prevradio = $currentradio.prev();
    if (prevradio.length === 0) {
        prevradio = $('.dot').last();
    }
    $currentradio.removeClass('active-dot');
    prevradio.addClass('active-dot');
}

$(function () {
    $('#frist-poid').on('click', function (e) {
        nextslider();
        e.preventDefault();
    });

    $('#secont-poid').on('click', function (e) {
        prevslider();
        e.preventDefault();
    })

    setInterval(nextslider, 5000);


    var $menu = $('#menu');
    var $navslider = $('#nav-slider');
    $('#nav-bar-change').on('click', function () {
        $menu.toggle(1000);
        count++;
        menuiconprcess();
        $navslider.toggle(1000);

    });

    $('.process-bar').click(function () {

        $('.bar').removeClass('bar-active');

        $(this).children('.bar').addClass('bar-active');

    });

});
var count = 0;

var menuiconprcess = function () {
    if (count % 2 !== 0) {
        $('#nav1').css({
            transition: 'all 0.5s ease-in-out',
            transform: 'translateY(8px)' +
                'rotate(45deg)'
        });
        $('#nav2').hide();
        $('#nav3').css({
            'transform': 'rotate(-45deg)'
        });
    } else {
        $('#nav1').css({
            transition: 'all 0.5s ease-in-out',
            transform: 'translateY(0)' +
                'rotate(0)'
        });
        $('#nav2').show();
        $('#nav3').css({
            transition: 'all 0.5s ease-in-out',
            'transform': 'rotate(0)'

        });
    }
}
