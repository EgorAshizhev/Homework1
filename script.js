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