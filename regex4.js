const {log: _} = window.console;
_("Regular Expressions are amazing. Video no 49.")

_("Shorthand Character Classes in REGEX...")

let regex = /anand/ig;    

// word characters:
let regex2 = /\wry/ig;      //word character: underscore or alphabet or number   
let regex3 = /\w+ry/ig;     //one or more word characters
let regex4 = /\Wgmail/ig;   //non word characters
let regex5 = /\W+gmail/ig;  //more than one non-word characters
let regex6 = /phone: \d/ig; //single digit
let regex7= /phone: \d+/ig; //more than one digit
let regex8 = /39\D/ig;      //single non digit 
let regex9 = /39\D+/ig;     //more than one non digit
let regex10 = /phone:\s/ig; //matches whitespace character
let regex11 = /\s+_/ig;     //one or more than one whitespace characters
let regex12 = /\S1/ig;      //single non whitespace character

// finding email from a string:
let regex13 = /(\S+)@(\S+)\.(\S+)/ig;     //more than one non whitespace character - useful to find email pattern

let regex14 = /com\b/       //word boundary


// Assertions:
let regex15 = /ty(?=zen)/;    //if zen is present after ty
let regex16 = /ty(?!zen)/;    //if zen is not present after ty

let str = "xyz anand singh.rohn001@yahoo.net y&ry &*%$@gmail.tv   _xajkrynd rajj.and001@gmail.com  phone: 9990625515, 39B/T, 4 vttyzen vttyduba";

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
// let result11 = regex11.exec(str);
// let result12 = regex12.exec(str);
// let result13 = regex13.exec(str);
// let result14 = regex14.exec(str);
// let result15 = regex15.exec(str);
// let result16 = regex16.exec(str);

let result = str.match(regex);
let result2 =str.match(regex2);
let result3 =str.match(regex3);
let result4 =str.match(regex4);
let result5 =str.match(regex5);
let result6 =str.match(regex6);
let result7 =str.match(regex7);
let result8 =str.match(regex8);
let result9 =str.match(regex9);
let result10 = str.match(regex10);
let result11 = str.match(regex11);
let result12 = str.match(regex12);
let result13 = str.match(regex13);
let result14 = str.match(regex14);
let result15 = str.match(regex15);
let result16 = str.match(regex16);


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
_("result 11: ", result11);
_("result 12: ", result12);
_("result 13: ", result13);
_("result 14: ", result14);
_("result 15: ", result15);
_("result 16: ", result16);

// go to regex5.js