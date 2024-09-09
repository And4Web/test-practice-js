const {log: _} =  window.console;
// Q44: Design a shallow comparison function
/*
1 === 2         returns false
1 === 1         returns true
{a:1} === {a:1} returns false
[] === []       returns false

primitive data types reurns value so easy to compare.
non-primitive data types like objects and arrays return the reference to that object or array in the memory so can't be compared directly like above. So, we need another methods to compare objects and arrays.

{a: {b: 1}} === {a: {b: 1}}   returns false, nested objects and arrays need deep comparison to compare each and every values.


shallow comparison is faster than deep comparison, it will fix problems with comparing objects and arrays. It will fix only non-nested objects and arrays. 
*/
// function to get type of any value provided as input:

const typeOf = (input) => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  const type = typeOfRegex.exec(rawObject)[1];
  return type;
}


// shallow comparison: compare non-nested arrays and objects
const shallowCompare = (source, target) => {
  if(typeOf(source) !== typeOf(target)){
    return false;
  }

  if(typeOf(source === "object")){
    if(Object.keys(source).length !== Object.keys(target).length){
      return false;
    }else{
      return Object.keys(source).every(key=> source[key] === target[key]);
    }
  }

  if(typeOf(source === "array")){
    if(source.length !== target.length){
      return false;
    }else{
      return source.every((el, index)=>{
        return el === target[index];
      })
    }
  }

  if(typeOf(source === "date")){
    return source.getTime() === target.getTime();
  }

  if(source !== target){
    return false;
  }else return true
}

_(shallowCompare({a:"a"},{a:"a"}))
_(shallowCompare({a:"a"},{a:"a", b: "b"}))
_(shallowCompare(2,{a:"a"}))
_(shallowCompare(2,2));

_(shallowCompare([5, "a"], [5,"a"]))
_(shallowCompare([5, "a"], [5,"a", "b"]))
_(shallowCompare([5, "a"], [8,"a"]))
_(shallowCompare(2,[5,"a"]))
_(shallowCompare(new Date(Date.now()), new Date(Date.now())));
_(shallowCompare(new Date(Date.now()), new Date(8702077697892)));
_(typeOf(new Date(Date.now())))
_(new Date(8702077697892))
_(Date.now())
_(new Date(Date.now()).getTime())


// Q45: Design a deep comparison function:

const deepCompare = (source, target) => {
  
  if(typeOf(source) !== typeOf(target)){
    return false;
  }

  if(typeOf(source) === "array"){
    if(source.length !== target.length){
      return false;
    }
    return source.every((el, index)=>{
      return deepCompare(el, target[index]);
    })
  }

  if(typeOf(source) === 'object'){
    if(Object.keys(source).length !== Object.keys(target).length){
      return false;
    }
    return Object.keys(source).every(key=>{
      return deepCompare(source[key], target[key]);
    })
  }

  if(typeOf(source) === 'date'){};

  return source === target;
}


_(shallowCompare({a:{b: "a"}},{a:{b: "a"}}))
_(shallowCompare({a:{b: "a"}},{a:"a", b: "b"}))

// ShallowCopy and DeepCopy:
let original = {
  id:1, name: "Ananad", address: {city: "Prayagraj", state: "UP"}, hobbies: ["Exercise", "Guitar"]
}
_("original before any copy: ", original)
let shallowCopy = {...original}
let deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy.name = "Sheetal";
shallowCopy.id = 2;
shallowCopy.address.city = "Lucknow";
shallowCopy.hobbies.push("Cooking");

_("Original and shallowCopy: ", original, shallowCopy);

deepCopy.name = "Giridhar";
deepCopy.id = 3;
deepCopy.address.city = "Noida";
deepCopy.hobbies.push("Cycling");

_("Original and deepCopy: ", original, deepCopy);
_("Shallow Copy copies only the first layer of the object and replaces any data from the nested objects and arrays on madification, while deep copy does the opposite.")
// Shallow Copy coppies only the first layer of the object and replaces any data from the nested objects and arrays on madification, while deep copy does the opposite.


// Q46: Design a Memoization function which adds 10 to provided value and take it from cache if it was already calculated:

// Memoization is saving the values in cache (or caching values) to avoid repeating the same operations again and again.

const memoizeAdd = () => {
  let cache = {};
  _("cache: ", cache)
  return (value)=>{
    if(value in cache){
      _("From Cache: ", cache[value])
      return cache[value];
    }else{
      let result = value + 10;
      cache[value] = result;
      _("Calculating: ", result)
      return result;
    }

  }

}

const getResult = memoizeAdd();

_(getResult(9));  //calculating value
_(getResult(9));  //fetching value from cache
_(getResult(9));  //fetching value from cache
_(getResult(6));  //Calculating
_(getResult(6));  //fetching value from cache


// Q47 onwards in script6.js

