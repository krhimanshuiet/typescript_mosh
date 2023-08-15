"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => n.toExponential());
let user = [1, 'Himanshu kumar singh'];
let mySize = 4;
function calculateTax(income, tax = 2023) {
    if (tax < 2022) {
        return income - tax * 0.8;
    }
    return income - tax * 0.6;
}
const calculateTax2 = (income) => {
    return income + 98;
};
let employee = {
    id: 1,
    name: 'Himanshu',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=BuiltInTypes.js.map