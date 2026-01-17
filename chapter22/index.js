
const fullname = 'joo'
const age = 20;

const message = 'hello' + fullname + 'age:' + age;
console.log(message);

const message2 = `hello ${fullname} age: ${age}`;
console.log(message2);

const message3 = `hello ${fullname.toUpperCase()} age: ${age + 10}`;
console.log(message3);