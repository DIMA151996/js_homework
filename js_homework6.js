const prompt = require('prompt-sync')();

function Probability(count) {
    let dobleCounter = 0; 
    let oddCounter = 0; 

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            dobleCounter++;
        } else {
            oddCounter++; 
        }
    }

    let doblePercent = (dobleCounter / count) * 100; 
    let oddPercent = (oddCounter / count) * 100; 

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + dobleCounter); 
    console.log("Непарних чисел: " + oddCounter); 
    console.log("Відсоток парних до непарних: " + doblePercent.toFixed(5) + "% парних, " + oddPercent.toFixed(5) + "% непарних");
    // toFixed(5) бо при значенны 10000000 не буде більше шести чисел після коми
}

let randGen = prompt("cкільки випадкових чисел потрібно згенерувати ");

//додав перевірку введеного значеня, щрб воно було числом, бцло більше 0 і не було більше 100000, щоб не перегружати хост
if (!isNaN(randGen) && randGen > 0) {
    if (randGen > 10000000) {
        console.log("я буду довго рахувати, зменш число");
    } else {
        Probability(parseInt(randGen)); 
    }
} else {
    console.log("некоректно задана умова");
}
