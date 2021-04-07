window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(function() {
        var toolTop = $(" .search-wrap").offset().top;
        $(window).scroll(function() {
            if ($(document).scrollTop() >= toolTop) {
                $(".search-wrap1").fadeIn();
            } else {
                $(".search-wrap1").fadeOut();
            }
        })
    })
})