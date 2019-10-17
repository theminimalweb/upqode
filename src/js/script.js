jQuery(document).ready(function($) {

	// Background video init & settings
	$("#bgndVideo").YTPlayer({
		videoURL: 'http://youtu.be/5Tq1vUaXik0',
		containment: 'self',
		autoPlay: true, 
		mute: true, 
		startAt: 0, 
		opacity: 1, 
		showControls: false,
		ratio: '4/3',
		playOnlyIfVisible: true
	});

	// Play/pause video when slide changing
	setTimeout(function() {
		$('.slick-arrow, .slick-dots').click(function() {
			if ( $('.video-slide').hasClass('slick-active') ) {
				$("#bgndVideo").YTPPlay()
			} else {
				$("#bgndVideo").YTPPause()
			}
		});

		$('.homepage-slider-wrap').on('swipe', function(event, slick, direction){
		  	if ( $('.video-slide').hasClass('slick-active') ) {
		  		$("#bgndVideo").YTPPlay()
		  	} else {
		  		$("#bgndVideo").YTPPause()
		  	}
		});
	}, 1000);


	// Slick slider
	$('.homepage-slider-wrap').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// Set active address
	$('.map-address').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Scroll To
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    let target = this.hash;
	    let $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 650, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Add/remove active class on header nav
	$('.main-nav li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Close mobile nav on mobile when user click on link
	$('.main-nav a').click(function() {
		$('body').removeClass('mobile-nav--opened');
		$('.hamburger').removeClass('active');
	});

	// Mobile hamburger animation
	$('.hamburger').click(function() {
		$('body').toggleClass('mobile-nav--opened');
		$(this).toggleClass('active');
	});
	
});


// Add background to header on scroll
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('.site-header').addClass("is-fixed");
    } else {
    	$('.site-header').removeClass("is-fixed");
    }
});


// Simulate click on mobile for autoplay video
function simulateMobileClick() {
    $("#myEl").trigger('click');
    $("#myEl").trigger('touchstart');
}

onResize = function() {
    if ($(window).width() <= 1025) {
    	// Run simulate click function to start video automatically
    	simulateMobileClick();

    	setTimeout(function() {
    		simulateMobileClick();
    	}, 500);

    	setTimeout(function() {
    		simulateMobileClick();
    	}, 1000);

    	setTimeout(function() {
    		simulateMobileClick();
    	}, 1500);

    }
}
$(document).ready(onResize);
$(window).bind('resize', onResize);