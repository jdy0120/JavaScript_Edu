// Q1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(',');
    console.log(result);
}

// 2. make an array out of a string
{
    const fruits = '사과,키위,바나나,체리';
    const array = fruits.split(',');
    console.log(array);
}

// 3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    console.log(array.reverse());
}

// 4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    console.log(array.slice(2));
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90 // True일 경우 리턴해준다.
    ); // 90점을 가진 학생의 정보 출력
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled); // true가 나와도 계속 진행
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45,80,90,66,88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = !students.some((student) => student.score < 50); // some 조건에 만족되는 요소가 있다면 true리턴
    console.log(result);

    // students.every: 모든 학생의 점수가 조건에 맞으면 true리턴
}

// Q9. compute students' average score
{
    const result = students.reduce((prev,curr) =>  prev + curr.score , 0); // 순차적으로 값을 누적시킨다.
    console.log(result/students.length);
    // students.reduceRight: 뒤에서부터 시작
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join(', ');
    console.log(result);
}

// Q11. sort Q10.result
{
    const result = students.map((student) => student.score)
    .sort((a, b) => a - b)
    .join(', ');
    console.log(result);
}