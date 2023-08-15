//generics classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<number, string>(1, "himanshu");
let pair2 = new KeyValuePair<string, string>("1", "himanshu");

//generic functions

class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

let utils = new ArrayUtils();

let numberArray: number[] = ArrayUtils.wrapInArray<number>(20);
console.log(numberArray);

// generic interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

// function fetch<T>(url:string):Result<T>{
//     const process = url;
//     return {data:null,error:null}
// }

interface User {
  username: string;
}

// interface Product {
//   title: string;
// }

// const u_result = fetch<User>('url')
// const p_result = fetch<Product>('url')

// u_result.data?.username
// p_result.data?.title

//generic constraints

interface Person {
  name: string;
}

class Animal {
  constructor(public name: string) {}
}

class Member extends Animal {
  // constructor(name:string){
  //     super(name)
  // }
}

function echo<T extends number | string | { name: string } | Person | Animal>(
  value: T
): T {
  return value;
}

// console.log(echo({ name: "Himanshu" }));
// console.log(new Member("hks"));

// extending generic classes

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// let store_product = new Store<Product>();

// interface Recharges {
//   name: string;
//   price: number;
//   plan: string;
// }

// let store_recharge = new Store<Recharges>();

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// let store = new CompressibleStore<Product>();

// store.compress();

// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// keyof operator

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj: T) => obj[property] === value);
  }
}

let store = new Store<Product>();

store.add({ name: "a", price: 1 });

store.find("name", "a");
store.find("price", 1);
// store.find('nonExixtingProperty',1);

// type mapping

interface ReadOnlyProperty {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<ReadOnlyProperty> = {
  name: "a",
  price: 1,
};

// product.name = 'h'
