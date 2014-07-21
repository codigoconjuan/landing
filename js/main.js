$(document).ready(function() {

    var nav = $(".navbar-fixed-top");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 300) {
            nav.removeClass('normal').addClass("efecto");
        } else {
            nav.removeClass("efecto").addClass('normal');
        }
    });

	$('section#app .anima1').waypoint(function() {
		$('section#app .anima1').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#app .anima2').waypoint(function() {
		$('section#app .anima2').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#app .anima3').waypoint(function() {
		$('section#app .anima3').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#caracteristicas #appImagen').waypoint(function() {
		$(this).addClass('animated fadeInDownBig');
	}, {
		offset: '60%'
	});

	$('section#caracteristicas .anima1').waypoint(function() {
		$(this).addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});

	$('section#caracteristicas .anima2').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#pantallas .anima1').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});


	$('section#pantallas .anima2').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});


	$('section#pantallas .anima3').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});


	$('section#pantallas a').on('click',function(e) {
	    $('#modal img').attr('src', $(this).attr('data-img-url')); 
	});

	$('section#descargar .anima1').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
	$('section#descargar .anima2').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
	$('section#descargar .anima3').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
});


smoothScroll.init({
	speed: 1000,
	easing: 'easeInOutCubic',
	offset: 0,
	updateURL: false,
	callbackBefore: function ( toggle, anchor ) {},
	callbackAfter: function ( toggle, anchor ) {}
});