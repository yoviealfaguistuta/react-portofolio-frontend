// (function ($) {
//     "use strict";

    
// }(jQuery));

function test(params) {
    console.log('hai');
}

function sliderOwl() {
    var owlSlider = $(".carousel"),
        autoplay = owlSlider.data('autoplay'),
        autoplaySpeed = owlSlider.data('speed'),
        touchSlide = owlSlider.data('touch-drag'),
        loopSlides = owlSlider.data('loop');
    owlSlider.owlCarousel({
        autoplay: autoplay,
        autoplayTimeout: autoplaySpeed,
        items: 1,
        mouseDrag: touchSlide,
        touchDrag: touchSlide,
        dots: true,
        nav: true,
        loop: loopSlides,
        autoHeight : true,
        navText: ["<img src='../img/slider-left-thin-arrow.png'>", "<img src='../img/slider-right-thin-arrow.png'>"],
        navRewind: true,
        slideBy : 'page'
    });
}
    
function progressBars() {
    function progressBar() {
        $('.progress').each(function () {
            $(this).find('.progress-bar').animate({
                width: $(this).attr('data-percent')
            }, 800);
        });
    }
    if ($('.progress-bars').data('animate-on-scroll') === 'on') {
        $('.progress-bars').waypoint(function () {
            progressBar();
        }, { offset: '100%', triggerOnce: true });
    } else {
        progressBar();
    }
}

function twitterFeedSliderInit() {
    if ($('#twitter-feed-slider').length) {
        $('#twitter-feed-slider ul').addClass('twitter-feed-slider navigation-thin');
         var twitterAutoSpeed = $('#twitter-feed-slider').attr('data-slider-speed');
        $('.twitter-feed-slider').owlCarousel({
            autoplay: true,
            autoplayTimeout: twitterAutoSpeed,
            items: 1,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            loop: true
        });
    }
}

function testimonialSlider() {
    var testimonialsOwl = $('.testimonials'),
        autoplay = testimonialsOwl.data('autoplay'),
        autoplaySpeed = testimonialsOwl.data('speed');
    testimonialsOwl.owlCarousel({
        autoplay : autoplay,
        autoplayTimeout: autoplaySpeed,
        autoplaySpeed: 700,
        loop: true,
        items: 1,
        dots: true,
        dotsSpeed: 400
    });
}

$(window).resize(function (){
    setTimeout(function(){ 
        $('.vossen-portfolio-filters .active').trigger('click');
    }, 600);
});

function vossenHeader() {
    $('.nav li.dropdown>a, .dropdown-submenu>a').on('click', function () {
        $(this).closest('.dropdown').siblings().removeClass('open');
        $(this).closest('.dropdown').toggleClass('open');
        return false;
    });
    $('.nav li a, .btn-scroll').on('click', function () {
        var $anchor = $(this);            
        function scrollToAnchor() {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - offsetVar
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        }
        if ($(window).width() > 992) {
            var offsetVar = '59';
            scrollToAnchor();
        } else {
            var offsetVar = '0';
            scrollToAnchor();
        }
    });
    function navSmall() {
        $(window).scroll(function (){
            if ($(window).scrollTop() > 70) {
            $('nav').addClass("nav-small");
            } else {
                $('nav').removeClass("nav-small");
            }
        });
    }
    if ($('nav').data('animation') === 'hiding') {
        var vosWindow = $(window);
        var navPosition = vosWindow.scrollTop();
        vosWindow.scroll(function() {
            if(vosWindow.scrollTop() > navPosition) {
                $('nav').removeClass('nav-down').addClass('nav-up');
            } else {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
            navPosition = vosWindow.scrollTop();
         });
        navSmall();
    } else {
        navSmall();
    }
    $('.scroll-top').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 2000, 'easeInOutExpo');
        return false;
    });
    function elementsAnchor() {
        var hash = window.location.hash;
        if (hash != '') {
            setTimeout(function() {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - 59
                }, 1000, 'easeInOutExpo');
                history.pushState('', document.title, window.location.pathname);
            }, 500);
        }  
    } elementsAnchor();
}

function heroContentSliderFade() {
    $('.hero-content-slider').css({ 'opacity': '1' })
}

function lightbox() {
    $('.lightbox').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img src="../img/slider-left-thin-arrow.png"></button>',
        },
        mainClass: 'mfp-zoom-in',
        removalDelay: 500, //delay removal to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            }
        },     
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        midClick: true
    });
}

function teamSlider() {
    $(".team-slider").owlCarousel({
        autoplay : false,
        items: 3,
        dots: true,
        responsiveRefreshRate: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
}
// teamSlider()
// setTimeout(() => {
//     // console.clear();
// }, 2000);