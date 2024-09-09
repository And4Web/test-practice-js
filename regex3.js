const {log: _} = window.console;
_("Regular Expressions are amazing. Video no 48.")

_("Character sets in REGEX...")
// Character sets:

let regex = /anand/ig;
let regex2 = /a[a-z]d/ig;         //any character between a-z
let regex3 = /a[a-zA-Z]d/g;       //any character between a-z or A-Z that is any character in between a-z case-insensitive.
let regex4 = /a[0-9]d/ig;         //any number in between 0-9
let regex5 = /a[aeiouAEIOU]d/ig;  //any character among the mentioned ones. Like here we want only vowels.
let regex6 = /a[^aeiouAEIOU]d/ig; //any character other than vowels. ^ represents "not" here.

//Quantifiers:

let regex7 = /an{2}d/ig;      //matches if n is present 2 times.
let regex8 = /an{0,2}d/ig;    //matches if n is present 0, 1 or 2 times.

//Groupings:

let regex9 = /(an){2}/ig;     //matches if "an" comes 2 times.
let regex10 = /(an){2}([0-9]u){2}/ig;     


let str = "AnaNd axd A7D aud annd ad anan5u3u1uxy";

// let result = regex.exec(str);
// let result2 = regex2.exec(str);
// let result3 = regex3.exec(str);
// let result4 = regex4.exec(str);
// let result5 = regex5.exec(str);
// let result6 = regex6.exec(str);
// let result7 = regex7.exec(str);
// let result8 = regex8.exec(str);
// let result9 = regex9.exec(str);
// let result10 = regex10.exec(str);
let result = str.match(regex);
let result2 = str.match(regex2);
let result3 = str.match(regex3);
let result4 = str.match(regex4);
let result5 = str.match(regex5);
let result6 = str.match(regex6);
let result7 = str.match(regex7);
let result8 = str.match(regex8);
let result9 = str.match(regex9);
let result10 = str.match(regex10);

_("result 1: ", result);
_("result 2: ", result2);
_("result 3: ", result3);
_("result 4: ", result4);
_("result 5: ", result5);
_("result 6: ", result6);
_("result 7: ", result7);
_("result 8: ", result8);
_("result 9: ", result9);
_("result 10: ", result10);