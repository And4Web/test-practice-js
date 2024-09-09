const {log: _} = window.console;
_("Regular Expressions are amazing. Video no 47.")

_("Meta character symbols in REGEX...")

let regex1 = /anand/ig;     // matches ananad
let regex2 = /^an/ig;       // matches string starting with an
let regex3 = /ly$/ig;       // matches string ending with ly
let regex4 = /ac.d/ig;      // matches any one letter in place of .
let regex5 = /ac*d/ig;      // matches any number of letters in place of *
let regex6 = /an?and?ji/ig; // ? represents optional.
let regex7 = /a\$and/ig;    // \$ means $ is part of pattern. it's not used as metacharacter.

let str = "anand and Anna are meeting Anabel regularly to do criminally awesome jobs. Put Acid and make acad to look like an acoobabad. Aanji and anandji came yesterday and found A$and unavailable.";

let str2 = "anand and anna are beautifully";

_("result 1: ", regex1.exec(str));
_("result 2: ", regex2.exec(str));
_("result 2: ", regex2.exec(str2));

_("result 3: ", regex3.exec(str2));
_("result 4: ", regex4.exec(str));
_("result 4: ", regex4.exec(str));
_("result 5: ", regex5.exec(str));
_("result 6: ", regex6.exec(str));
_("result 7: ", regex7.exec(str));

// continue from regex3.js