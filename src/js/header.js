$(function() {
  // 地区事件=========开始
  $(".hangzou").on("click", function() {
    $this = $(this);
    $(".hangzou")
      .find(".city")
      .addClass("show");
  });

  $(".city-cha").on("click", function(e) {
    e.stopPropagation();
    $(".hangzou .city").removeClass("show");
  });

  var $li = $(".shang-ul li");
  var $tap = $(".tap-xia ul");
  $li.on("click", function() {
    $(this)
      .addClass("active")
      .siblings("li")
      .removeClass("active");
    $tap
      .eq($(this).index())
      .css("display", "block")
      .siblings("ul")
      .css("display", "none");
  });

  // 地区事件=========结束

  //登录事件=======开始

  $(".topnavul-li1").on("mouseenter", function() {
    $(this).addClass("active");
    console.log($("li.topnavul-li1"));
  });
  $(".topnavul-li1").on("mouseleave", function() {
    $(this).removeClass("active");
  });

  //   左边  导航栏

  $("navinner-ul .navinner-li").hover(
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

  $(".fenleinav p").hover(
    function() {
      $this = $(this);
      $(this).addClass("active");
    },
    function() {
      $(this).removeClass("active");
    }
  );

  //   左边  导航栏
  $(".navinner-ul .navinner-li").hover(
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

  $(".fenleinav .p").hover(
    function() {
      $this = $(this);
      $(this).addClass("active").find('.three').show();
      $(this).siblings().find('.three').hide();
    },
    function() {
      $(this).removeClass("active").find('.three').hide();
    }
  );
});
