 $.ajax({
            // url: ' http://192.168.2.1:8080/weipinhui/php/demo.php',
     
            url: 'http://localhost/weipinhui/php/shopcar.php',
            dataType: 'json'
        }).done(function (data) {

            // console.log(data);
            var strhtml = '';
            $.each(data, function (index, value) {
                // console.log(value);
                strhtml +=
                    `	 <div class="good-box">
        <div class="good-img">
        	<a href="./shopcar.html?sid=${value.sid}" target="_blank">
            <img src="${value.url}" alt="">
            </a>
        </div>
        <div class="ziti">
            <div class="shangzi">
                <span>${value.price}</span>
                <em>¥516</em>
                <strong>
                    2.9折
                </strong>

            </div>
            <div class="xiazi">
                <a href="#">${value.titile}</a>
            </div>
        </div>
    </div>

            		`;
            });
            // strhtml += '';
            $('.good-list').html(strhtml);
            // console.log(data);
        });

        // $(function () {
        //     $('.good-list').on("click", " .good-box", function () {
        //         // ev.stopPropagation();
        //         location.href = "shopcar.html"
        //         console.log(111111);
        //     });


        // });