importScripts('https://unpkg.com/axios/dist/axios.min.js');

addEventListener('message', function (e) {  // 接收来自主线程数据
    axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then(res => {
        if (res.data && res.data.code == 200) {
            postMessage(res.data.result);   // 发送到主线程
        }
    })
}, false);  // false指定事件句柄在冒泡阶段执行