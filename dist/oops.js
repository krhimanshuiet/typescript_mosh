"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.transactions = [];
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        var _a;
        if (amount <= 0) {
            throw new Error("Invalid Deposite");
        }
        this._balance += amount;
        (_a = this.transactions) === null || _a === void 0 ? void 0 : _a.push({ type: "deposite", amount: amount });
    }
    withdraw(amount) {
        var _a;
        if (amount <= 0) {
            throw new Error("Invalid withdrawal");
        }
        this._balance -= amount;
        (_a = this.transactions) === null || _a === void 0 ? void 0 : _a.push({ type: "withdrawal", amount: amount });
    }
    get balance() {
        return this._balance - this.calculateTax();
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("Invalid Value");
        }
        this._balance += value;
    }
    calculateTax() {
        return this._balance * 0.08;
    }
}
const account_1 = new Account(1, "Himanshu singh", 90);
account_1.deposite(90);
account_1.withdraw(20);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats["A1"] = "Mosh";
seats["A2"] = "Jhon";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
class Person {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    get fullName() {
        return this.first_name + " " + this.last_name;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, first_name, last_name) {
        super(first_name, last_name);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log("Taking Test");
    }
}
let student = new Student(1, "john", "john@gmail.com");
class Teacher extends Person {
    get fullName() {
        return "Prof" + " " + super.fullName;
    }
}
let teacher = new Teacher("himanshu", "singh");
class Principle extends Person {
    get fullName() {
        return "Principle" + " " + super.fullName;
    }
}
printNames([
    new Student(1, "ram", "kumar"),
    new Teacher("mosh", "hamadani"),
    new Principle("marry", "kaur"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("event added");
    }
    removeEvent() {
        console.log("event removed");
    }
}
//# sourceMappingURL=oops.js.map