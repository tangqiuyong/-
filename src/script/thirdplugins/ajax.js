function ajax(options) {
    if (options && options.beforeSend) {
        options.beforeSend(options)
    }
    console.log('step1', options);
    //传输的数据对象以数组形式便于一一遍历
    function formsContent(data) {
        var arr = [];
        for (var i in data) {
            arr.push(i + "=" + data[i]);
        }
        return arr.join("&");
    }

    //创建对象
    var xhr = new XMLHttpRequest();
    console.log('step2');

    //设置默认状态，请求方式一般为get  数据设置为空或是存在.如果存在就不为空
    options.type = options.type || "get";
    options.data = options.data || '';



    //判断同步异步
    if (options.async == 'false' && options.async == false) {
        options.async == false;
    } else {
        options.async == true;
    }


    //如果没有输入就抛错
    if (!options.url) {
        throw new Error('请输入数据接口');

    }



    //判断输入的数据类型, 存在 对象类型 不是数组
    if (options.data && typeof options.data === 'object' && !Array.isArray(options.data)) {
        options.data = formsContent(options.data)
    } else {
        options.data = options.data;
    }


    // 判断请求方式get还是post
    if (options.type.toUpperCase() == "GET") {
        xhr.open(options.type, options.url += "?" + options.data, options.async);
        xhr.send();

    } else if (options.type.toUpperCase() == "POST") {
        xhr.open(options.type, options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
    }


    console.log('step3');
    xhr.onreadystatechange = function() {
        console.log('step4');
        if (xhr.readyState == 4 && xhr.status == 200) {
            options.success(xhr.responseText);
        }
    }

};
//在html里面调用
// ajax({
//     url: "", // url---->地址
//     type: "", // type ---> 请求方式
//     async: true, // async----> 同步：false，异步：true 
//     data: { //传入信息
//         name: "张三",
//         age: 18
//     },
//     success: function(data) { //返回接受信息
//         console.log(data);
//     }
// })