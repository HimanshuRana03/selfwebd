const firstli=document.querySelector("li");
console.log(firstli);
//parent
console.log(firstli.parentElement );
console.log(firstli.parentElement.parentElement);
console.log(firstli.parentElement.parentElement.parentElement);
//children
let ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[2]);
console.log(ul.children[0].innerText="one");
//nextsiblingElement
console.log(firstli.nextElementSibling.innerText);
//previousElementSibling
const prev=document.querySelector(".fourth");
console.log(prev.previousElementSibling.innerText);

