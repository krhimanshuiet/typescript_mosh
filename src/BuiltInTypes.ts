/*
js
number
string
boolean
null
undefined
onject

ts
any
unknown
enum
tuple
*/

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
let level:any // bydefault
// console.log(typeof level)

// function render(document:any):any{
//     console.log(document)
// }

// arrays

let numbers:number[] = [1,2,3,4,5]

numbers.forEach(n => n.toExponential())

// tuples - fixed length array
let user:[number,string] = [1,'Himanshu kumar singh']

//enums
const enum TShirts {
    small=1,
    medium=2,
    large=3,
    extraLarge=4
}
let mySize:TShirts = TShirts.extraLarge;
// console.log(mySize);

// functions 

function calculateTax(income:number,tax:number = 2023):number{
    if(tax < 2022){
        return income - tax * 0.8;
    }
    return income - tax * 0.6;
}

const calculateTax2 = (income:number):number =>{
    return income+98;
}

// console.log(calculateTax(70000))
// objects

let employee:
{
    readonly id:number,
     name?:string,
     retire:(date:Date) => void
} = {
    id:1,
    name:'Himanshu',
    retire:(date:Date) => {
        console.log(date)
    }
};




