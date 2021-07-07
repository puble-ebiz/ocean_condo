$(function() {
    //사이드 탭 
    $(".q-menu .packtab li").removeClass('on');
    var liLen = $(".q-menu .packtab li").length+1;
    for(var i = 0; i < liLen ; i++){
        //console.log(i)
        $('.packtab li:eq('+ i +')').addClass('nth-'+(i+1));
        //$('.vari-wrap .packtab li:eq('+ i +')').addClass('nth-'+(i+1));
    }
	
	// 탭
	// 180716 index값이 아닌 section값으로 맞추기
 	//$("#pkg-tab li, #pkg-b-tab li, .packtab li").on('click', function() {
    $("#pkg-tab li, #pkg-b-tab li").on('click', function() {
        //var idx = $(this).index();
        var numClass = String($(this).attr('class'));
        //var num = numClass.split("-");
        if( numClass.length == 5 ){
            //console.log('1')
            var num = Number(numClass.substr( 4, 1 ));
        }else {
            var num = Number(numClass.substr( 4, 2 ));
        }
        //console.log(numClass, num)
        
        //$(this).addClass('on').siblings().removeClass('on');
        
        if( $(this).hasClass("no-tab") == true ){
            
        }else{
            $("#pkg-box > section").removeClass('on');
            $("#pkg-box > section[class=pkg-"+ num +"]").addClass('on');

            $("#pkg-tab li[class=nth-"+ num +"]").addClass('on').siblings().removeClass('on');
            $("#pkg-b-tab li").removeClass('on');
            $("#pkg-b-tab li[class=nth-"+ num +"]").addClass('on');
        }
        

        $(window).scrollTop(0);
	});
	
	// bx슬라이더
	$("#pkg-box div[id*=bxBox-] .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});
	
	// 오른쪽 배너
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop =	$("#setTop").offset().top;
		
		if(scr > setTop) {
			$("#rWing").css({
				"position": "fixed",
				"top": "256px"
			});
		} else {
			$("#rWing").css({
				"position": "absolute",
				"top": "656px"
			});
		}
	});
	
	
});