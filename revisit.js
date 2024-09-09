const {log: l} = console;
l("--------------JS revisit---------------")
// 1. strings:
l("1. strings >>>>>>>>>> ")
/*
let str = "\tanand\nshukla\n";
let str2 = `anand shukla`;
let str3 = "T";
let str4 =  "Please locate where the word 'Locate' stays! The rain in SPAIN stays mainly in plains but the gain is slain because of the PAIN given by the TrAiN.";
l(`str: ${str}, 
str2: ${str2}, 
str2 length: ${str2.length}, 
str2 equals str? ${str2.length === str.length}, 
str slice: ${str.slice(2, 6)}, 
str trim: ${str.trim()}, 
str2 character extract: ${str2.charAt(0)}, 
str2 charCode extract: ${str2.charCodeAt(0)}`)
l(`str2 slice negative: ${str2.slice(-4)}, 
str2 substring: ${str2.substring(4)}, 
str2 substr: ${str2.substr(4, 3)}`)
l(`replacing str2 content: ${str2.replace('anand', 'Manmohan')}, 
str2 uppercase: ${str2.toUpperCase()}, 
str2 concat: ${str2.concat(" anand")}, 
str3 padding: ${str3.padStart(5, "s")}, 
str3 padding: $${str3.padEnd(7, "r")}`)
l(`str2 split into an array: 
${str2.split()}, 
${str2.split("")}, 
${str2.split("d")}, 
${str2.split(" ")}`)
l(`str2 indesOf: ${str2.indexOf("a")}, 
str2 lastIndexOf: ${str2.lastIndexOf("a")}, 
str2 startsWith: ${str2.startsWith("a")}, 
str2 startsWith index: ${str2.startsWith("shu", 6)}
str2 endsWith: ${str2.endsWith("l")},
str2 endsWith index: ${str2.endsWith("kla", 12)}`)
l(`str4 search: ${str4.search("locate")},
str4 match: ${str4.match(/ain/)},
str4 match global: ${str4.match(/ain/g)},
str4 match case insensitive: ${str4.match(/ain/ig)}, 
str4 includes: ${str4.includes(str4.match(/train/i))},
`)
*/
l("--------------JS revisit---------------")
// 2. Numbers:
l("2. Numbers: >>>>>>>>>> ")
/*
let num = 1234;
let num1 = 123e4;
let num2 = 123e-4;
l(`num: ${num},
num1: ${num1},
num2: ${num2}`);
let num5 = 5.58764;

l(`num4 = 0.2 + 0.1, see the nuisense: ${0.2+0.1}`) 
l(`solve the above problem, multiply and divide by 10: ${((0.2*10)+(0.1*10))/10}`)
l(`num4 = 0.2 + 0.3, it's accurate: ${0.2+0.3}`) 
l(`num4 = 0.3 + 0.8, it's accurate: ${0.3+0.8}`) 
l(`num4 = 1.2 + 1.1, it's accurate: ${1.2+1.1}`) 
l(`10+"20": ${10+"20"},
 "20"+10: ${"20"+10},
 10+20+"30": ${10+20+"30"},
 "10"+20+30: ${"10"+20+30},
 result: ${"result: "+10+20}`)

l(`"100"/"10": ${"100"/"10"},
"2"*8: ${"2"*8}`)
l(`"100"-"10": ${"100"-"10"},
typeof "100"-"10": ${typeof ("100"-"10")}`)

l(`NaN: ${100/"Anand"},
isNan: ${isNaN(100/"Anand")},
typeof NaN: ${typeof NaN},
`)

l(`Infinity: ${8/0},
-Infinity: ${-6/0},
typeof Infinity: ${typeof Infinity}`)

l(`Hexadecimal 0xab: ${0xab},
0xFF: ${0xff},
Octal 09: ${09},
011: ${011},
023: ${023}`)

l(`
Hexadecimal num.toString(16): ${num.toString(16)},
decimal num.toString(10): ${num.toString(10)},
Octal num.toString(8): ${num.toString(8)},
Binary num.toString(2): ${num.toString(2)}`)

l(`as object new Number(123): ${new Number(123)}`)
l(`
Number.EPSILON: ${Number.EPSILON},
isFinite(num): ${isFinite(num)},
Number.isInteger(num2): ${Number.isInteger(num2)}`)

l(`
Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER},
Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER},
Number.MAX_VALUE: ${Number.MAX_VALUE},
Number.MIN_VALUE: ${Number.MIN_VALUE}`)

l(`
Number.parseFloat(10): ${Number.parseFloat(10)},
Number.parseFloat("10"): ${Number.parseFloat("10")},
Number.parseFloat("10.335"): ${Number.parseFloat("10.335")},
Number.parseFloat("34 56 98"): ${Number.parseFloat("34 56 98")},
Number.parseFloat("He was 56"): ${Number.parseFloat("He was 56")},
Number.parseFloat("40.00"): ${Number.parseFloat("40.00")},
Number.parseFloat(" 40 "): ${Number.parseFloat(" 40 ")},
Number.parseFloat("40 years"): ${Number.parseFloat("40 years")},
Number.parseFloat("40H"): ${Number.parseFloat("40H")},
Number.parseFloat("H40"): ${Number.parseFloat("H40")}`)

l(`
Number.parseInt("10"): ${Number.parseInt("10")},
Number.parseInt("10.00"): ${Number.parseInt("10.00")},
Number.parseInt("10.33"): ${Number.parseInt("10.33")},
Number.parseInt("34 78 53"): ${Number.parseInt("34 78 53")},
Number.parseInt(" 67 "): ${Number.parseInt(" 67 ")},
Number.parseInt("40 years"): ${Number.parseInt("40 years")},
Number.parseInt("He was 56"): ${Number.parseInt("He was 56")},
Number.parseInt("10", 10): ${Number.parseInt("10", 10)},
Number.parseInt("010"): ${Number.parseInt("010")},
Number.parseInt("10",8): ${Number.parseInt("10",8)},
Number.parseInt("0x10"): ${Number.parseInt("0x10")},
Number.parseInt("10",16): ${Number.parseInt("10",16)},
Number.parseInt(10): ${Number.parseInt(10)}`)

l(`
num.toExponential(): ${num.toExponential()}`)

l(`
num5.toFixed(): ${num5.toFixed()},
num5.toFixed(2): ${num5.toFixed(2)},
num5.toFixed(4): ${num5.toFixed(4)},
typeof num5.toFixed(2): ${typeof num5.toFixed(2)}`)

l(`
num5.toPrecision(): ${num5.toPrecision()},
num5.toPrecision(1): ${num5.toPrecision(1)},
num5.toPrecision(2): ${num5.toPrecision(2)},
num5.toPrecision(3): ${num5.toPrecision(3)},
typeof num5.toPrecision(): ${typeof num5.toPrecision()}
`)

l(`
num5.valueOf(): ${num5.valueOf()}`)

*/
l("--------------JS revisit---------------")
// 3. Arrays:
l("3. Arrays >>>>>>>>>> ")
/*

let arr = ["Apples", "Bananas", "Mangoes", "Grapes", "Oranges"];
let arr2 = ["Tata", "Mahindra", "Hero", "Bajaj", "TVS"];

let numArr = [3,16,7,9,5,1,0,33,21,47,39];

l(`
arr: ${arr},
arr[2]: ${arr[2]},
arr.toString(): ${arr.toString()}, 
arr.join("-->"): ${arr.join("-->")},
arr.push("Guavas"): ${arr.push("Guavas")},
arr.pop(): ${arr.pop()}
`)
l(`
arr.shift(): ${arr.shift()} => ${arr} => length = ${arr.length},
arr.unshift("Apples"): ${arr.unshift("Apples")} => ${arr},
delete arr[2]: ${delete arr[2]} => ${arr} => length: ${arr.length} => leaves empty undefined space in array, use pop or shift for deleting elements from array,
`)

l(`
arr2.splice(2,0, "Royal Enfield"): ${arr2.splice(2,0, "Royal Enfield")} => ${arr2} => length: ${arr2.length},
arr2.splice(3, 1): ${arr2.splice(3, 1)} => length: ${arr2.length}`)

l(`
arr concat(arr2): ${arr.concat(arr2)},
arr2 concat("escorts"): ${arr2.concat("Escorts", "Force")}`)

l(`
arr2.slice(1,2): ${arr2.slice(1, 4)}`)

l(`
arr2.reverse(): ${arr2.reverse()} => arr2: ${arr2}`)
l(`
arr2.sort(): ${arr2.sort()} => arr2: ${arr2}`)
l(`
numArr.sort() => not correct: ${numArr.sort()},
numArr.sort((a,b)=>a-b) => using compare function correct: ${numArr.sort((a,b)=>a-b)},

`)
// sorting object arrays:












*/
l("--------------JS revisit---------------")
// 4. Loops:
l("4. Loops >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 5. conditionals:
l("5. conditionals >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 6. Iteration - Arrays and Objects:
l("6. Iteration - Arrays and Objects >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 7. Date:
l("7. Date >>>>>>>>>> ")

/*
let nd = new Date();
let nd1 = new Date(1991, 06, 28, 08, 50, 00)
let nd2 = new Date(9877676767676)
let nd3 = new Date("Sun Jul 28 1991 08:50:00 GMT+0530 (India Standard Time)")
let nd4 = new Date("2015-03-23");
let nd5 = new Date("2015/03/23");
let nd6 = new Date("mar 23 2015");

l(`
nd: ${nd},
create random date: ${nd1},
create using milliseconds: ${nd2},
create using date string: ${nd3},
nd to UTCString(): ${nd.toUTCString()},
nd to DateString(): ${nd.toDateString()},
nd to ISOString(): ${nd.toISOString()},
manipulate above string to get proper date: ${nd.toISOString().split("T")[0].split("-").reverse().join("-")},

`)
l(`
date inputs: 
nd4: ${nd4},
nd5: ${nd5},
nd6: ${nd6},
`)
l(`
parsing dates:
Date.parse(nd) => return milliseconds after Jan 1, 1970: ${Date.parse(nd)}`)
l(`
Date get methods:
getFullYear(): ${nd.getFullYear()},
getMonth(): ${nd.getMonth()},
getDate(): ${nd.getDate()},
getHours(): ${nd.getHours()},
getMinutes(): ${nd.getMinutes()},
getSeconds(): ${nd.getSeconds()},
getMilliseconds(): ${nd.getMilliseconds()},
getTime(): ${nd.getTime()},
getDay(): ${nd.getDay()},
Date.now(): ${Date.now()},
`)
l(`
Date set methods:
nd.setDate(23): ${nd.setDate(23)}=> nd: = ${nd};
nd.setFullYear(2345): ${nd.setFullYear(2345)} => nd: ${nd}
`)
l(`
getTimeZoneOffset(): difference between the local time and the UTC time: ${nd2.getTimezoneOffset()}`)

*/


l("--------------JS revisit---------------")
// 8. Math: 
l("8. Math >>>>>>>>>> ")
/*
let num3 = Math.PI;
l(`
8 mathematical constants >>>

1. Math.PI: ${num3},
2. Math.E: ${Math.E},
3. Math.SQRT2: ${Math.SQRT2},
4. Math.SQRT1_2: ${Math.SQRT1_2},
5. Math.LN2: ${Math.LN2},
6. Math.LN10: ${Math.LN10},
7. Math.LOG2E: ${Math.LOG2E},
8. Math.LOG10E: ${Math.LOG10E}
`)

l(`
Math methods >>> 

Math.round(67.564723): ${Math.round(67.564723)}
Math.ceil(67.564723): ${Math.ceil(67.564723)}
Math.floor(67.564723): ${Math.floor(67.564723)}
Math.trunc(67.564723): ${Math.trunc(67.564723)}
`)

l(`
Math.sign(67.564723): ${Math.sign(67.564723)},
Math.sign(67.564723): ${Math.sign(-67.564723)},
Math.pow(4, 3): ${Math.pow(4, 3)},
Math.sqrt(9): ${Math.sqrt(9)},
Math.abs(-67.564723): ${Math.abs(-67.564723)},
sin(90 degree) => Math.sin(90*(Math.PI/180)): ${Math.sin(90*(Math.PI/180))},
sinh(90 degree) => Math.sinh(90*(Math.PI/180)): ${Math.sinh(90*(Math.PI/180))},
sin inverse(1) => Math.asin(1): ${(Math.asin(1))*(180/Math.PI)},
cos(90 degree) => Math.cos(90*(Math.PI/180)): ${Math.cos(90*(Math.PI/180))},
cos inverse(0) => Math.acos(0): ${(Math.acos(0))*(180/Math.PI)},
tan(90 degree) => Math.tan(90*(Math.PI/180)): ${Math.tan(90*(Math.PI/180))},
tan inverse(Infinity) => Math.atan(Infinity): ${(Math.atan(Infinity))*(180/Math.PI)},
sinh(90 degree)
`)

l(`
Math.min(): ${Math.min()},
Math.max(): ${Math.max()},
Math.random(): ${Math.random()},
Math.log(2): ${Math.log(2)},
Math.log2(2): ${Math.log2(2)},
Math.log10(2): ${Math.log10(2)},
E^2 => Math.exp(2) === Math.pow(Math.E, 2): ${Math.exp(2)} === ${Math.pow(Math.E, 2)}
`)

l(`
Math.max(5, 10,4,17,21,8,11): ${Math.max(5, 10,4,17,21,8,11)},
Math.min(5, 10,4,17,21,-8,11): ${Math.min(5, 10,4,17,21,-8,11)},

Math.max([5, 10,4,17,21,8,11]) <=doesn't take array=>: ${Math.max([5, 10,4,17,21,8,11])},

`)
*/

l("--------------JS revisit---------------")
// 9. Random and Boolean:
l("9. Random and Boolean >>>>>>>>>> ")
/*
l(`
Math.ceil(Math.random() * 100): ${Math.ceil(Math.random() * 100)}
`)

l(`
Anything with a value is true >>>

Boolean(10> 9): ${Boolean(100 > 8 )} => 10>8 ${10>8},
Boolean(100): ${Boolean(100)},
Boolean("100")): ${Boolean("100")},
Boolean("Hello")): ${Boolean("Hello")},
Boolean(false)): ${Boolean(false)},
Boolean(true)): ${Boolean(true)},
Boolean(7+1)): ${Boolean(7+1)},
Boolean(-15)): ${Boolean(-15)},
`)
l(`
Everything without a value is false >>> 
Boolean(0): ${Boolean(0)}, 
Boolean(-0): ${Boolean(-0)}, 
Boolean(""): ${Boolean("")}, 
Boolean(null): ${Boolean(null)}, 
Boolean(undefined): ${Boolean(undefined)}, 
Boolean(false): ${Boolean(false)}, 
Boolean(NaN): ${Boolean(NaN)}, 
Boolean(10/"hello")): ${Boolean(10/"hello")}, 
`)
*/

l("--------------JS revisit---------------")
// 10. Comparison and Logical operations:
l("10. Comparison and Logical operations >>>>>>>>>> ")

/*
l(`
The Nullish Coalescing Operator (??)

null ?? "missing": ${null ?? "missing"}
undefined ?? "got it": ${undefined ?? "got it"}
`)

l(`
The Optional Chaining Operator (?.)

{name: "Tata"}.model : ${{name: "Tata"}.model},
{name: "Tata", model: {title: "nexon", year: 2019}}.model?.year : ${{name: "Tata", model: {title: "nexon", year: 2019}}.model?.year},

`)

*/

l("--------------JS revisit---------------")
// 11. Break and Continue:
l("11. Break and Continue >>>>>>>>>> ")
/*
l(`
i breaks on 3 => end the loop on 3 and come out of it: `)
for(let i=0; i<10; i++){
  if(i===3){
    break;
  }
  l(`i: ${i}`)
}

l(`
i break on 3 then continue the loop: `)
for(let i=0; i<10; i++){
  if(i===3){
    continue;
  }
  l(`i: ${i}`)
}

*/




l("--------------JS revisit---------------")
// 12. Sets:
l("12. Sets >>>>>>>>>> ")
/*
const newSet = new Set();
const newSet2 = new Set(["a", "b", "c"]);
l(`
newSet.add(56): ${newSet.add(56)}
newSet.add("anand"): ${newSet.add("anand")}
newSet.add(true): ${newSet.add(true)}
newSet.has("anand"): ${newSet.has("anand")}
newSet.delete("anand"): ${newSet.delete("anand")}
newSet.values(): ${newSet.values()}
newSet.size: ${newSet.size}
`)

newSet2.forEach(v=>l(`forEach method on newSet2 using forEach: ${v}`))

newSet.values().forEach(v=>l(`values method on newSet using forEach: ${v}`))

for(let x of newSet.values()){
  l(`values method on newSet using for-of: ${x}`)
}

l(`
newSet: ${newSet}
newSet2: ${newSet2}
`)

*/


l("--------------JS revisit---------------")
// 13. Maps:
l("13. Maps >>>>>>>>>> ")
/*
const newMap = new Map();
const newMap2 = new Map([["cars", 2],["bikes", 1],["house", 1]]);

l(`
newMap.set("key", "value"): ${newMap.set("key", "value")}
newMap.set("fruit", "Mango"): ${newMap.set("fruit", "Mango")}
newMap.set("car", "Mahindra"): ${newMap.set("car", "Mahindra")}
`)

l(`
newMap.get("car"): ${newMap.get("car")}
newMap.get("fruit"): ${newMap.get("fruit")}
newMap.has("key"): ${newMap.has("key")}
`)
l(`
newMap.delete("key"): ${newMap.delete("key")}
newMap.has("key"): ${newMap.has("key")}
`)

newMap.forEach(v=>l(`newMap using forEach giving values: ${v}`))

newMap2.entries().forEach(v=>l(`newMap2 using entries and forEach giving key-value pair: ${ v}`))


l(`
newMap: ${newMap}
newMap2: ${newMap2}

newMap.size: ${newMap.size}
`)

*/



l("--------------JS revisit---------------")
// 14. Type Coercion:
l("14. Type Coercion >>>>>>>>>> ")









l("--------------JS revisit---------------")
// 15. Errors:
l("15. Errors >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 16. this:
l("16. this >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 17. Arithmatic:
l("17. Arithmatic >>>>>>>>>> ")





l("--------------JS revisit---------------")
// 18. Objects:
l("18. Objects >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 19. Classes:
l("19. Classes >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 20. Functions:
l("20. Functions >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 21. Asynchronous JS:
l("21. Asynchronous JS >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 22. DOM:
l("22. DOM >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 23. BOM:
l("23. BOM >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 24. Regex:
l("24. Regex >>>>>>>>>> ")
l("--------------JS revisit---------------")
// 25. :
l("25.  >>>>>>>>>> ")





















l("--------------JS revisit---------------")