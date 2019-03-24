//console.log('test');
//console.log(eval("1 + 1"))
console.log('test');
let operators = ["+", "*", "-", '/', '']
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        for (let k = 1; k < 10; k++) {
            for (let l = 1; l < 10; l++) {
                let string = i + '' + j + '' + k + '' + l + '';
                let target = string.split('').reverse().join('');
                //console.log(target);
                for (m of operators) {
                    for (n of operators) {
                        for (o of operators) {
                            //console.log(parseInt(target));
                            //console.log(result);
                            if (!(m === "" && n === "" && o === "")) {
                                //console.log(m + n + o);
                                let result = eval(i + m + j + n + k + o + l);
                                if (result === parseInt(target)) {
                                    console.log(result)
                                    console.log(target);

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
