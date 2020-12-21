 'use strict';
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

const result = [2]; //Первое простое число всегда будет = 2
let count = 100;
let i = 3; // 0 и 1 не может быть простым числом, а 2 простое, значит можно начинать с 3

while (i<count) {
    for (let j = 0; j<result.length; j++) {
        if (i%result[j] === 0) {
            break // число которое поделится без остатка на любое число из нашего массива нас не интересует
        }
        if ((j+1) === result.length) {
            result.push(i); // Если break не сработал и массив закончился - значит это простое число
        }
    }
        i++;
}

console.log(result)

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
//     Предположим, есть сущность корзины.
//     Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const myBasket = [
    ['name1', 1, 100 ],
    ['name2', 2, 200 ],
    ['name3', 3, 300 ],
];

function countBasketPrice(someArray) {
    let result = 0;
    for (let i = 0; i<someArray.length; i++) {
        result += someArray[i][1]*someArray[i][2];
    }
    return result
}

console.log(countBasketPrice(myBasket))

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}

for (let i = 0; i < 10; console.log(i), i++) {}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

function xRecursion (element, count) {
    if (!count) {
        return element
    }
    return element + xRecursion(element, count-1)
}

const countX = 20;
let i = 0;
while (i <= countX) {
    console.log(xRecursion('x', i));
    i++;
}
