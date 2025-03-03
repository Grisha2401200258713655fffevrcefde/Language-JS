// Задание 1 — Числа от 1 до 10
// Создайте цикл for, который выводит в консоль числа от 1 до 10.

for (let i = 0; i < 11; i++ ){
    console.log(`число ${i} `);
}


// Задание 2 — Таблица умножения

//Напишите цикл while для вывода таблицы умножения числа 5 (от 1 до 10). Например: 5 x 1 = 5, 5 x 2 = 10 ... 5 x 10 = 50

let counter =1;
while (counter <= 10) {
    console.log(`5 x ${counter} = ${5 * counter}`);
    counter++;
}

// 3 задание

let randomNumber;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`загадано: {randomNumber} $`);

} while (randomNumber !==7);

// 4 задание

let number = 1;

do{
    console.log(`число ${number}`);
    number = number * 2;
} while (number <=100);