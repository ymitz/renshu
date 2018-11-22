//closureで返却する関数を外出ししてみる
function inner() {
    console.log(subject.x + 'をオブザーバがミてるよ');
}

//ここで明示的に使ってはないが、関数には渡す。
function observer(subject) {
    return inner;
}

//subjectオブジェクト
let subject = {
    x: 0,
    observer:{},
    countup: function (){
        this.x += 1;
        this.notify();
    },
    notify: function () {
        this.observer()();
    }
}

subject.observer = observer;

subject.countup();
subject.countup();