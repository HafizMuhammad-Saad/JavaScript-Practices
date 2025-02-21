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
    
    // Q. 6
//     Create an interface called Product with the following properties: id (number),
// name (string), price (number), and category (string). Then, create a function
// createProduct that accepts an object of type Product and returns it. Finally,
// create a new product object and pass it to createProduct().
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;

}
function createProduct(product: Product)  { return product }

const myProduct = createProduct({id: 123, name: 'Saad', price: 999, category: "mobile"})
console.log(myProduct);

// Question 7: Class Inheritance - Extending a Base Class
// Create a base class Employee with name (string), salary (number), and a
// method getDetails() that returns the employee&#39;s name and salary. Then, create
// two subclasses: Developer with an additional property programmingLanguage
// (string) and an overridden getDetails() method, and Designer with an additional
// property toolUsed (string) and an overridden getDetails() method. Create
// instances of both classes and call getDetails() on each.

class Employee {
    name: string;
    salary: number;
    constructor(name: string, salary:number) {
        this.name = name
        this.salary = salary
    }
    getDetails(){
        return `Name is ${this.name} and Salary is ${this.salary}`
    }
}

class Developer extends Employee {
    programmingLanguage: string;
    constructor( name: string, salary: number, programmingLanguage: string) {
        super(name, salary)
        this.programmingLanguage = programmingLanguage
    }
    getDetails(){
        return this.programmingLanguage
    }
}

class Designer extends Employee {
    toolUsed: string;
    constructor( name: string, salary: number, toolUsed: string) {
        super(name, salary)
        this.toolUsed = toolUsed
    }
    getDetails(){
        return `${super.getDetails()}. Tool Used:${this.toolUsed}`
    }
}


// let developer = Developer.getDetails('ahmed', 123, 'html')
let developer = new  Developer ('ahmed', 123, 'html')
let designer = new  Designer ('Ali', 1232, 'Canva')

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
    public name : string;
    private grades : number[];
    protected school : string;
    readonly studentID : number;

    constructor(name: string, grades: number[], school: string, studentID: number) {
        this.name = name
        this.grades = grades
        this.school = school
        this.studentID = studentID
    }
    addGrade() {
        let total =  this.grades.reduce((a,b) => a + b , 0)
        return total / this.grades.length
    }
}

let student = new Student('ahmed', [100,99,93],  'islamic', 1);
console.log(student);
console.log(student.addGrade());











// Question 9: Union Types and Type Guards
// Create a type Response that can be either { success: true, data: string } or {
// success: false, error: string }. Then, write a function handleResponse that takes
// an argument of type Response and logs &quot;Data received: {data}&quot; if success is

// true, and logs &quot;Error occurred: {error}&quot; if success is false. Use type guards to
// differentiate between the two cases.


type Response1 =  { success: true, data: string } | { success: false, error: string }

function handleResponse(res : Response1) {
    if (res.success === true) {
        console.log(`Data Recieved: ${res.data}`);
        
    } else {
        console.log(`Error occured: ${res.error}`);
        
    }
    
}
handleResponse({success: true, data: "Hello World!"})
handleResponse({success: false, error: "Data is not found!!!"})











// Question 10: Abstract Classes - Creating and Extending
// Create an abstract class Animal with a protected property species (string), a
// constructor that sets the species, an abstract method makeSound() that returns a
// string, and a concrete method getSpecies() that returns the species. Then, create
// two classes: Dog with a makeSound() method that returns &quot;Woof!&quot;, and Cat with
// a makeSound() method that returns &quot;Meow!&quot;. Create instances of both classes,
// call makeSound(), and getSpecies().

abstract class Animal {
    protected speccies : string;
    constructor(species: string) {
        this.speccies = species
    }
    abstract makeSound() : string
     getSpecies() {
        return this.speccies;
     }
}
class Dog extends Animal {
    makeSound(): string {
        return "Woof"
    }
}
class Cat extends Animal {
    makeSound(): string {
        return "Meow"
    }
}

const cat = new Cat('Poli')
console.log(`Name of the cat: ${cat.getSpecies()} and the sound is ${cat.makeSound()}`);

const dog = new Dog('Sphere');
console.log(`Name of the dog: ${dog.getSpecies()} and the sound is ${dog.makeSound()}`);

