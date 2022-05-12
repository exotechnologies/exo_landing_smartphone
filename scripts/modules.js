
//========== REVOLUTION SLIDER ========

var tpj;
var revapi1;
jQuery(document).ready(function() {

    if($("#rev_slider_11_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1_1");
    } else {
        revapi1 = $("#rev_slider_11_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//local.wordpress.com:8888/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:15000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:false,
                    hide_onleave:false,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    }
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1854,
            gridheight:1152,
            lazyType:"none",
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    $('a[href="#return-to-top"]').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    //========== BX SLIDER ========
    $('#slider1').bxSlider({
        minSlides: 1,
        slideWidth: 680,
        slideMargin: 10,
        infiniteLoop: false,
        hideControlOnEnd: true
    });

    $('#slider2').bxSlider({
        minSlides: 1,
        slideWidth: 840,
        slideMargin: 10,
        infiniteLoop: false,
        hideControlOnEnd: true
    });
});
