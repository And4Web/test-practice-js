/*
const a = [1,2,3,5,8,11,18,26,33,44,57,69,78,83,94];

let mapI = []
a.map(item=>mapI.push(item+2));
console.log(a, mapI)

let b = [];
a.forEach(item=>b.push(item*2));
console.log(a,b);

let c = a.filter(item=>(item>50 && item<70) || item<10)
console.log(c);

let d = a.reduce((acc, item)=>
   acc + item
, 100)

console.log({d})

*/
// Q1: Extract users's names and store in a separate array from the given array:
const users = [
  {id: 1, name: "Anand", isActive: true, age: 32},{id: 2, name: "Gulshan", isActive: false, age: 35},{id:3, name: "Suchitra", isActive: true, age: 27}, 
]

// method 1: by using for-of
let usersArr1 = [];
for(let user of users){
  usersArr1.push(user.name);
}
// method2: by using for loop:
let usersArr2 = [];
for (let i=0; i<users.length; i++){
  usersArr2.push(users[i].name);
}
// method3: by using map:
let usersArr3 = users.map(user=>user.name);

// method4: by using forEach:
let usersArr4 = [];
users.forEach(user=>usersArr4.push(user.name));


console.log("usersArr1: ", usersArr1);
console.log("usersArr2: ", usersArr2);
console.log("usersArr3: ", usersArr3);
console.log("usersArr4: ", usersArr4);

// Q2: Get back only the active users from the given array:
let usersArr5 = users.filter(user=>user.isActive === true);

// Q3: reutrn only the names of the active users:
let usersArr6 = users.filter(user=>user.isActive).map(user=>user.name);

console.log("Active users Only: ", usersArr5)
console.log("Active users name Only: ", usersArr6)

// Q5: sort users by their age ascending and descending:
let usersArr7 = users.sort((user1, user2)=> user1.age - user2.age).map(user=>user.name);
let usersArr8 = users.sort((user1, user2)=> user2.age - user1.age).map(user=>user.name);

console.log("Users by their age ascending: ", usersArr7);
console.log("Users by their age descending: ", usersArr8);

// Remember, sort() operation modifies the original array.
console.log("users: ", users);

// Q6: what will the output of the following:
let var1;
console.log(var1);  //undefined
console.log(typeof var1); //undefined

let var2 = null;
console.log(var2);  //null
console.log(typeof var2); //object

// what will the output of the following:
// Q7:
// console.log("foo: ", foo);
// foo = 2;

// Q8: 
console.log("foo1: ", foo1);
var foo1 = 3;   //var is hoisted to the top

// Q9:
foo2 = 5;
// console.log("foo2: ", foo2);
// let foo2;      // let and const are not hoisted, so we must decleare our variables before using them.

// Q10: Create a counter function to count from 1 to 10:
function counter(){
  let Count = 0
  let counterInit = setInterval(()=>{
    Count++;    
    console.log(Count);
  }, 1000);
  
  setTimeout(()=>{
    clearInterval(counterInit);
  }, 10000);
}

// counter(19)

// Q11: Create a counter function which has increment and get value functionality:
function count(){
  let count = 0;

  return {
    increment: (value = 1) => {
      count += value;
      console.log("Increment: ", count);
    },
    getCount: () => {
      console.log("Count: ", count);
    }
  }
}

count().getCount();
count().increment();
count().getCount();
count().increment(13);
count().getCount();
count().increment();
count().getCount();

// Q12: Write a function which helps to achieve multiply(a)(b) and returns products of a and b:
const multiply = num1 => num2 => console.log(num1*num2);
multiply(4)(9);

// Q13 onwards in script.js

