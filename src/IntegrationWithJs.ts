//integration with  js
import * as _ from 'lodash';
import { calculateTax } from "./tax";

_.clone([1,2,3,4])

let tax = calculateTax(900_00);

console.log(tax);

// typechecking in js
