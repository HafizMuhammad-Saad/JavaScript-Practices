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

class BankAccount {
    private balance: number;
    private readonly accountNumber: string;
    constructor(balance: number, accountNumber: string) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    deposit(amount: number) {
        // return this.getBalance() + amount;
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        return this.balance;
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        } 
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        return this.balance;
    }   
}

const myAccount = new BankAccount(1000, '1234567890');
const my2Account = new BankAccount(9999, '1234567899');
console.log(myAccount.withdraw(200));
// console.log(myAccount.withdraw(2000)); //Errror
console.log(myAccount.deposit(2000));
my2Account.deposit(300)
my2Account.withdraw(888)
const ahmedAccount = new BankAccount(100, '1985623');
console.log(ahmedAccount.getBalance());
console.log(ahmedAccount.getAccountNumber());
console.log(ahmedAccount.deposit(999));
console.log(ahmedAccount.withdraw(1099));

abstract class Shape {
    protected color: string;
    constructor(color: string) {
        this.color = color;
    }
    abstract calculateArea(): void;
      getColor() : string {
        return this.color;
      }
} 

    class Circle extends Shape {
        radius: number;
        constructor(color: string, radius: number) {
            super(color);
            this.radius = radius;
        }
        calculateArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        width: number;
        length: number;
        constructor(color: string, width: number, length: number) {
            super(color);
            this.width = width;
            this.length = length;
        }
        calculateArea(): number {
            return this.width * this.length;
        }
    }
    const circle = new Circle('red', 4)
    console.log(circle.calculateArea());
    const rectangle = new Rectangle('green', 7, 8)
    console.log(rectangle.calculateArea());
    