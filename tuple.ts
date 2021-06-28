let x: [string, number];

x = ['hello', 28];

// tuple 타입은 배열의 길이도 맞춰야하고 타입의 자리도 똑같이 작성해야함
// x = [10, 'hello'];

// x 배열은 길이가 2이므로 x[1]까지만 값을 할당할 수 있다.
// x[2] = 'hi';

const person: [string, number] = ['JaeHong', 28];
const [first, second] = person;
console.log(person);
console.log([first, second]);
