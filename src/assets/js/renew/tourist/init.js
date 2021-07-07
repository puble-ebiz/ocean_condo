$(function() {
	//함수실행
    listFn();
	
	// 탭
 	$("#pkg-tab li").on('click', function() {
        var numClass = String($(this).attr('class'));
        var num = Number(numClass.substr( 4, 1 ));
        
        $("#pkg-tab li[class=nth-"+ num +"]").addClass('on').siblings().removeClass('on');
        $(".tour-wrap .tour-sec").hide();
        $(".tour-wrap .tour-sec[class*=sec-"+ num +"]").show();
        
        listFn();

        $(window).scrollTop(0);
	});
    
    $(window).load(function() {
        //리사이즈
        $(window).resize(function() {
            listFn();
        }).resize();
    });
});


function listFn(){
    var viewTxt = $('.tour-sec .area .list > li dl dd');
    var mql = window.matchMedia("screen and (max-width: 991px)");

    if(mql.matches) {
        var viewTxtLen = viewTxt.length;
        var viewTxtH = [], viewTxtMaxH = 0;

        viewTxt.css({'height' : 'auto'});

        //배열로받기
        for( var i = 0 ; i < viewTxtLen ; i++ ){
            viewTxtH[i] = viewTxt.eq(i).height();
        }

        //값
        viewTxtMaxH = viewTxtH[0];
        for( var i = 0 ; i < viewTxtH.length ; i++ ){
            if (viewTxtMaxH < viewTxtH[i]) {
                viewTxtMaxH = viewTxtH[i];
            }
        }

        viewTxt.css({'height' : viewTxtMaxH+'px'});
    }else {
        viewTxt.css({'height' : 'auto'});
    }
    
}