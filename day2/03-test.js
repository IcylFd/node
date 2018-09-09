function haveLunch(food, drink, callback){
    console.log('Having lunch of ' + food + " " + drink);
    if(callback && typeof(callback) === 'function'){
        // setTimeout(callback(),5000);       //setTimeout中的function必须是异步的function
        setTimeout(function () {
            callback();
        },2000)
    }
}

haveLunch('toast','coffee',function () {      //这个function是同步的
    console.log('Finished lunch')
})
