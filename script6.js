const {log: _} = console;
// Q47: Design a function which returns a Fibonacci sequence value:
// Fibonacci sequence: the nth terms is the sum of (n-1)th and (n-2)th term:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,....

function fibonacci(n){
  if(typeof n === "undefined" ){
    throw new Error("value of n is not provided.")
  }
  if(n < 2){
    return 1;
  }else{
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

_(fibonacci(9))
_(fibonacci(7))
_(fibonacci(5))

// function to create a Fibonacci sequence upto certain index:
function fibonacciSeq(index){
  if(typeof index ==="undefined" ){
    throw new Error('an index as limit of the sequence is required.')
  }
  let fibArr = [0, 1]
  if(index < 2){
    _("Fibonacci Sequence of length ${index}: ", fibArr);
    return fibArr;
  }else{
    for(let i = 2; i <= index; i++){

    }
    _("Fibonacci Sequence of length ${index}: ", fibArr)
    return fibArr;
  }

}

_(fibonacciSeq(1));
_(fibonacciSeq(11));

// Q48: Write a function which check if a string is a plindrome:
// Palindrome is a string which is same from both beginning and the end. example: fof

function isPalindrome(str){
  return str === str.split("").reverse().join("");
}

_(isPalindrome("fof"))
_(isPalindrome("foo"))

// Q49: Write a function which checks if string is an anagram:

// Anagram are words that have the same characters in same quantity. This means two strings are anagrams if we can rearrange one and get the other.
// Here are some examples or words that are anagram:
// "listen" and "silent"
// "rail safety" and "fairy tales"
// "dormitory" and "dirty room"
// "the eyes" and "they see"

function isAnagram(str1, str2){
  
  let str1Mod = str1.split("").filter((c)=>c !== " ").join("");
  let str2Mod = str2.split("").filter((c)=>c !== " ").join("");
  _(str1Mod, str2Mod)
  if(str1Mod.length !== str2Mod.length){
    return false;
  }

  if(str1Mod === str2Mod){
    return false;
  }

  let lowerStr1 = str1Mod.toLowerCase();
  let lowerStr2 = str2Mod.toLowerCase();

  return lowerStr1.split("").sort().join("") === lowerStr2.split("").sort().join("");

}

_(isAnagram("listen", "silent"))          //true
_(isAnagram("listen", "excellent"))       //false
_(isAnagram("the Eyes", "They see"))      //true
_(isAnagram("dormitory", "dirty room"))   //true
 
// Q50: Write a function which counts vowels in a string:

function countVowels(str){
  const vowels = ['a','e','i','o','u'];
  // method1: using reduce 
  return str.toLowerCase().split("").reduce((acc, char)=>{
    return vowels.includes(char) ? acc + 1 : acc;
  }, 0)

  // method2: using for-of loop;
  // let count = 0;
  // for(let char of str.toLowerCase()){
  //   if(vowels.includes(char)){
  //     count++;
  //   }
  // }
  // return count;
}

_("vowels in Anand: ", countVowels("Anand iurse"))
_("vowels in Greiggory: ", countVowels("Greiggory"))

// Q51 onwards in script7.js