$(document).ready(function(){
    //페이지 서브메뉴
    
    let dataList = $(".subpage-top-sect .subpage-menu-ul>li>a");
    let pageData = $(".page-data").data("name");
    dataList.each(function(index, item){
        let data = $(item).data("active");
        if(data == undefined) {return true;}
        if(pageData == data){
            dataList.removeClass("active");
            $(item).addClass("active");
            return false;
        }
    });
    
    //그룹 페이지용
    dataList.on("click",function(){
        let moveData = $(this).data("move");
        let pos = $("body").find("[data-move-point='"+ moveData +"']").offset().top - 120;
        window.scrollTo(0, pos);
    });

    //페이지 파트메뉴
    let partList = $(".part-menu-container .part-menu-ul>li>a");
    let partData = $(".page-data").data("part");
    partList.each(function(index, item){
        let data = $(item).data("part-active");
        if(data == undefined) {return true;}
        if(partData == data){
            partList.removeClass("active");
            $(item).addClass("active");
            return false;
        }
    });
});



$(document).ready(function(){
    let reserveOverOn = false;
    let reserveOutOn = false;
    $(".nav-reserve").mouseover(function(e){
        console.log("작동");
        if(reserveOverOn == true) return false;
        reserveOverOn = true;
        $('.reserve-ul').slideDown(320,
        function(){
            reserveOverOn = false;
            // console.log("완료")
        });
    });

    $(".nav-reserve").mouseleave(function(e){
        if(reserveOutOn == true) return false;
        reserveOutOn = true
        $('.reserve-ul').slideUp(320, function(){
            reserveOutOn = false;
        });
        
    });

    //헤더 햄버거메뉴
    $(".header-new .btn-open-menu").on("click", function(){
         $(".header-new .menu-area").show();
    });


});

/*스크롤 업 버튼*/
$(document).ready(function(){
    $(".fn-up-wrap").hide();
    $(".fn-up-wrap").css("oparcity","0");
    $(window).on("scroll", function(){
        // console.log((window.scrollY > 600));
        if(window.scrollY > 700){
            $(".fn-up-wrap").show();
            $(".fn-up-wrap").stop().animate({ "opacity": '1'},200);
        }
        else{
            $(".fn-up-wrap").stop().animate({ "opacity": '0'}, 200,
            function(){
                $(".fn-up-wrap").hide();
            });
        }
    });

    $(".btn-scroll-up").on("click", function(){
        $('html, body').animate( { scrollTop : '0' }, 300);
    });
});

// tab 스크립트 

        $(document).ready(function() {
    
            //When page loads...
            $(".tab_content").hide(); 
            $("ul.tabs li:first").addClass("on").show(); 
            $(".tab_content:first").show(); 
    
            //On Click Event
            $("ul.tabs li").click(function() {
    
                $("ul.tabs li").removeClass("on"); 
                $(this).addClass("on"); 
                $(".tab_content").hide(); 
    
                var activeTab = $(this).find("a").attr("href"); 
                $(activeTab).fadeIn(); 
                return false;
            });
    
        });
