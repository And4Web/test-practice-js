// important built-in objects (Global objects) in javascript


// 1. Array:
// 1. Array.from():
// sources: https://www.w3schools.com/jsref/jsref_from.asp
// sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

/*
The Array.from() method returns an array from any object with a length property.

The Array.from() method returns an array from any iterable object.

Array.from() is a static property of the JavaScript Array object.

You can only use it as Array.from().

Using x.from(), where x is an array will return undefined.

Syntax-

Array.from(object, mapFunction, thisValue)

Parameters-

object: Required. The object to convert to an array.
mapFunction: Optional. A map function to call on each item.
thisValue: Optional. A value to use as this for the mapFunction

Return Value-

An array: The values from the iterable object.
*/
const {log: _} = console;
// EXamples:
// Array from a String
_("Array.from() Example 1: ",  Array.from("abcdef"))

// Array from a array
_("Array.from() Example 2: ", Array.from([1, 2, 3], (x)=>x + x));

Array.from([true,124,"Anand",null], (v,i)=>{
  _("Array.from() Example 3: value: ",v)
  _("Array.from() Example 3: index: ", i)
})

// Array from an iterable object with property length
_("Array.from() Example 4: ", Array.from({length: 4}, (element, index)=>Math.pow(index, 4)))

// Array from a Set
const newSet = new Set(["Sitar", 'Guitar', 'Tabla','flute']);
_("newSet: ", newSet)
_("Array.from() Example 5: ", Array.from(newSet))

// Array from a Map
const newMap = new Map([[1,2],[6,7],[9,10],[14,15]])
_("newMap: ", newMap);
_("Array.from() Example 6: ", Array.from(newMap))
_("Array.from() Example 6: values: ", Array.from(newMap.values()))
_("Array.from() Example 6: keys: ", Array.from(newMap.keys()))

// 

// Pagination Example using Array.from()
let usersArray = ["Anand", 'Atul','Sikha','Akshay','Manorama', 'Swati', "Archana", 'Mukesh']
let usersPerPage = 3;
let totalPages = Math.ceil(usersArray.length/usersPerPage);

let newArray = (array) => Array.from({length: totalPages}, (e, i)=>{
  
  let start = i * usersPerPage;

  return array.slice(start, start + usersPerPage);
})

// let currentPage = 0;

_("pagination: ", newArray(usersArray))
// logic:
// 1. [0, 0+3] > [0 to 3)
// 2. [3, 3+3] > [3 to 6)
// 3. [6, 6+3] > [6 to 9)
// _("[0 to 3) ", usersArray.slice(0, 3));
// _("[3 to 6) ", usersArray.slice(3, 6));
// _("[6 to 9) ", usersArray.slice(6, 9));

// 2. Array.isArray()
// sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

/*
The Array.isArray() static method determines whether the passed value is an Array.


*/
_("<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>")
// Examples:
_("<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>")
_("Array.isArray([1,3,5]): ", Array.isArray([1,3,5]))
_("Array.isArray([]): ", Array.isArray([]))
_("Array.isArray('[]'): ", Array.isArray('[]'))
_("Array.isArray(new Array()): ", Array.isArray(new Array()), new Array());
_("Array.isArray(new Array(5)): ", Array.isArray(new Array(5)), new Array(5));
_("Array.isArray(new Array('a','b','c','d')): ", Array.isArray(new Array("a","b","c","d")), new Array("a","b","c","d"));
// Little known fact: Array.prototype itself is an array:
_("Array.isArray(Array.prototype): ", Array.isArray(Array.prototype), Array.prototype);
_("Array.isArray(new Int16Array([15])): ", Array.isArray(new Int16Array([15])), new Int16Array([15]));
_("<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>")

// all following calls return false:
_("all following calls return false:");
_("Array.isArray():", Array.isArray());
_("Array.isArray({}):", Array.isArray({}));
_("Array.isArray(null):", Array.isArray(null));
_("Array.isArray(undefined):", Array.isArray(undefined));
_("Array.isArray(17):", Array.isArray(17));
_("Array.isArray('Array'):", Array.isArray("Array"));
_("Array.isArray(true):", Array.isArray(true));
_("Array.isArray(false):", Array.isArray(false));
_("Array.isArray(new Uint8Array(32)):", Array.isArray(new Uint8Array(32)));
_("Array.isArray({ __proto__: Array.prototype });", Array.isArray({ __proto__: Array.prototype }));

// instanceof vs. Array.isArray()

/*
When checking for Array instance, Array.isArray() is preferred over instanceof because it works across realms.

*/
// Examples:
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Correctly checking for Array
Array.isArray(arr); // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
arr instanceof Array; // false


// 3. Array.of()
// sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
/*
The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

*/
_("<<<<<<<<<<<>>>>>>>>>>>>>>>>>")
// Examples:
_("<<<<<<<<<<<>>>>>>>>>>>>>>>>>")
_("Array.of('foo', 2, 'bar', true): ", Array.of('foo', 2, 'bar', true));
_("Array.of(): ", Array.of());

// The difference between Array.of() and the Array() constructor is in the handling of single arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)
_("Array.of(7): ", Array.of(7)); 
_("Array(7): ", Array(7)); 

_("Array.of(1, 2, 3): ", Array.of(1, 2, 3)); 
_("Array(1, 2, 3): ", Array(1, 2, 3));
_("Array(undefined): ", Array(undefined));
_("Array.of(undefined): ", Array.of(undefined));

_("<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>")