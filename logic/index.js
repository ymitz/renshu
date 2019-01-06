//
$(function () {
    let answers = [];

    /*
    // https://projecteuler.net/problem=1
    let answer1 = function () {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            if (i % 5 == 0 || i % 3 == 0) {
                sum += i;
            }
        }
        return sum;
    }
    answers.push(answer1);

    let answer2 = function () {
        let upper = 4000000
        let before = 1;
        let presentfib = 2;
        let sum = 0;
        while (presentfib < upper) {
            if (presentfib % 2 == 0) {
                sum += presentfib;
            }
            //console.log(presentfib);
            var memo = presentfib;
            presentfib += before;
            before = memo;
        }
        return sum;
    }
    answers.push(answer2);

    let answer3 = function () {
        let question = 600851475143;
        let target = Math.floor(question / 2);
        let largestprime = 1;
        console.log(target)
        while (question !== 1) {
            if (largestprime != 1 && question % largestprime == 0) {
                question = question / largestprime;
                console.log(question, largestprime);
            } else {
                largestprime += 1;
            }
        }
        return largestprime;
    }
    answers.push(answer3);

    let answer4 = function () {
        let answerkeys = [];
        let answer = 0
        for (let i = 100; i < 1000; i++) {
            for (let j = 100; j < 1000; j++) {
                multi = i * j;
                let str = multi.toString();
                if (str === str.split("").reverse().join("")) {
                    //console.log(str.split("").reverse().join(""));
                    if (answer < multi) {
                        answer = multi;
                        answerkeys = [i, j];
                    }
                }
            }
        }
        return answer;
    }

    answers.push(answer4);

    let answer5 = function () {
            let answer = 0
            let i = 101010;
            let completed = false;
            while (i <1000000000) {
            for (let j = 1; j++; j < 21) {
                if (i % j === 0) {
                    answer = i;
                    if (j === 20) {
                        console.log(answer);
                        completed = true;
                    }
                } else {
                    break;
                }
            }
            if (completed) break;
            i++;
        }
        return answer;
    }
    answers.push(answer5);

    let answer6 = function(){
        let a = 1 + 100;
        let tsum = a  * 50;
        let sum = 0
        for(let i =1; i<101;i++){
            sum =(i *(tsum - i)) + sum;
        }
        return sum;
    }
    answers.push(answer6);
    */

    let answer7 = function () {
        let primememo = [2];
        let init = 3
        while(primememo.length !== 10001){
//        for (let init = 3; init < 10000; init++) {
            for (let j = 0; j < primememo.length; j++) {
                if (init % primememo[j] !== 0) {
                    if (j === (primememo.length -1)) {
                        primememo.push(init);
                    }
                } else {
                    break;
                }
            }
            init++;
        }
        console.log(primememo);
        return primememo[primememo.length - 1];
    }
    answers.push(answer7);

    answerdom = $('<ul>');
    answers.forEach(function (answer) {
        answerdom.append($('<li>').text(answer()));
    });
    $("#app").append(answerdom);
});
