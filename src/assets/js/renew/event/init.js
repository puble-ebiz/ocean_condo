$(function() {
		
	// bx슬라이더
	$("div[id*=bxBox-] .bxS").bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/renew/btn_prev3.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/renew/btn_next3.png" alt="다음">',
	});

	
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = $("#setTop").offset().top;
        var tab = $('.tab-rg-box');
        
		if ( $("#gnb-header").hasClass('on') ) {
            //console.log('on');
			tab.addClass('on');
            tab.css({'top' : ($("#gnb-header").height())+'px'});
        }else {
			tab.removeClass('on');
            tab.css({'top' : 'auto'});
        }
		
	});
});