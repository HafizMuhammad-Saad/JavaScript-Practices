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
function createProduct(product) { return product; }
const myProduct = createProduct({ id: 123, name: 'Saad', price: 999, category: "mobile" });
console.log(myProduct);
// Question 7: Class Inheritance - Extending a Base Class
// Create a base class Employee with name (string), salary (number), and a
// method getDetails() that returns the employee&#39;s name and salary. Then, create
// two subclasses: Developer with an additional property programmingLanguage
// (string) and an overridden getDetails() method, and Designer with an additional
// property toolUsed (string) and an overridden getDetails() method. Create
// instances of both classes and call getDetails() on each.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Name is ${this.name} and Salary is ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return this.programmingLanguage;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `${super.getDetails()}. Tool Used:${this.toolUsed}`;
    }
}
// let developer = Developer.getDetails('ahmed', 123, 'html')
let developer = new Developer('ahmed', 123, 'html');
let designer = new Designer('Ali', 1232, 'Canva');
console.log(developer.getDetails());
console.log(designer.getDetails());
// Question 8: Access Modifiers - Using Private, Protected, and Readonly
// Create a class Student with a public property name (string), a private property
// grades (array of numbers), a protected property school (string), and a readonly
// property studentID (number) that is initialized in the constructor. Implement
// methods to add a grade to the grades array and get the average grade. Try
// accessing the properties from inside and outside the class to test access
// modifiers.
class Student {
    constructor(name, grades, school, studentID) {
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentID = studentID;
    }
    addGrade() {
        let total = this.grades.reduce((a, b) => a + b, 0);
        return total / this.grades.length;
    }
}
let student = new Student('ahmed', [100, 99, 93], 'islamic', 1);
console.log(student);
console.log(student.addGrade());
function handleResponse(res) {
    if (res.success === true) {
        console.log(`Data Recieved: ${res.data}`);
    }
    else {
        console.log(`Error occured: ${res.error}`);
    }
}
handleResponse({ success: true, data: "Hello World!" });
handleResponse({ success: false, error: "Data is not found!!!" });
// Question 10: Abstract Classes - Creating and Extending
// Create an abstract class Animal with a protected property species (string), a
// constructor that sets the species, an abstract method makeSound() that returns a
// string, and a concrete method getSpecies() that returns the species. Then, create
// two classes: Dog with a makeSound() method that returns &quot;Woof!&quot;, and Cat with
// a makeSound() method that returns &quot;Meow!&quot;. Create instances of both classes,
// call makeSound(), and getSpecies().
class Animal {
    constructor(species) {
        this.speccies = species;
    }
    getSpecies() {
        return this.speccies;
    }
}
class Dog extends Animal {
    makeSound() {
        return "Woof";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
const cat = new Cat('Poli');
console.log(`Name of the cat: ${cat.getSpecies()} and the sound is ${cat.makeSound()}`);
const dog = new Dog('Sphere');
console.log(`Name of the dog: ${dog.getSpecies()} and the sound is ${dog.makeSound()}`);
// Question 11: Generics - Creating a Generic Function with Index Search
// Create a generic function findIndex&lt;T&gt;(arr: T[], value: T): number that takes an
// array of any type and a value to search for. The function should return the index
// of the value if found; otherwise, return -1. Call this function with different types of
// arrays (e.g., an array of numbers, an array of strings) and log the results..
function findIndex(arr, value) {
    return arr.findIndex((f) => value === f);
}
console.log(findIndex([1, 2, 3, 4, 5, 7, 8, 9, 0, 2, 2, 4, 3,], 5));
function useVehicle(vehicle) {
    if ('drive' in vehicle) {
        return vehicle.drive();
    }
    else {
        return vehicle.ride();
    }
}
const myCar1 = {
    drive() {
        return 'Driving a Car!';
    }
};
const myBike1 = {
    ride() {
        return 'Riding a Bike!';
    }
};
console.log(useVehicle(myCar1));
console.log(useVehicle(myBike1));
function describeEmployee(emp) {
    console.log(emp);
    return emp;
}
const fTE = { name: 'Ali', age: 10, jobTitle: 'dev' };
const fTE1 = { name: 'Asghar', age: 20, jobTitle: 'designer' };
describeEmployee(fTE);
describeEmployee(fTE1);
function makeSound(pet) {
    if ('bark' in pet) {
        console.log(pet.bark());
    }
    else {
        console.log(pet.meow());
    }
}
const myDog = {
    bark() {
        return 'Woolf!';
    }
};
const myCat = {
    meow() {
        return 'Meow!';
    }
};
makeSound(myDog);
makeSound(myCat);
class Circle1 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea1() {
        return Math.PI * this.radius * this.radius;
    }
    getType() {
        return 'Circle';
    }
}
const myCircle = new Circle1(10);
console.log(myCircle.calculateArea1());
console.log(myCircle.getType());
//# sourceMappingURL=app.js.map