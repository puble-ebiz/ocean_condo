$(document).ready(function(){
    var agent = navigator.userAgent.toLowerCase();
    //console.log(navigator.appName);
    if ( (navigator.appName == 'Netscape' && (agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1))) {
        $(".bg-player-box").hide();
    }else{
        // $(".bg-player-box").hide();
    }
    //console.log("작동중");
});

$(function () {

	// 브라우저 높이 -> 화면 높이 적용
    resizeWin();
	
	$(window).on('resize', function () {
        resizeWin();
	});
    
	// 190405 메인 공지 클릭 시 
    if( $('.pop-notice').css('display') == 'block' ){
        $('html, body').on('click', function() {
            $('.pop-notice').hide();
        });
    }
	
	// 자세히보기 클릭시
	$("#txt-box .more-a").on('click', function() {
		var setTop =	$("#setTop").offset().top;
		$('html, body').stop().animate({
			scrollTop: setTop
		}, 1300, 'easeInOutQuart');
	});
	
	// 별도 PC 메인 텍스트 fadeOut 및 hover 효과
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
			//mobile 
			//alert('mobile 접속'); 
			
		} else { 
			//pc 
			//alert('pc 접속'); 
            var txtBox = $("#txt-box");
            var vidPc = $(".vid-wrap .vid .mbYTP_wrapper");
            
            txtBox.addClass('on');
			setTimeout(function() {
                txtBox.removeClass('on');
			}, 1000);
            
            $("#main").hover(function() {
                txtBox.addClass('on');
            }, function() {
                //console.log('out');
                txtBox.removeClass('on');
            });

            
			/*$("#txt-box").hide();
			$("#txt-box").fadeIn(700);
			setTimeout(function() {
				$("#txt-box").fadeOut(500);
			}, 500);
			$("#main").hover(function() {
				$("#txt-box").fadeIn(1000);
			}, function() {
				$("#txt-box").fadeOut(1000);
			});*/
			
		} 
	}
	
	// 시설안내 bx슬라이더
	$("#bxList-1 .bxS-1, #bxList-1 .bxS-2").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next.png" alt="다음">',
	});
	
    
	// 눈썰매장 배너 클릭시
	$('.topbn-wrap .bn-link').on('click', function(){
		$('#pop-bustour').show();
        $('html').css({'overflow': 'hidden', 'height': '100%'});
        $('#pop-bustour').on('scroll', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
	});
    
	// 왕복이용권 팝업 닫기
	$('#pop-bustour .btn-pop-close').on('click', function(){
		$('#pop-bustour').hide();
        
        $('html').css({'overflow': 'auto', 'height': '100%'});
        $('#pop-bustour').off('scroll');
	});

});

//리사이즈 
function resizeWin(){
    var wt = $(window).width();
	var ht = $(window).height();
    //var busTourpt = $('#pop-bustour').css('padding-top').slice(0, -2);
    
    $('section.main, section.main-bg, .m-vid').height(ht);

    $('.topbn-wrap .slide-banner').bxSlider({
        mode: 'fade',
        auto: true,
        controls : false,
        pager : false,
        autoControls: true,
        autoHover: true,
        speed: 500
    });
    
    if( wt <= 768 ){
        $(window).ready(function(){
            //console.log('load')
            //$('#bgMov').get(0).play();
            
            $('.m-vid').fadeIn(500, function(){
                $('.m-vid').css({'display' : 'block'});
                $('#bgMov').get(0).play();
                $(this).find('#bgMov').on('ended',function(){
                    $(this).parents('.m-vid').fadeOut(500);
                });
            });
        });
        if( $('.topbn-wrap').css('display') == 'block' ){
            $('#pop-bustour').css({'height' : ht+'px'});
        }
    }else{
        //console.log('pc')
        //(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1 )
        /*if($.browser.msie){
            $("#bgMo").stop();
        }else{
            $("#bgMo").get(0).pause(); 
        }*/
        $("#bgMov").get(0).pause();
        $('#bgMov').get(0).currentTime = 0;
        $('.m-vid').css({'display' : 'none'});
        
        if( $('.topbn-wrap').css('display') == 'block' ){
            $('.header').css({'margin-top' : 77+'px'});
            $('#pop-bustour').css({'height' : ht+'px'});
            //console.log(busTourpt)
            var scr = $(window).scrollTop();
            var setTop = $("#setTop").offset().top;
            
            if (scr >= setTop) { 
                $('.header').css({'margin-top' : 0+'px'});
            }
            $(window).on('scroll', function() {
                scr = $(window).scrollTop();
                
                if (scr < setTop) {
                    $('.header').css({'margin-top' : 77+'px'});
                }
                if (scr >= setTop) { 
                    $('.header').css({'margin-top' : 0+'px'});
                }
            });
        }else{
            
        }
    }
}

//띠배너 팝업 open
/*function tpopFn(popValue){
	$('.bn-'+popValue).on('click', function(){
		$('#pop-'+popValue).show();
        $('html').css({'overflow': 'hidden', 'height': '100%'});
        $('#pop-'+popValue).on('scroll', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
	});
    
	$('#pop-'+popValue).find('.btn-pop-close').on('click', function(){
		$('#pop-'+popValue).hide();
        
        $('html').css({'overflow': 'auto', 'height': '100%'});
        $('#pop-'+popValue).off('scroll');
	});
}*/