'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // 무거운 프로그램을 동기적으로 처리하면 시간이 걸리기 때문에 비동기적으로 처리해야한다.
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie'); //기능을 잘 수행했다면 resolve()를 호출한다.
        //reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise // chaining
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });
// 3. Promise chaning
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) // 2
.then(num => num * 3) // 6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000); // 5
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('암탉'),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)),1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`),1000);
    });

getHen()
    .then(getEgg) // hen => getEgg(hen)
    .catch(error => {
        return 'bread';
    })
    .then(egg => cook(egg)) // cook
    .then(meal => console.log(meal))// console.log
    .catch(console.log);