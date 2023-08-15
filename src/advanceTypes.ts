//adavnce types

// type aliases
let employeee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Himanshu",
  retire: (date: Date) => {
    console.log(date);
  },
};

// dry - do not repaeat your self

type employee = {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
};

const hks: employee = {
  id: 45,
  name: "Himanshu",
};

console.log("obj", hks);

// union types
type weight = number | string;

function kgToLbs(weight: weight): number {
  //Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

// console.log(kgToLbs(56))
// console.log(kgToLbs('56'))

// Intersection types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidgetss = Draggable & Resizable;

let textBox: UIWidgetss = {
  drag: () => {},
  resize: () => {},
};

// literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "m";

//Nullable Type

function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toLocaleUpperCase());
  } else {
    console.log("Holla");
  }
}

// greet(null)

// optional channing

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(10);
console.log(customer?.birthday?.getFullYear());

//optional element access operator

// customer?.[0]

// optional call

let log: any = null;
log?.("a");

// nullish coalescing operator
// falsy - "" , undefined , 0 , false , null

let speed: number | null | boolean | undefined = undefined;
let ride = {
  speed: speed ?? 30,
};
// console.log("speed" , ride.speed);

//type assertion
let phone_1 = document.getElementById("phone") as HTMLInputElement;
let phone_2 = <HTMLInputElement>document.getElementById("phone");

// unknown type
function render(document: unknown) {
  //narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // else if(document  instanceof WordDocument){
  //     document.move();
  //     document.fly();
  // }
}

// the never type

function reject(message:string):never{
    throw new Error(message)
}

function processEvents():never {
    while(true){
        //read a mesaage
    }
}

// reject('...')
// processEvents();

// console.log("hello world")

