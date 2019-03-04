function watch(attack, wait) {
    // TODO setTimeoutに直で渡せない。
    // 第三引数以降で渡せた。
    setTimeout(function (attack, wait) {
        //let status = 'OK'
        let status = 'NG'
        if (status === 'OK') {
            attack();
        } else {
            wait();
        }
    }, 1000, attack, wait)
};


function dragon(name) {
    watch(
        function () {
            console.log('fire' + ' attack!!!');
        },
        function () {
            console.log('wait');
        },
    )
}

dragon('fire');