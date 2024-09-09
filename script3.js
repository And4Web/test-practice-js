// Q22: Write a function which implements Shuffle(change the positions of the elements in side an array):
const {log: _, error: _e, dir: _d} = console;

function shuffle(arr){
  let arrLength = arr.length;
  let indexArr = arr.map(e=>({key: Math.random(), value: e})).sort((a,b)=>a.key-b.key).map(e=>e.value)
  // _(randomIndex)

  _(indexArr)
  return indexArr;
}

let sArr = ["A", "T", 8, 5];
let users = ["Anand", "Sheela", "Chiranjeev"]
shuffle(sArr);
shuffle(users);

// Q23: Find the number of occurances of minimum value in the list:
let arrList = [2,4,8,11,2,7,3,8,4,2,9];
// method1: using sorting and basic string methods:
function occurMinimum(arr){
  let sorted = arr.sort((a,b)=>a-b);
  let smallest = sorted[0];
  let lastIndexOfSmallest = arr.lastIndexOf(smallest);
  let result = sorted.join("").slice(0, lastIndexOfSmallest+1).split("").length;
  _(`Smallest number is "${smallest}", occurance is "${result}".`);
}
occurMinimum(arrList)

// method2: using Math.min() and filter:
function occurMinimum2(arr){
  let smallest = Math.min(...arr);
  let result = arr.filter(e=>e === smallest).length;
  _(`Smallest number is "${smallest}", occurance is "${result}".`);
}

occurMinimum2(arrList);

// Q24: What will be logged here:
// task1:
function getItem(){
  _("this inside an independent function refers to global object: ", this)
}
getItem();
// task2:
const item = {
  title: "Ball",
  getItem(){
    _("this inside an object refers to the object itself: ", this);
  }
}
item.getItem();

// task3:
class Item{
  title = "Book";
  getItem(){
    _("this inside a class refers to the instance of the class: ", this)
  }
}

const newItem = new Item();
newItem.getItem();

// task 4:
class Item2{
  title = "Stationl";
  getItem(){
    [1,2,3].map(function(item){console.log("this inside a function in a class's method refers to undefined: ", this)});
    const this_ = this;
    function someFunc(){
      _("this inside a function in  a class's method refers to undefined, so initiate a variable before: ", this_);
    }
    someFunc();
  }
}

let stItem = new Item2();
stItem.getItem();
//solution to the above problem is: (1) to use arrow function instead of function keyword when using this. (2) if using function keyword then use a variable to refer to the object you want this to refer.
class Item3{
  title = "Solution";
  getItem(){
    let someFunc = () => {
      _("this inside an arrow function refers to the context of the parent that is the instance of the class it belongs to: ", this)
    }
    someFunc();
  }
}
let stItem2 = new Item3();
stItem2.getItem();

// Q25: Design a class for employee which takes id and name in during construction and which has a salary property:
class Employee{
  constructor(id, name){
    if(!id || !name){
      throw new Error("id and name of the employee required.")
    }
    this.id = id;
    this.name = name;
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  setSalary(salary){
    this.salary = salary;
  }

  getSalary(){
    return this.salary;
  }
} 
const newEmp = new Employee(54, "Anand");
newEmp.setSalary("10Lpa");
_("instance of Class employee: ", newEmp)

// Q26: Design a class for manager which is employee and can have department property:
class Manager extends Employee{
  constructor(id, name){
    super(id, name);
  }
  setDepartment(department){
    this.department = department;
  }   
  getDepartment(){
    return this.department;
  }
}
const manage = new Manager(78, "Ashish");
manage.setDepartment("Finance")
manage.setSalary("15Lpa")
_("Manager class: ", manage)

// Q27 onwards in script4.js
