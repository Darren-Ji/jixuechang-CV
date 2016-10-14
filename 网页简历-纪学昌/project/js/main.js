/**
 * Created by feique on 16/9/14.
 */
$(function(){
    $(document).ready(function(){
        $(".section2 ul").removeClass("demoAniIn").addClass("demoAniOut");
        $(".section3 ul li").each(function(index,item){
            $(this).removeClass("appAniIn").addClass("appAniOut").css({"animationDelay":index/8+"s"});
        });
        for(var i=1;i<11;i++){
            $(".section4 .pBox p:nth-child("+i+")").animate({marginLeft:(Math.pow(-1,i))*150+"%"},1000);
        }
        $(".section5 .pBox p").each(function(index,item){
            $(this).removeClass("pAniIn").addClass("pAniOut");
        });
    });
    $('#cv_page').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $(".section1 .head").animate({left:"47%"},1000);
                $(".section1 .tit").delay(200).animate({left:"47.5%"},1000);
                $(".section1 .motto").delay(400).animate({marginLeft:"0"},1000);
                for(var i=2;i<7;i++){
                    $(".section1 .sBox p:nth-child("+i+")").delay((i+1)*200).animate({marginLeft:"0"},1000);
                }
            }
            if(index == 2){
                $(".section2 ul").removeClass("demoAniOut").addClass("demoAniIn");
            }
            if(index == 3){
                $(".section3 ul li").each(function(index,item){
                    $(this).removeClass("appAniOut").addClass("appAniIn").css({"animationDelay":index/4+"s"});
                });
            }
            if(index == 4){
                for(var i=1;i<11;i++){
                    $(".section4 .pBox p:nth-child("+i+")").delay((i+1)*100).animate({marginLeft:"0"},1000);
                }
            }
            if(index==5){
                $(".section5 .pBox p").each(function(index,item){
                    $(this).removeClass("pAniOut").addClass("pAniIn").css({"animation-delay":index/4+"s"});
                });
            }
        },
        onLeave: function(index, direction){
            if(index == "1"){
                $(".section1 .head").animate({left:"-50%"},1000);
                $(".section1 .tit").animate({left:"150%"},1000);
                $(".section1 .motto").animate({marginLeft:"-150%"},1000);
                for(var i=2;i<7;i++){
                    $(".section1 .sBox p:nth-child("+i+")").animate({marginLeft:(Math.pow(-1,i))*150+"%"},1000);
                };
            }
            if(index == '2'){
                $(".section2 ul").removeClass("demoAniIn").addClass("demoAniOut");
            }
            if(index == '3'){
                $(".section3 ul li").each(function(index,item){
                    $(this).removeClass("appAniIn").addClass("appAniOut").css({"animationDelay":index/8+"s"});
                });
            }
            if(index == '4'){
                for(var i=1;i<11;i++){
                    $(".section4 .pBox p:nth-child("+i+")").animate({marginLeft:(Math.pow(-1,i))*150+"%"},1000);
                };
            }
            if(index=='5'){
                $(".section5 .pBox p").each(function(index,item){
                    $(this).removeClass("pAniIn").addClass("pAniOut");
                });
            }
        }
    })
});
