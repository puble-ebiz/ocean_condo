$(function() {
	
	$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo_fixed.png');
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = $("#setTop").offset().top;
		
		if (scr < setTop) {
			$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo_fixed.png');
		}
		if (scr >= setTop) {
			$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo_fixed.png');
		}
		
		
	});
});