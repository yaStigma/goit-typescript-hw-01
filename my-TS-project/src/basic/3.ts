// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let testType : string | number;

testType = "Hello world"
testType = 10;





type choice = 'enable' | 'disable';
let answer: choice;
answer = 'enable';
answer = 'disable';
// answer = 'other';