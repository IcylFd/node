//回调函数可以是同步的也可以是异步的

//同步延时
function waitFive(name, function_name) {
    var pus = 0;
    var currentDate = new Date();
    while(pus < 5000){
        var now = new Date();
        pus = now - currentDate;
    }

    function_name(name);
}

function echo(name) {
    console.log(name);
}

//同步回调
waitFive('laoshan', echo);  //laoshan

console.log('end');
