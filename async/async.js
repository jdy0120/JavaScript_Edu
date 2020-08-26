// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() { // async를 함수 앞에 쓰면 promise로 바꿔준다.
    // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(2000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}
/* 1
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
*/
/* 2
async function pickFruits() { // 3초 awit 2번
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
*/ //3

async function pickFruits() { // 2초
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() { // 위처럼 await하여 데이터를 받아오는것이 아니라 promise의 API를 사용하여 받아오는게 정석
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]); // race : 먼저 들어온 데이터를 출력해준다.
}
pickOnlyOne().then(console.log);