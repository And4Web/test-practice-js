// Regular Expression tutorial from Harry's youtube videos 46-50.
const {log: _} = window.console;
_("Regular Expressions are amazing...")

// video: 46
let reg = /anand/;
reg = /anand/i;       //i means case insensitive.
reg = /anand/g;       //g means global.
reg = /anand/ig;      //we can use multiple modifiers.

_("1. REGEX: ", reg);
_("2. REGEX.SOURCE: ", reg.source);


// function to match regular expression in any string:
let str = "Hello, I'm AnAnd and my name is anand, aNaND IS SO GREAT THAT HE CAN EVEN TOLERATE THE FALSE ANAnd. ";

// 1. exec():

//REGEX.exec() returns an array or null. 0th index in array returns the value of regex and 1st index returns the index of that value in the string.

let result = reg.exec(str); 
_("3. REGEX.EXEC(STRING) result1: ", result);

 result = reg.exec(str);
_("4. REGEX.EXEC(STRING) result2 : ", result);

 result = reg.exec(str);
_("5. REGEX.EXEC(STRING) result3: ", result);

 result = reg.exec(str);
_("6. REGEX.EXEC(STRING) result4: ", result);
 
result = reg.exec(str);
_("7. REGEX.EXEC(STRING) result5: ", result);

// while using g flag we need to use multiple exec() methods to match all the values in the string.

// 2. test():

// returns true or false based on whether the regex is present in the string or not.

let resultTest = reg.test(str);     //RETURNS TRUE
let str2 = "AmEriCa is a great nation to live and grow with other people living in amEricA."
let resultTest2 = /America/ig.test(str);  //RETURNS FALSE

_("8. REGEX.TEST(STRING) result test(): ", resultTest);
_("9. REGEX.TEST(STRING) result test() 2: ", resultTest2);

// 3. match():

// applied on the string. Returns array of results or null.

let resultMatch = str.match(reg);
let resultMatch2 = str2.match(/America/ig);

_("10. STRING.MATCH(REGEX) result match(): ", resultMatch)
_("11. STRING.MATCH(REGEX) result match() 2: ", resultMatch2)

// 4. search():

// returns index of "first match" or -1.

let resultSearch = str.search(reg);   //RETURNS 11
let resultSearch2 = str.search(/America/ig); //RETURNS -1

_("12. STRING.SEARCH(REGEX) result Search: ", resultSearch)
_("13. STRING.SEARCH(REGEX) result Search 2: ", resultSearch2)

// 5. replace():

// returns new string with all the replacements applied. replaces only the first match if g modifier is not used.

let resultReplace = str.replace(reg, "Mark");
let resultReplace2 = str2.replace(/America/ig, "INDIA");

_("14. STRING.REPLACE(REGEX, NEWSTRING) result replace(): ", resultReplace)
_("15. STRING.REPLACE(REGEX, NEWSTRING) result replace() 2: ", resultReplace2)

// Go to regex2.js