// Question 11: Generics - Creating a Generic Function with Index Search
// Create a generic function findIndex&lt;T&gt;(arr: T[], value: T): number that takes an
// array of any type and a value to search for. The function should return the index
// of the value if found; otherwise, return -1. Call this function with different types of
// arrays (e.g., an array of numbers, an array of strings) and log the results..

function findIndex<T>(arr: T[], value: T): number {
   return arr.findIndex((f) => value === f)
}
console.log(findIndex([1,2,3,4,5,7,8,9,0,2,2,4,3,], 5));


// Question 12: Type Guards - Checking Object Types
// Create two interfaces: Car with a property drive() that returns &quot;Driving a car!&quot;,
// and Bike with a property ride() that returns &quot;Riding a bike!&quot;. Then, create a
// function useVehicle(vehicle: Car | Bike) that calls drive() if it&#39;s a Car and calls
// ride() if it&#39;s a Bike, using a type guard to differentiate between the two. Create
// instances of Car and Bike, and pass them to useVehicle().

interface Car1 {
    drive(): string
}
interface Bike1 {
    ride(): string
}

function useVehicle(vehicle : Car1 | Bike1) {
    if('drive' in vehicle) {
     return vehicle.drive()
    } else {
      return vehicle.ride()
    }
}
const myCar1 : Car1 = {
    drive()  {
        return 'Driving a Car!'
    }
}
const myBike1 : Bike1 = {
    ride() {
        return 'Riding a Bike!'
    }
}


console.log(useVehicle(myCar1))
console.log(useVehicle(myBike1))



// Question 13: Interface Intersection - Merging Multiple Interfaces
// Create two interfaces: Person with properties name (string) and age (number),
// and Employee with property jobTitle (string). Then, create a new type
// FullTimeEmployee that combines both interfaces using intersection (&amp;). Write a
// function describeEmployee(emp: FullTimeEmployee) that logs the name, age,
// and jobTitle. Create a FullTimeEmployee object and pass it to the function.

interface Person {
    name: string
    age: number

}

interface Employee1 {
    jobTitle: string

}
type FullTimeEmployee = Person & Employee1 

function describeEmployee(emp:FullTimeEmployee) {
    console.log(emp);
    return emp
    
}

const fTE: FullTimeEmployee = {name: 'Ali', age: 10, jobTitle: 'dev'}
const fTE1: FullTimeEmployee = {name: 'Asghar', age: 20, jobTitle: 'designer'}
describeEmployee(fTE)
describeEmployee(fTE1)






// Question 14: Interface Union - Handling Multiple Object Types
// Create two interfaces: Dog with a method bark() returning &quot;Woof!&quot;, and Cat with
// a method meow() returning &quot;Meow!&quot;. Then, create a type Pet that can be either a
// Dog or a Cat. Write a function makeSound(pet: Pet) that calls bark() if it&#39;s a Dog

// and calls meow() if it&#39;s a Cat, using a type guard to determine the correct method.
// Create instances of Dog and Cat, and call makeSound() on both.

interface DogNew {
    bark() : string 
}
interface CatNew {
    meow() : string
}

type Pet = CatNew | DogNew

function makeSound(pet:Pet) {
    if ( 'bark' in pet ) {
       console.log(pet.bark());
       
    } else {
        console.log(pet.meow())
    }
}

const myDog: DogNew = {
    bark() {
        return 'Woolf!' 
    }
}
const myCat: CatNew = {
    meow() {
        return 'Meow!' 
    }
}
makeSound(myDog);
makeSound(myCat);




// Question 15: Implementing an Interface in a Class
// Create an interface Shape with a method calculateArea(): number and a method
// getType(): string. Then, create a class Circle that implements Shape with a
// property radius (number), implements calculateArea() to return the area of the
// circle, and implements getType() to return &quot;Circle&quot;. Create an instance of Circle,
// set the radius, and call both methods.

interface Shape1 {
    calculateArea1() : number
    getType(): string
}
class Circle1 implements Shape1 {
    radius: number
    constructor(radius: number) {
        this.radius = radius
    }
    calculateArea1() {
        return Math.PI * this.radius * this.radius
    }
    getType() {
        return 'Circle'
    }
}

const myCircle = new Circle1(10)
console.log(myCircle.calculateArea1());
console.log(myCircle.getType());

