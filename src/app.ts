// function addSum(a:number, b:number ) : number {
//     return a + b;
// }

// console.log(addSum(+prompt()!, +prompt()!)); // Output: 12

var newArr : string[] = ['saad', 'hammad', 'hamza'];

console.log(newArr[0]);

interface person {
    name: string;
    age: number;
};

let person1 : person = {name: 'saad', age: 20};

console.log(person1);

enum Colors {
    Red = 1,
    Blue,
    Green
}

let myColor : Colors = Colors.Green;

console.log(myColor);

//Practice with functions

function greeting(name: string, message: string): string {
    return `Hello ${name}, ${message}`;
}

console.log(greeting('Hammad', 'How Are You?'));

function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(22,90));

function welcomeMessage(name: string = 'Guest') : string {
    return `Welcome ${name}!`;
}

console.log(welcomeMessage() );
console.log(welcomeMessage("Saad") );

function isEven(number: number) : boolean {
    return number % 2 === 0;
}

console.log(isEven(501250));
console.log(isEven(501251));

function fullName( firstName: string, lastName?: string ) : string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(fullName('Saad'));
console.log(fullName('Muhammad', 'Saad'));

function findMax(firstNum: number, secondNum: number) {
    return firstNum > secondNum ? firstNum : secondNum;
}

console.log(findMax(9.11, 9.9));
console.log(findMax(90,21));




