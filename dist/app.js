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
//# sourceMappingURL=app.js.map