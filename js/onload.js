

	if ($(".validate_me").length > 0) {
		$(".validate_me").validate();
		$( "#dob" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "01/01/1900", 
			maxDate: "0",
			yearRange: '-111',
			dateFormat: 'dd/mm/yy'
		});
	}
	
	$('.slideshow .button').each(function () {
		$(this).css({left: ($('.slideshow aside').width() - $(this).outerWidth())/2,'position':'relative'});
	});
	
	$('.slide aside').css({'overflow':'hidden'}); 
	
	function onBefore() { 
	    $('.slide aside h2').css({'position':'relative','left':'360px','width':'340px'}); 
		$('.slide aside p').css({'position':'relative','left':'360px','width':'340px'}); 
		$('.slide aside a').css({'visibility':'hidden'});
	} 
	function onAfter() { 
	    //$('.slide aside').css({'display':'block'}); 
		$('.slide aside h2').animate({
		    left: '0'
		}, 500, function() {
		    // Animation complete.
		}).parent().find('p').delay(200).animate({
		    left: '0'
		}, 500, function() {
		    // Animation complete.
			$('.slide aside a').css({'visibility':'visible'});
		});
	}

	$('.slideshow').cycle({
		fx: 		'fade',
		timeout: 	8000,
		before: 	onBefore, 
		after:   	onAfter
	});

	$('.single-slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});

	$('.masonry').masonry({
	  columnWidth: 232, 
	  itemSelector: '.feature-box' 
	});


	//$('#main-content').css({'height':(($(document).height())-362)+'px'});

	/*$(window).resize(function(){
		$('#main-content').css({'height':(($(document).height())-162)+'px'});
	});*/
