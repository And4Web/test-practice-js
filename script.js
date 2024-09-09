// Q13: Create a curry function:
function curry(fn){
  let arity = fn.length;

  return function f1(...args){
    if(args.length >= arity){
      // console.log("Enough Arguments.")
      console.log(fn(...args));
    }else{
      // console.log("Need more arguments.")
      return function f2(...moreArgs){
        let newArgs = args.concat(...moreArgs);
        return f1(...newArgs);
      }
    }
  }
}

let curriedMultiply = curry((a,b,c)=> a*b*c);

console.log("<<< (2,3,4): ", curriedMultiply(2,3,4));
console.log("<<< (2)(3)(4): ", curriedMultiply(2)(3)(4));
console.log("<<< (2)(3,4): ", curriedMultiply(2)(3,4));
console.log("<<< (2,3)(4): ", curriedMultiply(2,3)(4));


// Practical use of currying: Why do we need curried functions?

const get = curry((property, object)=> object[property]);
get("id")({id: 898})

const map = curry((fn, valuesArr)=>valuesArr.map(fn))
console.log(map(get("id"), [{id:7}, {id: 87}, {id: 43}]))
// here get("id") now can be used as some function. It is common practice while creating libraries and apis to use currying.

function curry2(fn){
  const arity = fn.length;
  return function f1(...args){
    if(args.length >= arity){
      return fn(...args);
    }else{
      return function f2(...moreArgs){
        const newArgs = args.concat(...moreArgs);
        return f1(...newArgs);
      }
    }
  }
}

const curriedSum = curry2((a,b,c)=>a+b+c);
console.log(curriedSum(5,4,9));
console.log(curriedSum(59)(5)(6));

// Q14: Write a function which get's an array and an element and returns an array with this element at the end:

function adder(arr, el){
  let newArr = [];
  // return newArr.concat(...arr, el);
  return [...arr, el];
}
let arr = [1,2,4];
// never use push() in such problems because push() modifies the original array outside the function. Always try to use spread operator as good practice.

console.log("Adder: ", adder([4,6,7], 87))
console.log("Adder: ", adder(arr, 87))
console.log("arr after Adder: ", arr);

// Q15: Write a functin which can concatenate 2 arrays:
function mergeArr(arr1, arr2){
  // return arr1.concat(...arr2);
  return [...arr1, ...arr2];
}
let arr1 = [5,1];
let arr2 = [9,5,3]

console.log(mergeArr(arr1, arr2))

// Q16: Check that user with such name exists in array of objects:
const users = [
  {
    id:1,
    name: "Anand",
    isActive: true
  },
  {
    id:2,
    name: "Sheetal",
    isActive: false
  },
  {
    id:1,
    name: "Mukund",
    isActive: true
  },
]

const userExists1 = (name, users) => users.some(el=>el.name === name);
const userExists2 = (name, arr) =>{
  let user = arr.find(el => el.name === name);
  return Boolean(user);
}
const userExists3 = (name, arr) => {
  let index = arr.findIndex(el=>el.name === name);
  return index > 0;
}
console.log("userExists1: ", userExists1("Anand", users))
console.log("userExists1: ", userExists1("Akram", users))
console.log("userExists2: ", userExists1("Anand", users))
console.log("userExists2: ", userExists1("Akram", users))
console.log("userExists3: ", userExists1("Anand", users))
console.log("userExists3: ", userExists1("Akram", users))

// Q17 onwards in script2.js