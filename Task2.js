// calculator

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number", function(number1){
    rl.question("Enter second number", function(number2){
       var no1 = number1;
       var no2 = number2;
       typeof (no1 - 0);
       typeof (no2 - 0);
       console.log((number1 - 0) + (number2 - 0));
       rl.close()
   });
});


//Request input numbers//
//Output sum of input numbers//