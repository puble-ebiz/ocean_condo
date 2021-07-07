$(function () {

	// 객실안내 자세히보기 클릭
	$('#roomList .d-row-1 .a-btn').on('click', function () {
		/*var roomTop = $(this).closest('li').offset().top - 300;
		$(window).scrollTop(roomTop);*/
		
		$('#roomList > li .bxBox').css({
			visibility: 'hidden',
			height: 0
		});
		

		if ($(this).closest('li').find('.bxBox').css('visibility') == 'hidden') {
			
			$(this).closest('li').find('.bxBox').css({
				visibility: 'visible',
				height: 'auto'
			});
			$(this).closest('li').find('.roomSlider').bxSlider({
				auto: true,
				autoControls: true,
				speed: 500,
				duration: 3000,
				prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
				nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
			});
		} else {
			
		}
	});
	
	// 팝업 닫기 클릭시 z-index 복귀
	$('#roomList > li .bxBox .a-x').on('click', function () {
		$(this).closest('li').find('.bxBox').css({
			visibility: 'hidden',
			height: 0
		});
		$(this).closest('li').find('.roomSlider').bxSlider({
			autoControls: false
		});
	});
	
	// 일정 안내
	$("#courseBox .courseTab > li").on("click", function() {
		var idx = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$("#courseBox .courseList > li").eq(idx).addClass("on").siblings().removeClass("on");
	});
	
	// 단체문의 Q&A 
	toggleOn("#qna-list > li", "sib");
});