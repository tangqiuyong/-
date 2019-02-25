$(function() {
  // <!--轮播图-->
  var $banner = $(".banner");
  var $btns = $(".wenzi ul li");
  var $pics = $(".subnavimg li");
  var $left = $(".leftbtn");
  var $right = $(".rightbtn");
  var $time = null;
  var $autoplaytimer = null;
  var $num = 0;
  $banner.hover(
    function() {
        clearInterval($autoplaytimer)
        $(".leftbtn,.rightbtn").show();
    },
    function() {
        $(".leftbtn,.rightbtn").hide();
        $autoplaytimer = setInterval(function() {
            $right.click();
        }, 3000);
    }
  );
  $btns.hover(
    function() {
      $num = $(this).index();
    //   $timer = setInterval(function() {
        change();
    //   }, 200);
    },
    function() {
    //   clearTimeout($timer);
    }
  );

  $right.on("click", function() {
    $num++;
    if ($num > $btns.length-1) {
      $num = 0;
    }
    change();
  });
  $left.on("click", function() {
    $num--;
    if ($num < 0) {
      $num = $btns.length;
    }
    change();
  });

  function change() {
    $btns
      .eq($num)
      .addClass("active")
      .siblings("li")
      .removeClass("active");
    $('.hengxian').animate({
        left: 195*$num
      })
    $pics
      .eq($num)
      .animate({
        opacity: 1
      })
      .siblings("li")
      .animate({
        opacity: 0
      });
  }
  $autoplaytimer = setInterval(function() {
    $right.click();
  }, 3000);

  //   左边  导航栏

  $(".navinner-li").hover(
    function() {
      $(".fenleinav").slideDown("500", function() {
        $(".fenleinav").show();
      });
    },
    function() {
      $(".fenleinav").slideUp("500"),
        function() {
          $(".fenleinav").hide();
        };
    }
  );
});
