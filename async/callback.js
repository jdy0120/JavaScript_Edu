'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoistin: var, function declaration 선언하기 전에 사용할 수 있다. 코드를 실행하면 선언문은 위로 올라가기 때문

console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');

// Synchronous callback
function printImmediately(print) { // 함수선언을 가장 위로 올린다.
    print();
}
printImmediately(() => console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout) { // 함수선언을 가장 위로 올린다.
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.clear();
// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
// 위와 같이 코드를 짜면 가독성이 떨어지며 문제가 생기면 문제를 찾기도 힘들다.