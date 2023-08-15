"use strict";
var _a;
let employeee = {
    id: 1,
    name: "Himanshu",
    retire: (date) => {
        console.log(date);
    },
};
const hks = {
    id: 45,
    name: "Himanshu",
};
console.log("obj", hks);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toLocaleUpperCase());
    }
    else {
        console.log("Holla");
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(10);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = undefined;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone_1 = document.getElementById("phone");
let phone_2 = document.getElementById("phone");
function render(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
//# sourceMappingURL=advanceTypes.js.map