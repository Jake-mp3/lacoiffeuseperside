$(document).ready(function () {

    // NAVIGATION BEHAVIOUR 

    // let topDis = 0;

    // let topPrev = 0;

    // let goingUp = false;

    // let navDis = 0;

    // let unlockNav = true;

    // let navReset = false;

    // $(window).scroll(function() {
    //     topDis = $(document).scrollTop();

    //     if (topDis < topPrev) {
    //         topPrev = topDis;
            
    //         if (goingUp == false && navReset == true) {
    //             goingUp = true;
    //             if (navReset == true) {
    //                 $("nav").css('top', topDis - $("nav").height());
    //             }
                
    //         }
    //     }

    //     else {
    //         topPrev = topDis;
    //         goingUp = false;
            
    //     }

    //     navDis = $("nav").offset().top;
    //     navLock = navDis - topDis;

    //     if (navLock > 0 && goingUp == true && unlockNav == true) {
    //         $("nav").css('position', 'fixed');
    //         $("nav").css('top', '0');
    //         unlockNav = false;
    //     }

    //     if (unlockNav == false && goingUp == false) {
    //         unlockNav = true;
    //         $("nav").css('position', 'absolute');
    //         $("nav").css('top', topDis);
    //     }

    //     if($(document).scrollTop() - $("nav").offset().top < 88 && $(document).scrollTop() - $("nav").offset().top > 0) {
    //         navReset = false;
    //         goingUp = true;
    //     }

    //     else {
    //         navReset = true;
    //     }

    //     let headfade = 100 - (topDis / 6.2) + 20;

    //     $(".header-img").css('opacity', headfade + '%');
    // })

    let navOpen = false;

    $('.hamburger').on('click', function() {
        if (navOpen == false) {
            $('.small-nav').css('top', '88px');
            $('.line-1').css('transform', 'translateY(-50%) rotate(45deg)');
            $('.line-1').css('top', '50%');
            $('.line-3').css('transform', 'translateY(50%) rotate(-45deg)');
            $('.line-3').css('bottom', '50%');
            $('.line-2').css('opacity', '0');
            navOpen = true;
        }

        else {
            $('.small-nav').css('top', '-40vh');
            $('.line-1').css('transform', 'translateY(0) rotate(0deg)');
            $('.line-1').css('top', '0');
            $('.line-3').css('transform', 'translateY(0) rotate(0deg)');
            $('.line-3').css('bottom', '0');
            $('.line-2').css('opacity', '1');
            navOpen = false;
        }
    })
    
    // IMAGE GALLERY

    let imgNum = 1;
    let imgCount = 10;

    const myInterval = setInterval(function() {
        imgNum++;
        // console.log(imgNum);
        if (imgNum > imgCount) {
            imgNum = 1;
        }

        else if (imgNum < 1) {
            imgNum = imgCount;
        }

        imgChange();
    }, 4000);

    $(".dot-" + imgNum).addClass("dot-active");

    function imgChange() {
        $(".slide-change").attr('src','./images/slide-' + imgNum + ".jpg");
        $(".dot").removeClass("dot-active");
        $(".dot-" + imgNum).addClass("dot-active");
    }

    $(".arrow-right").click(function() {
        imgNum++;
        if (imgNum > imgCount) {
            imgNum = 1;
        }

        else if (imgNum < 1) {
            imgNum = imgCount;
        }

        imgChange();
        slideStop();
    })

    $(".arrow-left").click(function() {
        imgNum--;
        if (imgNum > imgCount) {
            imgNum = 1;
        }

        else if (imgNum < 1) {
            imgNum = imgCount;
        }
        
        imgChange();
        slideStop();
    })

    function slideStop() {
        clearInterval(myInterval);
    }

    $('.dot').on('click', function() {
        const imgDot = ($(this).attr('class')).split('-');
        imgNum = imgDot[1];
        imgChange();
        slideStop();
    })

    // PAYMENT HOVER

    $(".pay1").hover(function() {
        $(".paycard").show();
        $(".paycard").css('top', $(this).offset().top - 70);
        $(".paycard").css('left', $(this).offset().left);
    }, function() {
        $(".paycard").hide();
    })

    $(".pay2").hover(function() {
        $(".paycash").show();
        $(".paycash").css('top', $(this).offset().top - 70);
        $(".paycash").css('left', $(this).offset().left);
    }, function() {
        $(".paycash").hide();
    })

    $(".pay3").hover(function() {
        $(".paygoogle").show();
        $(".paygoogle").css('top', $(this).offset().top - 70);
        $(".paygoogle").css('left', $(this).offset().left);
    }, function() {
        $(".paygoogle").hide();
    })

    $(".pay4").hover(function() {
        $(".payapple").show();
        $(".payapple").css('top', $(this).offset().top - 70);
        $(".payapple").css('left', $(this).offset().left);
    }, function() {
        $(".payapple").hide();
    })

    $('.contact-button').on('click', function() {
        $('.flash').addClass('flash-active');
        setTimeout(function() {
            $('.flash').removeClass('flash-active');
        }, 2000)
    })
})