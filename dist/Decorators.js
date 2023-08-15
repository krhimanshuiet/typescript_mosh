"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(value) {
    return (constructor) => {
        console.log("component decorator called");
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting component in the dom");
        };
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#myProfile" })
], ProfileComponent);
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let Profile = class Profile {
};
Profile = __decorate([
    Pipe
], Profile);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Human {
    say(message) {
        console.log(" Person says " + message);
    }
}
__decorate([
    Log
], Human.prototype, "say", null);
let human = new Human();
human.say("himanshu");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Animal2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Animal2.prototype, "fullName", null);
const person = new Animal2("tiger", "king");
console.log(person.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
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
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
const newUser = new User("abcdefgh");
const WatchParameters = [];
function Watch(target, methodName, parameterIndex) {
    WatchParameters.push({ methodName, parameterIndex });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(WatchParameters);
//# sourceMappingURL=Decorators.js.map