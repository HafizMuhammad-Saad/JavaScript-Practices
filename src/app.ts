// function addSum(a:number, b:number ) : number {
//     return a + b;
// }

// console.log(addSum(+prompt()!, +prompt()!)); // Output: 12

// var newArr : string[] = ['saad', 'hammad', 'hamza'];

// console.log(newArr[0]);

// interface person {
//     name: string;
//     age: number;
// };

// let person1 : person = {name: 'saad', age: 20};

// console.log(person1);

// enum Colors {
//     Red = 1,
//     Blue,
//     Green
// }

// let myColor : Colors = Colors.Green;

// console.log(myColor);

// //Practice with functions

// function greeting(name: string, message: string): string {
//     return `Hello ${name}, ${message}`;
// }

// console.log(greeting('Hammad', 'How Are You?'));

// function multiply(a: number, b: number): number {
//     return a * b;
// }
// console.log(multiply(22,90));

// function welcomeMessage(name: string = 'Guest') : string {
//     return `Welcome ${name}!`;
// }

// console.log(welcomeMessage() );
// console.log(welcomeMessage("Saad") );

// function isEven(number: number) : boolean {
//     return number % 2 === 0;
// }

// console.log(isEven(501250));
// console.log(isEven(501251));

// function fullName( firstName: string, lastName?: string ) : string {
//     return lastName ? `${firstName} ${lastName}` : firstName;
// }
// console.log(fullName('Saad'));
// console.log(fullName('Muhammad', 'Saad'));

// function findMax(firstNum: number, secondNum: number) {
//     return firstNum > secondNum ? firstNum : secondNum;
// }

// console.log(findMax(9.11, 9.9));
// console.log(findMax(90,21));





interface User {
    id: number;
    name: string;
    email:string;
    isActive: boolean;
}

function createUser(user : User) {
    return user
}

const newUser = createUser( {
    id: 100,
    name: 'Muhammad Saad',
    email: 'saad@example.com',
    isActive: false,
 
})
const newUser1 = createUser({
    id: 101,
    name: 'Faisal',
    email: 'faisal@example.com',
    isActive: true,
 });

 console.log(newUser);
 console.log(newUser1);

 type input = string | number;

function processInput(arg: input)  {
    if (typeof arg === 'number') {
        console.log(typeof arg);
        let converted = arg.toString();
        console.log(typeof converted);
        return "number: " + arg.toString()
    } else if (typeof arg === 'string') {        
        return 'string: ' + arg
    }
}

console.log(processInput(123));
console.log(processInput("ali"));

class Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(carmake: string, carmodel: string, caryear: number) {
        this.make = carmake;
        this.model = carmodel;
        this.year = caryear;
    }
    getInfo() : string {
        return this.model
    }
}
class Car extends Vehicle {
    doors: number;
    constructor(model: string,make: string, year: number, doors: number) {
        super(make, model, year);
        this.doors = doors;   
    }
    getInfo(): string {
        // return this.doors.toString();
        return `${super.getInfo()}, Doors: ${this.doors}`
    }

}
class Motercycle extends Vehicle {
    hasSideCar: boolean = true;
    constructor(model: string,make: string, year: number, hasSideCar: boolean) {
        super(make, model, year);   
        this.hasSideCar = hasSideCar;
    }

    getInfo(): string {
        // return this.hasSideCar.toBoolean()
        return `${super.getInfo()}, Has Side Car: ${this.hasSideCar}`
    }
}

const myCar = new Car('Toyota', 'Camry', 2020, 4);
const yourCar = new Car('Civic', 'honda', 2024, 1);

const myMotercycle = new Motercycle('Yamaha', 'YZF-R1', 2018, true);
const yourMotercycle = new Motercycle('Unique', 'KDZ-4192', 2009, false);

console.log(yourMotercycle.getInfo());
console.log(myMotercycle.getInfo());

console.log(myCar.getInfo());
console.log(yourCar.getInfo());
