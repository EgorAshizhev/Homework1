// hw-2
// // exercise 1
// {
//     let a = 10;
//     alert(a);
//     a = 20;
//     alert(a);
// }
// // exercise 2
// const iPhone = 2007;
// alert(iPhone)
// //  exercise 3
// let JavaCreator = "Brendan Eich";
// alert(JavaCreator)
// // exercise 4
// {
//     let a = 10;
//     let b = 2;

//     alert("Сумма: " + (a + b));
//     alert("Разность: " + (a - b));
//     alert("Произведение: " + (a * b));
//     alert("Частное: " + (a / b));
//     //  exercise 5
//     let result = 2 ** 5;
//     alert(result)
// }
// // exercise 6
// {
//     let a = 9;
//     let b = 2;
//     let remainder = a % b;
//     alert("Остаток от деления " + a + " на " + b + " равен " + remainder);
// }
// // exercise 7
// {
//     let num = 1;
//     num += 5;
//     num -= 3;
//     num *= 7;
//     num /= 3;
//     num++;
//     num--;
//     alert(num);
// }
// // exercise 8
// let age = prompt('Сколько вам лет?');
// alert(age);
// // exercise 9
// const user = {
//     name: "Tadeo",
//     age: 28,
//     isAdmin: true
// };
// // exercise 10
// const userName = prompt("Пожалуйста, введите ваше имя:");
// alert(`Привет, ${userName}!`);
// _______________hw-3_________
// // exercise 1
// let password = 'пароль';

// let userInput = prompt('Введите пароль');

// if (userInput === password) {
//         alert('Пароль введен верно');
// } else {
//         alert('Пароль введен неправильно');
// }
// // exercise 2
// let c = 0;

// if (c > 0 && c < 10) {
//         console.log('верно');
// } else {
//         console.log('неверно');
// }
// // exercise 3
// let e = 145
// let d = 15
// if ((d > 100 || e > 100)) {
//         console.log('верно');
// } else {
//         console.log('неверно')
// }
// // exercise 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));
// // exercise 5
// var monthNumber = prompt("Введите номер месяца");
// switch (monthNumber) {
//         case '1':
//                 console.log('январь');
//                 break;
//         case '2':
//                 console.log('февраль');
//                 break;
//         case '3':
//                 console.log('март');
//                 break;
//         case '4':
//                 console.log('апрель');
//                 break;
//         case '5':
//                 console.log('май');
//                 break;
//         case '6':
//                 console.log('июнь');
//                 break;
//         case '7':
//                 console.log('июль');
//                 break;
//         case '8':
//                 console.log('август');
//                 break;
//         case '9':
//                 console.log('сентябрь');
//                 break;
//         case '10':
//                 console.log('октябрь');
//                 break;
//         case '11':
//                 console.log('ноябрь');
//                 break;
//         case '12':
//                 console.log('декабрь');
//                 break;
//         default:
//                 console.log('месяц не найден(ERROR)');
// }
// ______________hw-4_____________      
// exrescise 1
let i = 0;
while (i < 2) {
        console.log('Привет');
        i++;
}
// exrescise 2
let a = 1;
while (a <= 5) {
        console.log(a);
        a++;
}
// exrescise 3
let b = 7;
while (b <= 22) {
        console.log(b);
        b++;
}
// exrescise 4
let obj = {
        "Коля": "200",
        "Вася": "300",
        "Петя": "400"
};

for (let key in obj) {
        console.log(`${key} — сумма ${obj[key]} долларов`);
}
// exercise 5
let n = 1000;
let num = 5;

while (n >= 50) {
        n = n / 2;
        num++;
}

console.log("Результат:", n);
console.log("Количество итераций:", num);
// exercise 6
let firstFriday = 3;
let day = firstFriday;

while (day <= 31) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        day += 7;
}

//____________hw-5____________

// Задиние по макету
function startGamenumberGuess() {
        const secretNumber = Math.floor(Math.random() * 100) + 1;

        let guess = null;

        while (true) {
                const input = prompt("Угадайте число от 1 до 100");

                if (input === null) {
                        alert("Игра отменена.");
                        return;
                }

                guess = Number(input);

                if (Number.isNaN(guess)) {
                        alert("Введите число.");
                        continue;
                }

                if (guess > secretNumber) {
                        alert("Загаданное число меньше");
                } else if (guess < secretNumber) {
                        alert("Загаданное число больше");
                } else {
                        alert("Вы угадали!");
                        return;
                }
        }
}
// Задание 1
function getMin(a, b) {
        return a < b ? a : b;
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));
console.log(getMin(10, 25));
console.log(getMin(3, -5));

// Задание 2
function checkNumber(n) {
        if (n % 2 === 0) {
                return 'Число четное';
        } else {
                return 'Число нечетное';
        }
}

console.log(checkNumber(10));
console.log(checkNumber(7));
// Задание 3
function printSquare(n) {

        console.log(n * n);
}

printSquare(5);

function getSquare(n) {
        return n * n;
}

let result = getSquare(6);
console.log(result);
//Задание 4

