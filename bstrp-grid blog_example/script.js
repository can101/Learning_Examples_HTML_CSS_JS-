$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: true,
        animateIn: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1

            },
            800: {
                items: 2
            },
            1200: {
                items: 3


            }
        }
    })




    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $("#backtotop").fadeIn();

        } else {
            $("#backtotop").fadeOut();
        }

    });
    $("#backtotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
        return false;
    });




});