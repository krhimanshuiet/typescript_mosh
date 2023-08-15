//modules
// import { Gola as MyCircle, Square } from "./Shapes";
// import * as Shapes from "./Shapes/Shapes";
// import { Gola } from "./Shapes";
// import { Square } from "./Shapes";
import { Gola, Square } from "./Shapes/index";
import Store, { Format } from "./Storage";
let circle = new Gola(7);
let square = new Square(20);
let store = new Store();

console.log(circle);
console.log(square);
console.log(store);
console.log(Format.Raw);

// interface Product {
//   name: string;
// }

// module format - amd , umd ,commonjs , es2015,es6
// defualt export

// import * as Shapes from "./Shapes"; wildcard imports

// re exporting
