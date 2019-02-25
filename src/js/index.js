// <!--轮播图-->
$(function(){


    var $banner=$('.banner');
    var $btns=$('.btn');
    var $pics=$('.banner .subnavimg  img');
    var $left=$('.leftbtn');
    var $right=$('.rightbtn');
    var $time=null;
    var $autoplaytimer=null;
    var $num=0;
    
    
    //当鼠标划过盒子的时候，左右箭头显示
    //清除定时器
    $banner.hover(function(){
        $('.leftbtn,.rightbtn').show();
        
    },function(){
        $('.leftbtn,.rightbtn').hide();
        $autoplaytimer=setInterval(function(){
    $right.click();
        },2000);
    });
    $btns.hover(function(){
        $num=$(this).index();
        $timer=setInterval(function(){
    change();
        },200)
    },function(){
        clearTimeout($timer);
    });
    
    
    $right.on('click',function(){
        $num++;
        if($num>$btns.length-1){
            $num=0;
        }
        change();
    });
    $left.on('click',function(){
    $num--;
    if($num<0){
        $num = $btns.length - 1;
    }
    change();
    })
    
    
    function change(){
        $btns.eq($num).addClass('active').siblings('li').removeClass('active');
        $pics.eq($num).animate({
            opacity:1
        }).siblings('img').animate({
            opacity:0
        });
    }
    

});


    
