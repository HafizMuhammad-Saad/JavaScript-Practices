"use strict";
// function addSum(a:number, b:number ) : number {
//     return a + b;
// }
function createUser(user) {
    return user;
}
const newUser = createUser({
    id: 100,
    name: 'Muhammad Saad',
    email: 'saad@example.com',
    isActive: false,
});
const newUser1 = createUser({
    id: 101,
    name: 'Faisal',
    email: 'faisal@example.com',
    isActive: true,
});
console.log(newUser);
console.log(newUser1);
function processInput(arg) {
    if (typeof arg === 'number') {
        console.log(typeof arg);
        let converted = arg.toString();
        console.log(typeof converted);
        return "number: " + arg.toString();
    }
    else if (typeof arg === 'string') {
        return 'string: ' + arg;
    }
}
console.log(processInput(123));
console.log(processInput("ali"));
class Vehicle {
    constructor(carmake, carmodel, caryear) {
        this.make = carmake;
        this.model = carmodel;
        this.year = caryear;
    }
    getInfo() {
        return this.model;
    }
}
class Car extends Vehicle {
    constructor(model, make, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        // return this.doors.toString();
        return `${super.getInfo()}, Doors: ${this.doors}`;
    }
}
class Motercycle extends Vehicle {
    constructor(model, make, year, hasSideCar) {
        super(make, model, year);
        this.hasSideCar = true;
        this.hasSideCar = hasSideCar;
    }
    getInfo() {
        // return this.hasSideCar.toBoolean()
        return `${super.getInfo()}, Has Side Car: ${this.hasSideCar}`;
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
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    deposit(amount) {
        // return this.getBalance() + amount;
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        return this.balance;
    }
    withdraw(amount) {
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
my2Account.deposit(300);
my2Account.withdraw(888);
const ahmedAccount = new BankAccount(100, '1985623');
console.log(ahmedAccount.getBalance());
console.log(ahmedAccount.getAccountNumber());
console.log(ahmedAccount.deposit(999));
console.log(ahmedAccount.withdraw(1099));
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color, width, length) {
        super(color);
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.width * this.length;
    }
}
const circle = new Circle('red', 4);
console.log(circle.calculateArea());
const rectangle = new Rectangle('green', 7, 8);
console.log(rectangle.calculateArea());
//# sourceMappingURL=app.js.map