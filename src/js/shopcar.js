   //放大镜
   $(function () {
    $('#ex1').zoom();
    $('.ulist').on('click',"li",function () {
        $this = $(this);
        $('.ulist li').removeClass('active')
        $this.addClass('active');
        var url = $this.find('img').prop('src');
        url=url.replace(/_64x64_90/,'');
        $('#ex1 img').attr('src', url)
        $('#ex1').zoom();
    })
});

//购物车
var $sid = location.search.substring(1).split('=')[1];
$.ajax({
    url: 'http://localhost/weipinhui/php/details.php',

    data: {
        sid: $sid
    },
    dataType: 'json'
}).done(function (data) {
    //console.log(data);
    $('#smallpic').attr('src', data.url);
    $('.lin').html(data.titile);
    $('.exprice').html(data.price);
    var arrpic = data.urls.split(',');
    var strhtml = '';
    $.each(arrpic, function (index, value) {
        strhtml += '<li><img src="' + value + '" /></li>';
    });

    $('.list ul').html(strhtml);
});





//点击加入购物车按钮。
var sidarr = []; //商品的编号
var numarr = []; //商品的数量

if (getcookie('cooksid') && getcookie('cookienum')) {
    sidarr = getcookie('cooksid').split(',');
    numarr = getcookie('cookienum').split(',');
}

console.log(getcookie('cookienum'));
console.log(getcookie('cooksid'));
$('.cart-num').on('click', function () {
    if ($.inArray($sid, sidarr) == -1) { //不存在
        sidarr.push($sid);
        numarr.push($('#count').val());
        addcookie('cooksid', sidarr.toString(), 7);
        addcookie('cookienum', numarr.toString(), 7);
    } else { //存在
        //console.log(numarr[$.inArray($sid,sidarr)]);//已经存在的值
        var newnum = parseInt($('#count').val()) + parseInt(numarr[$.inArray($sid, sidarr)]);
        numarr[$.inArray($sid, sidarr)] = newnum;
        addcookie('cookienum', numarr.toString(), 7);
    }
});