// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of object
// Object = { key : value };
const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ellie',30);

// 4. Constructor function
function Person(name,age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); 

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5]
for (value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(desk, [obj1, obj2, obj3... ])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way 오브젝트 깊은 복사
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 위의 방식과 아래의 방식이 같다.
const user4 = Object.assign({},user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big