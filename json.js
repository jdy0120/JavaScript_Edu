// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }, // json으로 stringify를 하면 포함되지 않는다 데이터만 포함되면 함수,symbol등은 포함되지 않는다.
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name'],); // 원하는 property만 보내진다.
console.log(json);

json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value ${value}`);
    return value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // json으로 stringify를 하면 포함되지 않는다 데이터만 포함되면 함수,symbol등은 포함되지 않는다.

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // parse한 obj의 birthDate는 자료형이 string이기 때문에 오류가 나온다.
console.log(obj.birthDate);

const obj1 = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // parse된 birthDate의 값을 Date()함수에 넣어 리턴하면 .getDate()를 다시 사용할 수 있게 된다.
});
console.log(obj1.birthDate.getDate());
