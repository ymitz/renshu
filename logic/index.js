//
$(function () {
    var answers = [];
    // https://projecteuler.net/problem=1
    var sum = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 5 == 0 || i % 3 == 0) {
            sum += i;
        }
    }


    answers.push(sum);
    answerdom = $('<ul>');
    answers.forEach(function (answer) {
        answerdom.append($('<li>').text(answer));
    });
    $("#app").append(answerdom);
});
