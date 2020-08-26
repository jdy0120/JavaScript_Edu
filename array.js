'use strict';

// Array

// 1. Dclaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index,array) { // function
    console.log(fruit);
    console.log(index);
    console.log(array);
});

fruits.forEach((fruit,index) => console.log(fruit,index)); // arrow function

// 4. Addtion, deletion, copy
// add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);

// pop: remove and item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기','망고');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift와 unshift는 느리다.

// splice: remove an item by index position
fruits.push('바나나','체리','자두');
console.log(fruits);
fruits.splice(1,2); // 1번째 인덱스부터 2개
console.log(fruits);
fruits.splice(1,1,'사과','수박'); // 1번째 인덱스부터 1개 지우고 [사과,수박]을 삽입해라

// combine two arrays
const fruits2 = ['무화과','코코넛'];
const newFruits = fruits.concat(fruits2); // concat은 python에서 extend와 비슷하다. 배열에 다른 배열을 추가
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박')); // 수박의 인덱스 출력
console.log(fruits.includes('수박')); // 수박이 있는지 출력 boolean

// lastIndexOf
fruits.push('사과');
console.log(fruits);
console.log(fruits.lastIndexOf('사과')) // 중복되는 인자가 2개 있을 경우 뒤에 있는 인자의 인덱스 출력

