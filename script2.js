// Q17: Remove all duplicates in an array:
let arr = [1,2,2,3,4,5,6,6];

// method1: using Set:
function removeDuplicate(arr){
  const set = new Set();
  arr.forEach(el=>set.add(el));
  return Array.from(set);
}
console.log("method1: ", removeDuplicate(arr),arr);

// method2:
function removeDuplicate2(arr){
  return [...new Set(arr)];
}
console.log("method2: ", removeDuplicate2(arr),arr);

// method3: using reduce and includes methods:
function removeDuplicate3(arr){
  return arr.reduce((acc, el)=>{
    return acc.includes(el)? acc : [...acc, el];
  }, [])
}
console.log("method3: ", removeDuplicate3(arr),arr);

// method4: using forEach and push methods, most basic:
function removeDuplicate4(arr){
  let result = [];
  arr.forEach(el=>{
    if(!result.includes(el)){
      result.push(el)
    }
  })
  return result;
}
console.log("method4: ", removeDuplicate4(arr),arr);


// Q18: Sort the Array of numbers:
function sortArr2(arr, option){
  if(option === "a"){
    return arr.sort((a, b)=> a < b ? -1 : 1)
  }else{
    return arr.sort((a, b)=> a < b ? 1 : -1)

  }
}

let arr2 = [2,5,9,3,7,1,0,18,11,12,29,17]
console.log("Sorted array: ", sortArr2(arr2, "a"))
console.log("Sorted array: ", sortArr2(arr2, "d"))

// remember, sort() method modifies the original array.

// Q19: Extract last name of the author from a list of objects containing book's details:
let books = [
  {id: 1, book: "Harry Potter", author: "J K Rowling"},
  {id: 2, book: "Warcross", author: "Marie Lu"},
  {id: 3, book: "The Hunger Games", author: "Suzanne Collins"},
]
console.log(books.map(book=>book.author.split(" ")[book.author.split(" ").length - 1]))

// Q20: Sort the array or objects having list of books by author's last name:
console.log(books.sort((book1, book2)=>{
  let book1AuthorLastName = book1.author.split(" ")[book1.author.split(" ").length - 1];
  let book2AuthorLastName = book2.author.split(" ")[book2.author.split(" ").length - 1];
  return book1AuthorLastName < book2AuthorLastName ? -1 : 1
}))
// for strings, the sort() methods checks the first letter and sorts based on their position in the alphabet.

// Q21: Write a function which implements range:
// implementRange(1,20) outputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// method1: using for loop:
function implementRange(n1, n2){
  let rangeArr = [];
  for(let i=n1; i <= n2; i++){
    rangeArr.push(i);
  }
  console.log("Range Array using for: ", rangeArr)
  return rangeArr;
}

// method2: using while loop:
function implementRange2(n1, n2){
  let range = n2-n1;
  let rangeArr = [];
  while(n1 <= n2){
    rangeArr.push(n1);
    n1++
  }
  console.log("Range Array using while: ", rangeArr)
  return rangeArr;
}

// method3: using do-while loop:
function implementRange3(n1, n2){
  
  let rangeArr = [];
  do{
    rangeArr.push(n1);
    n1++
  }while(n1 <= n2)

  console.log("Range Array using do-while: ", rangeArr)
  return rangeArr;
}
// method4: advanced method:
function implementRange4(start, end){
  let rangeArr = [...Array(end).keys()].map(el=>el+start);
  console.log("Range Array advanced: ", rangeArr)
  return rangeArr;
  
}


// implementRange(1,50);
// implementRange2(1,50);
implementRange3(1,20);
implementRange4(1,20);

// Q22 onwards in script3.js
