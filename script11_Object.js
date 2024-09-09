// important built-in objects (Global objects) in javascript

// 2. Object:
const {log:_} = console;
_("--------------script11_Objects---------------")
// 1. Object.assign():
// sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/*
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Syntax

Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2,... sourceN)


Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

_("target, returnedTarget, source: ", target, returnedTarget, source);
// Expected output: Object { a: 1, b: 4, c: 5 }

_("returnedTarget === target: ", returnedTarget === target);

// Cloning an object
const obj = { a: 1 , b: 5, c: 8};
const copy = Object.assign({}, obj);
_("copy (shallow): ", copy); 

// Warning for Deep Clone
// For deep cloning, we need to use alternatives like structuredClone(), because Object.assign() copies property values.

// If the source value is a reference to an object, it only copies the reference value.

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
_("obj2: ", obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
_("obj1: ", obj1); // { a: 1, b: { c: 0 } }
_("obj2: ", obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
_("obj1: ", obj1); // { a: 1, b: { c: 0 } }
_("obj2: ", obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
_("obj1: ", obj1); // { a: 1, b: { c: 3 } }
_("obj2: ", obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
_("obj3: ", obj3); // { a: 4, b: { c: 4 } }
_("obj4: ", obj4); // { a: 0, b: { c: 0 } }





// sources: 




_("--------------script11_Objects---------------")