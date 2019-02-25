//require.config({  })   配置模块

require.config({
	baseUrl:'https://cdnjs.cloudflare.com/ajax/libs/',//基路径，模块的共有的路径。
	paths:{//引入模块的地址，文件不能添加扩展名
		'jquery':'jquery/1.12.4/jquery',
		'jqcookie':'jquery-cookie/1.4.1/jquery.cookie',
		'jqlazy':'jquery.lazyload/1.9.1/jquery.lazyload.min'
	},
	shim:{//非AMD规范的JS文件,就需要使用Require中的shim.
		exports:'',//exports 表示输出的对象名
		dep:['jquery']//deps 为数组,表示其依赖的库,
	}
});

$(function () {
    // 地区事件=========开始
    $('.hangzou').on('click', function () {
        $this = $(this);
        $('.hangzou').find('.city').addClass('show');
    });

    $('.city-cha').on('click', function (e) {
        e.stopPropagation();
        $('.hangzou .city').removeClass('show');
    });

    var $li = $('.shang-ul li');
    var $tap = $('.tap-xia ul')
    $li.on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $tap.eq($(this).index()).css('display', 'block').siblings('ul').css('display', 'none');
    });

    // 地区事件=========结束

    //登录事件=======开始

    $('.topnavul-li1').on('mouseenter', function () {
        $(this).addClass('active');
        console.log($('li.topnavul-li1'))
    });
    $('.topnavul-li1').on('mouseleave', function () {
        $(this).removeClass('active');
    });





    //   左边  导航栏

$('navinner-ul .navinner-li').hover(function(){

    $('.fenleinav').slideDown('500',function(){
        $('.fenleinav').show();
    });
    
    },function(){
        $('.fenleinav').slideUp ('500') ,function(){
        $('.fenleinav').hide(); 
    }
    
    });

    $('.fenleinav p').hover(function(){
        $this = $(this);
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    })
}) 


$(function(){

// <!--轮播图-->
    var $banner=$('.banner');
    var $btns=$('.wenzi ul li');
    var $pics=$('.subnavimg li');
    var $left=$('.leftbtn');
    var $right=$('.rightbtn');
    var $time=null;
    var $autoplaytimer=null;
    var $num=0;
    $banner.hover(function(){
        $('.leftbtn,.rightbtn').show();
        
    },function(){
        $('.leftbtn,.rightbtn').hide();
        $autoplaytimer=setInterval(function(){
    $right.click();
        },3000);
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
        if($num>$btns.length){
            $num=0;
        }
        change();
    });
    $left.on('click',function(){
    $num--;
    if($num<0){
        $num = $btns.length ;
    }
    change();
    })
    
    
    function change(){
        $btns.eq($num).addClass('active').siblings('li').removeClass('active');
        $pics.eq($num).animate({
            opacity:1
        }).siblings('li').animate({
            opacity:0
        });
    }
    $autoplaytimer=setInterval(function(){
		$right.click();
    },3000);
    


//   左边  导航栏

$('.navinner-li').hover(function(){

    $('.fenleinav').slideDown('500',function(){
        $('.fenleinav').show();
    });
    
    },function(){
        $('.fenleinav').slideUp ('500') ,function(){
        $('.fenleinav').hide(); 
    }
    
    });
    

});


    

$(function(){
    $(".sidebar-con li").mouseover(function(e){
        $this = $(this)
        $this.addClass('active')
    })
    $(".sidebar-con li").mouseout(function(e){
        $this = $(this)
        $this.removeClass('active')
    })
    // 动画
    

    //.回到顶部。
    $('.go-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    })
})