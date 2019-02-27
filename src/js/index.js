;$(function(){

// // 1<!--轮播图-->
// var $banner = $(".banner");
// var $btns = $(".wenzi ul li");
// var $pics = $(".subnavimg li");
// var $left = $(".leftbtn");
// var $right = $(".rightbtn");
// var $time = null;
// var $autoplaytimer = null;
// var $num = 0;
// $banner.hover(
//   function () {
//     clearInterval($autoplaytimer)
//     $(".leftbtn,.rightbtn").show();
//   },
//   function () {
//     $(".leftbtn,.rightbtn").hide();
//     $autoplaytimer = setInterval(function () {
//       $right.click();
//     }, 3000);
//   }
// );
// $btns.hover(
//   function () {
//     $num = $(this).index();
//     //   $timer = setInterval(function() {
//     change();
//     //   }, 200);
//   },
//   function () {
//     //   clearTimeout($timer);
//   }
// );

// $right.on("click", function () {
//   $num++;
//   if ($num > $btns.length - 1) {
//     $num = 0;
//   }
//   change();
// });
// $left.on("click", function () {
//   $num--;
//   if ($num < 0) {
//     $num = $btns.length - 1;
//   }
//   change();
// });

// function change() {
//   $btns
//     .eq($num)
//     .addClass("active")
//     .siblings("li")
//     .removeClass("active");
//   $('.hengxian').animate({
//     left: 195 * $num
//   })
//   $pics
//     .eq($num)
//     .animate({
//       opacity: 1
//     })
//     .siblings("li")
//     .animate({
//       opacity: 0
//     });
// }
// $autoplaytimer = setInterval(function () {
//   $right.click();
// }, 3000);

// //  2 左边  导航栏

// $(".navinner-li").hover(
//   function () {
//     $(".fenleinav").slideDown("500", function () {
//       $(".fenleinav").show();
//     });
//   },
//   function () {
//     $(".fenleinav").slideUp("500"),
//       function () {
//         $(".fenleinav").hide();
//       };
//   }
// );




// // 3 :img懒加载
// $(function () {
//   $("img.lazy").lazyload({
//     effect: "fadeIn"
//   });
// });






// // 4 :楼梯
// $(window).on('scroll', function () {
//   //1.通过滚动条的距离控制楼梯导航的显示与隐藏
//   var $top = $(window).scrollTop();
//   var $loutinav = $('#J-index-nav-list');
//   if ($top >= 700) {
//     $loutinav.show();
//   } else {
//     $loutinav.hide();
//   }

//   //.通过滚轮事件，给对应的左侧的楼梯导航添加对应的class=active
//   $('.list-item').each(function (index, element) {
//     var $loucengtop = $(element).offset().top + 300;
//     if ($loucengtop > $top) {
//       $('.nav-item').removeClass('active');
//       $('.nav-item').eq(index).addClass('active');
//       return false;
//     }
//   });
// });
// //document.documentElement.scrollTop
// //document.body.scrollTop
// /*$('html,body').animate({
//   scrollTop:1600
// })*/

// //2.点击楼梯导航，让对应的楼层进行位置的跳转。
// $('.nav-item').on('click', function () {
//   $(this).addClass('active').siblings('.nav-item').removeClass('active');
//   var $top = $('.list-item').eq($(this).index()).offset().top;
//   $('html,body').animate({ //这里给滚动条赋值，兼容写法
//     scrollTop: $top
//   });
// });


});
  



