"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair(1, "himanshu");
let pair2 = new KeyValuePair("1", "himanshu");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let numberArray = ArrayUtils.wrapInArray(20);
console.log(numberArray);
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Member extends Animal {
}
function echo(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
let product = {
    name: "a",
    price: 1,
};
//# sourceMappingURL=generics.js.map