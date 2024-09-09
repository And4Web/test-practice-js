function curry(fn){
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

const calc = curry((arr, op)=>arr.map(el=>el + op))

console.log(calc([4,3,7], "addition"));
console.log(calc([4,3,7])("Subtraction"));

const sample = curry((prop, obj)=>obj[prop]);
const getName = sample("name")
console.log(sample("name", {id: 1, name: 'Anand', profession: "Full Stack Dev"}));
console.log(getName({id: 1, name: 'Anand', profession: "Full Stack Dev"}))

const sample2 = curry((prop, arr)=>arr.map(el=>el[prop]));
const users = [
  {id:1, name: "Anand", profession: "full stack dev"},{id:2, name: "Suchitra", profession: "Python dev"},{id:3, name: "Tejpal", profession: "front end dev"},
]
console.log(sample2("name", users))
// console.log(sample2("name")(users))