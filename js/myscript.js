$(document).ready(function(){
    
    
    //메뉴 클릭시 이동하는거
    $('.menu > li > a').each(function(){
       $(this).click(function(){
            var num = $(this).parent().index();
           
            $('.menu > li').removeClass('on');
            $(this).parent().addClass('on');
           
            var sesct = $('section').eq(num).offset().top;
           $('body, html').animate({
               scrollTop: sesct
           },600)
           return false;
       })
    })
    
    
    
    
 $(window).scroll(function(){
        var sct = $(this).scrollTop();
        var dh = $(document).height();
        var wh = $(window).height();
        var hh = dh - wh;
        // var art0 = $("article").eq(0).offset().top
        var art1 = $("section").eq(1).offset().top
        var art2 = $("section").eq(2).offset().top
        $(".menu > li").removeClass("on");
        if ( sct >= hh-60 ) {
            $(".menu > li").eq(3).addClass("on")
        } else if ( sct >= art2 ) {
            $(".menu > li").eq(2).addClass("on")
        } else if ( sct >= art1 ) {
            $(".menu > li").eq(1).addClass("on")
        } else { 
            $(".menu > li").eq(0).addClass("on")
        }
    })
    
    
    
    
    $('.Pmenu > li a').click(function(){
        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
    })
    
    
    $(window).load(function(){
        $('#pageloader').delay(1200).fadeOut()
        $('.load').delay(700).fadeOut()
    })
    
    
         $(".grid").isotope({
            itemSelector:'.grid-item',
            layoutMode: 'fitRows',  
            filter: '*'
        })
    
        $(".Pmenu li a").click(function(){
            var filterValue = $(this).parent().attr("data-filter")
            $(".grid").isotope({
                itemSelector:'.grid-item',
                layoutMode: 'fitRows',  // masonry, fitRows
                filter: filterValue
            })
            return false;
        })
    
    new Skroll()
    .add('.Acont',{animation:'fadeInUp', duration:1700})
    .add('.abg',{animation:'fadeInUp', duration:1500})
    .init()
    
    $('section').mousewheel(function(e, delta) {
        var num2 = $(this).index();
        if (delta < 0) { // 마우스 휠 아래로
            var pl = $(this).next().offset().top
            $('body,html').stop().animate({
                scrollTop: pl
            },600)
        }
        if (delta > 0) { // 마우스 휠 위로
            var pl = $(this).prev().offset().top
            $('body,html').stop().animate({
                scrollTop: pl
            },600)
        }
    })
    
    
    
})