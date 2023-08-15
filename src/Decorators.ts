//Decorators
// class decorators

type ComponentOptions = {
  selector: string;
};

function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting component in the dom");
    };
  };
}

// function Component(constructor:Function){
//     console.log('component decorator called');
//     constructor.prototype.uniqueId  = Date.now();
//     constructor.prototype.insertInDOM = () => {
//         console.log("Inserting component in the dom");
//     }

// }

@Component({ selector: "#myProfile" }) //parametrised decorators
class ProfileComponent {}

// decorator component

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Pipe
class Profile {}

// method decorator

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Human {
  @Log
  say(message: string) {
    console.log(" Person says " + message);
  }
}

let human = new Human();

human.say("himanshu");

//accessor decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Animal2 {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Animal2("tiger", "king");

console.log(person.fullName);

//property decorator

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`${propertyName} must have length of ${length}`);
        }
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const newUser = new User("abcdefgh");
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};
//parameter decorator
const WatchParameters: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  WatchParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(WatchParameters);
