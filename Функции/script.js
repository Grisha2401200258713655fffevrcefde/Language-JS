// Домашнее задание:

// Задание №1 — Сложение числа и строки

//Напишите функцию combineValue, которая принимает два параметра: number (число) и text (строка).
//Функция должна возвращать результат в виде строки, где число и строка объединены через пробел.
//Дополнительное условие: Если число меньше 0, функция должна возвращать строку "Некорректное значение".
//Пример к заданию №1: combineValue(5, "яблок") // "5 яблок" или combineValue(-3, "яблок") // "Некорректное значение"


//Задание №2 — Умножение числа на два

//Напишите функцию doubleNumber, которая принимает один параметр: number (число)
//Функция должна возвращать результат умножения этого числа на 2.


//Задание №3 — Преобразование строки в число

//Напишите функцию convertToNumber, которая принимает один параметр: text (строка).
//Функция должна возвращать результат преобразования строки в число.
//Дополнительное условие: Вы можете протестировать функцию, передав разные строки с числами. Например, "123" или "456".
//Подсказка: Используйте встроенную функцию Number() для преобразования строки в число.

//Пример к заданию №3: convertToNumber("42"); // 42



//Задание №4 — Функция с массивом

//Напишите функцию findMaxNumber, которая принимает массив чисел numbers.
//Функция должна находить и возвращать наибольшее число в массиве.
//Если массив пустой, функция должна возвращать строку "Массив пустой".
//Пример к заданию №4: findMaxNumber([1, 5, 9, 2]) → 9 или findMaxNumber([]) → "Массив пустой"

// 1 задание

function combineValue(number,text){
    if (number <=0){
        console.log("число меньше 0")
    } else {
        console.log(number + " " + text)
    }

    
}
// вызов функции с аргументом
combineValue(21, +  "grisha " )

// 2 задание
function doubleNumber(a){
    console.log(a*2);
}
doubleNumber(5)

// 3 задание

function convertToNumber(text){
    let number = Number(text);
    if (isNaN(number)){
        console.log("ошибка введено не число")
    } else {
        console.log(number);
    }

}

convertToNumber('45');
convertToNumber("jjdf");



// 4 задание

function findMaxNumber(numbers){
    if (numbers.length ===0){
        console.log("массив пуст")
    } else{
        let maxnum= Math.max(...numbers);
        console.log(maxnum);
        
    }
}

findMaxNumber([1,3,5,7,9,11,13,15,17,19]);
findMaxNumber([]);
