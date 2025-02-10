"use strict";
// function addSum(a:number, b:number ) : number {
//     return a + b;
// }
// console.log(addSum(+prompt()!, +prompt()!)); // Output: 12
var newArr = ['saad', 'hammad', 'hamza'];
console.log(newArr[0]);
;
let person1 = { name: 'saad', age: 20 };
console.log(person1);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Green"] = 3] = "Green";
})(Colors || (Colors = {}));
let myColor = Colors.Green;
console.log(myColor);
//Practice with functions
function greeting(name, message) {
    return `Hello ${name}, ${message}`;
}
console.log(greeting('Hammad', 'How Are You?'));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(22, 90));
function welcomeMessage(name = 'Guest') {
    return `Welcome ${name}!`;
}
console.log(welcomeMessage());
console.log(welcomeMessage("Saad"));
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(501250));
console.log(isEven(501251));
function fullName(firstName, lastName) {
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(fullName('Saad'));
console.log(fullName('Muhammad', 'Saad'));
function findMax(firstNum, secondNum) {
    return firstNum > secondNum ? firstNum : secondNum;
}
console.log(findMax(9.11, 9.9));
console.log(findMax(90, 21));
//# sourceMappingURL=app.js.map