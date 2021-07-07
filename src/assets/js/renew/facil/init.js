$(function() {
	// 탭 기능 호출
	tabFn.sibFn("#facil-tab li", "#facil-box > section");
	tabFn.sibFn("#fcdetail-tablist li", "#fcdetail-tabpanel .sec");
	
	// bx슬라이더
	$("div[id*=bxBox-] .bxS, #room-list .bxBox .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});
	$("#fcdetail-tabpanel .sec-slider .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});

	
	
	// 자세히보기 버튼
	$("#d-area-1").on('click', function() {
		$(this).toggleClass('on');
	});
	
	
});

var tabFn = {
	sibFn : function(obj, target) {
		var obj = $(obj);
		var target = $(target);

		obj.on('click', function() {
			var idx = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			target.eq(idx).addClass('on').siblings().removeClass('on');
		});
	}
}