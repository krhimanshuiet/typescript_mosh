// object oriented programming language
/*
procedural
functional
object oriented
event driven
aspect oriented
*/

//creating classes - blueprint

class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  nickname?: string;
  transactions?: { type: string; amount: number }[] = [];

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Deposite");
    }
    this._balance += amount;
    this.transactions?.push({ type: "deposite", amount: amount });
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal");
    }
    this._balance -= amount;
    this.transactions?.push({ type: "withdrawal", amount: amount });
  }

  get balance(): number {
    //getter
    return this._balance - this.calculateTax();
  }

  set balance(value: number) {
    // setter
    if (value <= 0) {
      throw new Error("Invalid Value");
    }
    this._balance += value;
  }

  private calculateTax(): number {
    return this._balance * 0.08;
  }
}

// creaeting objects
const account_1 = new Account(1, "Himanshu singh", 90);
account_1.deposite(90);
account_1.withdraw(20);
// console.log(account_1.balance);
// access control keywords

/*
public 
private
protected
*/

// parameter properties

// index signature

class SeatAssignment {
  //index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats["A1"] = "Mosh";
seats["A2"] = "Jhon";

// console.log(seats);

// static member

class Ride {
  private static _activeRides: number = 0;

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

const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();

// console.log(Ride.activeRides);

//Inheritance

class Person {
  first_name: string;
  last_name: string;

  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  get fullName() {
    return this.first_name + " " + this.last_name;
  }

  protected walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, first_name: string, last_name: string) {
    super(first_name, last_name);
  }

  takeTest() {
    this.walk();
    console.log("Taking Test");
  }
}

let student = new Student(1, "john", "john@gmail.com");

// methid overridding

class Teacher extends Person {
  override get fullName() {
    return "Prof" + " " + super.fullName;
  }
}

let teacher = new Teacher("himanshu", "singh");

// console.log(teacher.fullName);

//polymorphism
class Principle extends Person {
  override get fullName() {
    return "Principle" + " " + super.fullName;
  }
}

printNames([
  new Student(1, "ram", "kumar"),
  new Teacher("mosh", "hamadani"),
  new Principle("marry", "kaur"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// private vs protected memebers
//abstract class and methods

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void; // abstract methods
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

//Interfaces - shape of an object

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvennt(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("event added");
  }

  removeEvent(): void {
    console.log("event removed");
  }
}
