// var input=document.querySelector('input');
// var iconfont=document.querySelector('.iconfont')
// var hong = document.querySelector('.hong');

// var error=document.querySelector('.error');
// var form = document.querySelector('.form1');
// var button = document.getElementById('submit')
// var username = /^[a-zA-Z0-9_-]{4,16}$/;
// var pass= /^.{6,16}$/;
// var usernameflag = true;
// var passflag = true;


// input[0].onfocus = function() {
//     if (this.value == '') {
//         error[0].innerHTML = '请输入正确的用户名';
//         hong[0].style.color = 'red';

//     }
// };
// input[0].onblur = function() {
//     if (username.test(this.value)) {
//         error[0].innerHTML = '输入正确';
//         hong[0].style.color = 'green';
//         usernameflag  = true;
//     } else if (this.value == '') {
//         error[0].innerHTML = '用户名不能为空*';
//         hong[0].style.color = 'red';
//         usernameflag  = false;
//     } else {
//         error[0].innerHTML = '输入错误';
//         hong[0].style.color = 'red';
//         usernameflag = false;
//     }
// };


// input[1].onfocus = function() {
//     if (this.value == '') {
//         error[1].innerHTML = '请输入正确的用户名';
//         hong[1].style.color = 'red';

//     }
// };
// input[1].onblur = function() {
//     if (pass.test(this.value)) {
//         error[1].innerHTML = '输入正确';
//         hong[1].style.color = 'green';
//         passflag   = true;
//     } else if (this.value == '') {
//         error[1].innerHTML = '密码不能为空*';
//         hong[1].style.color = 'red';
//         passflag  = false;
//     } else {
//         error[1].innerHTML = '输入错误';
//         hong[1].style.color = 'red';
//         passflag = false;
//     }
// };
// button.onclick=function(){
//     submitRegister();
// }
// function submitRegister() {
//     // console.log('ok');
//     ajax({
//         type: 'post',
//         url: 'http://localhost/weipinhui/php/regis.php',
//         data: {
//             username: input[0].value,
//             pass: input[1].value

//         },
//         beforeSend(options) {
//             console.log('beforeSend')
//         },
//         success: function() {
//             console.log('success');
//             location.href = "http://localhost/weipinhui/src/login.html";

//         }
//     })
// }