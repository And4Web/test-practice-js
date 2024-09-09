const {log:_} = window.console;

// Q27: Design the same classes by using Only Javascript prototypes:

var Employee = function(id, name){
  if(!id || !name){
    throw new Error("id and name is required to create new Employee.")
  }
  
  this.id = id;
  this.name = name;
}

Employee.prototype.setSalary = function(salary){
  return this.salary = salary;
}
Employee.prototype.getSalary = function(){
  return this.salary;
}

var newEmp = new Employee(67, "Susheel");
newEmp.setSalary("10Lpa");
_(newEmp.getSalary());
_("new Employee: ", newEmp);

// Extend feature using prototypes:
var Manager = function(params){
  Employee.apply(this, arguments);
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

_("Manager prototype: ", Manager.prototype);

Manager.prototype.setDepartment = function(department){
  return this.department = department;
}
Manager.prototype.getDepartment = function(){
  return this.department;
}

var newManager = new Manager(47, "Akshita");
newManager.setDepartment("Development");
_("Manager extends Employee: ", newManager);

// Q28: Create an ES6 module with functions getName, getSurname and default export getFullname:
// import { getName, getSurname } from "./es6module";
// import getFullName from './es6module';

// getName("anand");
// getSurname("Shukla");
// getFullName("anand", "shukla");

// Q29: Create a module similar to the above using commonJS.
// const {getName, getSurname, getFullName} = require('./commonJSmodule');
// getName("ashish");
// getSurname("gupta");
// getFullName("ashish", "gupta");

// Q30: Create debounce function:
// debounce function means a function that will be called only after certain period of time. every call of this function will be delayed. for example we can use a debounce function when we are sending some data to our backend, like saving some input and waiting for let's say 200 ms while user is typing:

function debounce(func, timeout){
  let timer;
  return (...args)=>{
    // _("inner function: ", args);
    clearTimeout(timer);
    timer = setTimeout(()=>{
      // func(...args);
      func.apply(this, args);
    }, timeout);
  }
}

const saveInput = (name) => {
  _("Save Input: ", name);
}

const processChange = debounce(saveInput, 2000);

processChange("debounce")
processChange("debounce")
processChange("debounce")
processChange("debounce")
processChange("debounce")
// Debounce prevents user to make a lot or request to server on every character change while providing the input. It enhances performance. 

// Q31: Create Throttle function:
// this is almost same as the debounce function, the only difference is that debounce is called only once after the timeout, but throttle is called two times, one at the first call and second after the timeout.
function throttle(func, timeout){
  let isWaiting = false;
  return (...args) => {
    if(!isWaiting){
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
    
  }
}

const processChange2 = throttle(saveInput, 2000);

processChange2("throttle"); //runs
processChange2("throttle"); //don't run
setTimeout(() => {
  processChange2("throttle")  ; //don't run
}, 1000);
setTimeout(() => {
  processChange2("throttle")  ; //don't run
}, 1500);
setTimeout(() => {
  processChange2("throttle")  ; //runs
}, 2500);

// Q32 onwards in dom.js