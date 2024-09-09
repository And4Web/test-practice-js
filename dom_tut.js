// DOM defines a standard which allows programs and scripts to dynamically access and update the HTML content. With object model, JS gets all the power it needs to create dynamic HTML. using it, we can do following actions:

//0. finding HTML elements
const domId = document.getElementById("dom");
const dom2 = document.querySelector(".dom");
const domClass = document.querySelectorAll(".dom");
const dom3 = document.getElementsByTagName("p");
const dom4 = document.getElementsByClassName("dom");

// console.log("domId: ", domId)
// console.log("domClass: ", domClass)
// console.log("dom2: ", dom2)
// console.log("dom3: ", dom3)
// console.log("dom4: ", dom4)

const domChildren = dom2.childNodes;
const parentNode = dom2.parentNode;
const nextSibling = domChildren[0].nextSibling;
const prevoiusSibling = domChildren[domChildren.length - 1].previousSibling;

// console.log("domChildren: ", domChildren)
// domChildren.forEach(c=>{
//   console.log(c.innerHTML)
// });
// domChildren.forEach((c)=>{
//   if(c.nodeName !== "#text"){
//     console.log("child: ", c)
//   }
// })
// console.log("parentNode: ", parentNode)
// console.log("firstChild: ", domChildren[0], dom2.firstChild)
// console.log("nextSibling: ", nextSibling,  nextSibling.nodeValue,  nextSibling.innerHTML)
// console.log("previousSibling: ", prevoiusSibling, prevoiusSibling.nodeValue, prevoiusSibling.innerHTML)
// console.log("lastChild: ", domChildren[domChildren.length - 1], dom2.lastChild)

//1. change HTML element
domId.innerHTML = "this is dom";
const newHTML = `<p id="dom5">this is the new HTML</p>`;
// dom2.innerHTML = newHTML;
// console.log("dom3[1]: ")
// dom2.innerHTML = "this is dom2"
// console.log("dom2.innerHTML: ", dom2.innerHTML)

//2. change HTML element's attributes
domId.attributes; 
// console.log("domId attributes: ", domId.attributes)
domId.setAttribute(
  "style",
  "color: green; border: 1px solid black; width: 50%; border-radius: 5px; padding: 1rem; text-align: center"
);

//3. change HTML element's css style
dom2.style.border = "1px solid green";
dom2.style.padding = "1rem";
dom2.style.textAlign = "center";
dom2.style.width = "75%";

dom2.addEventListener('mouseover', ()=>dom2.classList.add('active'))
dom2.addEventListener('mouseout', ()=>dom2.classList.add('inactive'))


//4. remove existing HTML element (removing nodes)

const removeP = document.createElement("p");
const rText = document.createTextNode(
  "This is the p element which we are going to remove."
);
removeP.appendChild(rText);

const rDiv = document.createElement("div");
rDiv.setAttribute(
  "style",
  "border: 1px solid blue; color: green; margin: 1rem 0; width: 70%; padding: 1rem; border-radius: 5px"
);
rDiv.innerHTML = `<h2>remove Element using remove()</h2>`;

document.body.appendChild(rDiv);

const rButton = document.createElement("button");
const rButton2 = document.createElement("button");

rButton.innerHTML = "Remove";
rButton2.innerHTML = "Bring back";

rButton.setAttribute(
  "style",
  "cursor: pointer; background-color: white; color: black; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
);
rButton2.setAttribute(
  "style",
  "cursor: pointer; background-color: black; color: white; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
);

rDiv.appendChild(rButton);
rDiv.appendChild(rButton2);

rDiv.appendChild(removeP);

rButton.addEventListener("click", () => {
  removeP.remove();
  rButton.innerHTML = "Removed";
  rButton2.innerHTML = "Bring back";
  rButton.setAttribute(
    "style",
    "cursor: pointer; background-color: black; color: white; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
  );
  rButton2.setAttribute(
    "style",
    "cursor: pointer; background-color: white; color: black; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
  );
});
rButton2.addEventListener("click", () => {
  rDiv.appendChild(removeP);
  rButton2.innerHTML = "Got back!";
  rButton.innerHTML = "Remove";
  rButton2.setAttribute(
    "style",
    "cursor: pointer; background-color: black; color: white; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
  );
  rButton.setAttribute(
    "style",
    "cursor: pointer; background-color: white; color: black; outline: none; text-decoration: none; border: 1px solid black; border-radius: 5px; padding: .5rem; margin-right: .5rem"
  );
});

// console.log(rDiv.childNodes[1])

//5. remove existing HTML element's attributes

//6. add new HTML elements (adding nodes)
const newP = document.createElement("p");
const textValue = document.createTextNode(
  "This is new p element created using createElement and createTextNode inside a new div element. After creating the nodes, append one into another using appendChild. appendChild adds a node at the end of an element. We can use insertBefore() to add a node in the beginning of an element. See next example"
);

// appendChild() method to add an element at the last position inside an element:
newP.appendChild(textValue);

const newDiv = document.createElement("div");

newDiv.setAttribute("id", "newDiv");
newDiv.setAttribute(
  "style",
  "color: green; border: 1px solid red; width: 70%; border-radius: 5px; padding: 1rem; text-align: center"
);
newDiv.innerHTML = `<h2>This is the new Div element</h2>`;

newDiv.appendChild(newP);

newDiv.childNodes[0].style.color = "blue";
newDiv.childNodes[0].style.textDecoration = "underline";

document.body.appendChild(newDiv);

const newP2 = document.createElement("p");
const newText = document.createTextNode("using insertBefore()");
newP2.appendChild(newText);
// document.body.appendChild(newP2)

const newDiv2 = document.createElement("div");
newDiv2.setAttribute(
  "style",
  "color: green; border: 1px solid green; width: 70%; border-radius: 5px; padding: 1rem; text-align: center; margin-top: 1rem"
);
newDiv2.innerHTML = `<h2>insertBefore() => not working</h2>
<h2>replaceChild()</h2>`;
newDiv2.appendChild(newP2);

newDiv2.childNodes[0].style.color = "blue";
newDiv2.childNodes[0].style.textDecoration = "underline";

// insertBefore() method to add an element before an element:
const childNode0 = newDiv2.childNodes[0];
newDiv2.insertBefore(newP2, childNode0);

document.body.appendChild(newDiv2);
// console.log(newDiv2.childNodes[0]);

// replacing HTML element:
const replaceBtn = document.createElement("button");
replaceBtn.innerHTML = "Replace p element on the top with another p element";
newDiv2.appendChild(replaceBtn);

const replaceP = document.createElement("p");
const replaceText = document.createTextNode(
  "this replaces the older text in previous p element."
);

replaceP.appendChild(replaceText);

replaceBtn.addEventListener("click", () => {
  if (newDiv2.childNodes[0] === newP2) {
    newDiv2.classList.remove("inactive");
    newDiv2.replaceChild(replaceP, newP2);
    newDiv2.classList.add("active");
   
  } else {
    newDiv2.classList.remove("active");
    newDiv2.replaceChild(newP2, replaceP);
    newDiv2.classList.add("inactive");
  }
});
console.log(newDiv2);

//7. add new HTML element's attributes

//8. react to all existing HTML events in the page

//9. create new HTML events in the page
