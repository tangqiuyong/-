$().ready(function () {


    // 在键盘按下并释放及提交后验证提交表单
    $("#form1").validate({

        // debug: true,
        submitHandler: function (form) {
            // console.log(form);
            $(form).find('input[name="username"]');
            // console.log($(form).find('input[name="username"]').val());
            $.ajax({
                type: 'POST',
                url: '../php/login.php',
                data: {
                    username: $(form).find('input[name="username"]').val(),
                    pass: $(form).find('input[name="pass"]').val(),

                },
                success: function () {
                    console.log('success');
                    location.href = "http://localhost/weipinhui/src/index.html";

                },
                dataType: "json",
                error: function (err) {
                   alert('账号名和密码不正确！')
                }
            });


        },
        rules: {

            username: {
                required: true,
                minlength: 5
            },
            pass: {
                required: true,
                minlength: 6,
                maxlength: 20,
            },



        },
        messages: {
            username: {
                required: "",
                minlength: "用户名必需由个5字母组成"
            },
            pass: {
                required: "请输入密码",
                minlength: "密码由6-20位字母，数字和符号组合",
                maxlength: "密码由6-20位字母，数字和符号组合"
            },




        }



    })
});