for(var i = 0; i <= 3; i++){   //同步
    //异步 放入事件队列
    //什么时候把异步函数从事件循环中拉回
    //1.当前进程空闲
    //2.满足触发条件：时间条件、磁盘IO、网络IO、自定义事件
    setTimeout(function () {
        console.log(i);
    },0)
}
// 4
// 4
// 4

for(var i = 0; i<= 3; i++){
    setTimeout(function (i) {   //作用域
        console.log(i);
    },0)
}
// undefined
// undefined
// undefined
