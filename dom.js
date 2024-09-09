// Q32: Highlight all of the words over 8 characters long in a paragraph text (with a yellow background for example)
const {log: _} = console;
// const q32 = document.getElementById("q32");
const q32 = document.querySelector("#q32");
q32.innerHTML = q32.innerHTML.split(" ").map(word=> {
  return word.length > 10 ? `<span style="background-color: yellow">${word}</span>` : word
}).join(" ");


// Q33: Add a link back to the source of the text after the paragraph tag. (example: https://www.google.com)

const link = document.createElement('a');
link.href = 'https://www.google.com';
link.innerText = " Go to GOOGLE"
q32.appendChild(link);


// Q34: Split each new sentence to a separate line in the paragraph text. A sentence can be assumed to be a string of text terminated with a period.

q32.innerHTML = q32.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";

// refer regexr.com for regex tutorials.
// _("element: ", q32.innerHTML);

// Q35: Implement a click on todo item as fast as possible
const items = document.querySelectorAll(".item")
items.forEach(e=>e.style.cursor = "pointer")

// method1: using forEach to loop through the whole list of elements(slow method);
items.forEach(e=>e.addEventListener("click",()=>_("clicked method1 >>> " + e.innerText)))

// method2: only adding eventListener to the parent element so no need to loop through all the elements in the node list(faster method):
const app = document.querySelector(".todo-app");
app.addEventListener("click", (e)=>{
  if(e.target && e.target.classList.contains("item")){
    _("clicked method2 >>> " + e.target.innerText)
  }
})

// Q36 onwards in fetch.js: