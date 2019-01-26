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

    let answer8 = function () {
        let str = "73167176531330624919225119674426574742355349194934"
            + "96983520312774506326239578318016984801869478851843"
            + "85861560789112949495459501737958331952853208805511"
            + "12540698747158523863050715693290963295227443043557"
            + "66896648950445244523161731856403098711121722383113"
            + "62229893423380308135336276614282806444486645238749"
            + "30358907296290491560440772390713810515859307960866"
            + "70172427121883998797908792274921901699720888093776"
            + "65727333001053367881220235421809751254540594752243"
            + "52584907711670556013604839586446706324415722155397"
            + "53697817977846174064955149290862569321978468622482"
            + "83972241375657056057490261407972968652414535100474"
            + "82166370484403199890008895243450658541227588666881"
            + "16427171479924442928230863465674813919123162824586"
            + "17866458359124566529476545682848912883142607690042"
            + "24219022671055626321111109370544217506941658960408"
            + "07198403850962455444362981230987879927244284909188"
            + "84580156166097919133875499200524063689912560717606"
            + "05886116467109405077541002256983155200055935729725"
            + "71636269561882670428252483600823257530420752963450"
        let splitnum = 13;
        let memo = [];
        for (let i = 0; i < str.length - 12; i++) {
            memo.push(str.slice(i, i + splitnum));
        }
        let answer = 0;
        for (e of memo) {
            let temp = e.split("")
                .map(e => parseInt(e))
                .reduce((a, b) => {
                    return a * b;
                }, 1);
            if (temp > answer) {
                answer = temp;
            }
        }
        return answer;
    }
    answers.push(answer8);

    let answer9 = function () {
        let a = 1;
        let b = 1;
        let answer=0;
        for(let a = 1; a<1000; a++){
            for(let b=1;b<1000;b++){
                if((a ** 2 + b ** 2) === (1000-a-b)**2){
                    answer= a * b * (1000-a-b);
                    break;
                }
            }
        }
        return answer;
    }
    answers.push(answer9);
    
    */

    let answer10 = function () {
        let sum=2;
        let primelist= [2]
        for(let a=3; a < 2000000; a++){
            for(prime of primelist){
                if(a % prime !== 0){
                    if(prime === primelist[primelist.length -1]){
                        primelist.push(a);
                        sum += a;
                    }
                    continue;
                }
                else{
                    break;
                } 
            }
        }
        return sum;
    }

    answers.push(answer10);

    answerdom = $('<ul>');
    answers.forEach(function (answer) {
        answerdom.append($('<li>').text(answer()));
    });
    $("#app").append(answerdom);
});