function askAge() {
        const input = prompt("Сколько вам лет?");

        if (input === null || input.trim() === "") {
                alert("Вы ввели неправильное значение");
                return;
        }

        const age = Number(input.trim());

        if (!Number.isFinite(age)) {
                alert("Вы ввели неправильное значение");
                return;
        }

        if (age < 0) {
                alert("Вы ввели неправильное значение");
        } else if (age >= 0 && age <= 12) {
                alert("Привет, друг!");
        } else {
                alert("Добро пожаловать!");
        }
}

askAge();
// Задание 5
function multiplyNumbers(a, b) {

        const num1 = Number(a);
        const num2 = Number(b);

        if (isNaN(num1) || isNaN(num2)) {
                return 'Одно или оба значения не являются числом';
        }

        return num1 * num2;
}

console.log(multiplyNumbers(5, 10));
console.log(multiplyNumbers("7", "3"));
console.log(multiplyNumbers(4, "abc"));
console.log(multiplyNumbers("xyz", 2));

//задиние 6
function cubeNumber() {

        const input = prompt("Введите число:");

        const n = Number(input);

        if (Number.isNaN(n)) {
                alert("Переданный параметр не является числом");
        }

        const cube = Math.pow(n, 3);

        alert(`${n} в кубе равняется ${cube}`);
        return;
}

cubeNumber();
// Задание 7
const circle1 = {
        radius: 5,
        getArea() {
                return Math.PI * this.radius ** 2;
        },
        getPerimeter() {
                return 2 * Math.PI * this.radius;
        }
};

const circle2 = {
        radius: 10,
        getArea() {
                return Math.PI * this.radius ** 2;
        },
        getPerimeter() {
                return 2 * Math.PI * this.radius;
        }
};

// hw-6
// Задание по макету
function simpleArithmetic() {
    while (true) {
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;

        const ops = ["+", "-", "*", "/"];
        const op = ops[Math.floor(Math.random() * ops.length)];

        if (op === "/") {
        
            while (num1 % num2 !== 0) {
                num1 = Math.floor(Math.random() * 20) + 1;
                num2 = Math.floor(Math.random() * 20) + 1;
            }
        }
        
        let correct;
        if (op === "+") correct = num1 + num2;
        if (op === "-") correct = num1 - num2;
        if (op === "*") correct = num1 * num2;
        if (op === "/") correct = num1 / num2;

        const input = prompt(`${num1} ${op} ${num2} = ? (Отмена — выйти из игры)`);

        if (input === null) break;

        const userAnswer = Number(input);

        if (userAnswer === correct) {
            alert("Верно!");
        } else {
            alert(`Неверно. Правильный ответ: ${correct}`);
        }
    }
}


// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 10) break;
}

// Задание 2
const arrIndex = [1, 5, 4, 10, 0, 3];

const index = arrIndex.indexOf(4);

console.log(index);

// Задание 3
const arrJoin = [1, 3, 5, 10, 20];

console.log(arrJoin.join(' '));

// Задание 4
const resultMassive = [];

for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
                row.push(1);
        }
        resultMassive.push(row);
}

console.log(resultMassive);

// Задание 5
const arrFive = [1, 1, 1];

arrFive.push(2, 2, 2);

console.log(arrFive);

// Задание 6
let arrDelete = [9, 8, 7, 'a', 6, 5];

// сортировка
arrDelete = arr.sort();

// удаление 'a'
arrDelete = arr.filter(item => item !== 'a');

console.log(arrDelete);
// Задание 7
const arrGuess = [9, 8, 7, 6, 5];

const userInput = prompt("Введите число");

const numGuess = Number(userInput);

if (arrGuess.includes(numGuess)) {
        alert("Угадал");
} else {
        alert("Не угадал");
}

// Задание 8
const str = 'abcdef';

const reversed = str.split('').reverse().join('');

console.log(reversed);

// Задание 9
const arrSpread = [[1, 2, 3], [4, 5, 6]];

const flattened = [].concat(...arrSpread);

console.log(flattened);

// Задание 10
const arrTen = [];

for (let i = 0; i < 10; i++) {
    arrTen.push(Math.floor(Math.random() * 10) + 1);
}

for (let i = 0; i < arrTen.length - 1; i++) {
    console.log(arrTen[i] + arrTen[i + 1]);
}
// Задание 11
function squareArray(arr) {
        return arr.map(num => num ** 2);
}

const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);

console.log(squares);

// Задание 12
function getLengths(arr) {
        return arr.map(str => str.length);
}

const words = ["apple", "banana", "kiwi"];
const lengths = getLengths(words);

console.log(lengths);

// Задание 13
function getNegativeNumbers(arr) {
        return arr.filter(num => num < 0);
}

const numbersInnit = [3, -2, 5, -7, 0, 4];
const negatives = getNegativeNumbers(numbersInnit);

console.log(negatives);

// Задание 14

const arrNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = arrNumbers.filter(num => num % 2 === 0);

console.log("Исходный массив:", arrNumbers);
console.log("Четные числа:", evenNumbers);

// Задание 15
const arrMath = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = arrMath.reduce((acc, num) => acc + num, 0);

const average = sum / arrMath.length;

console.log("Массив:", arrMath);
console.log("Среднее арифметическое:", average);




