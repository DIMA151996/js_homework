const prompt = require('prompt-sync')();

let number = prompt("Введіть число: ");
let degree = prompt("Введіть степінь: ");

number = Number(number);
degree = Number(degree);

let pow = function() {
    let result = 1;
    for (let i = 0; i < degree; i++) {
        result *= number;
    }
    return result;
};

let result = pow();
console.log("Результат: " + result);


