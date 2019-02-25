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