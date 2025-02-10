//href
//value
//type
//setattribute(attrname,value)
//getattribute(attrname)

const a= document.querySelector("a");
console.log(a.href);

const input=document.querySelector("input");
console.log(input.value);
console.log(input.placeholder="Hello how are you"); 

input.getAttribute("value");
input.setAttribute("placeholder","Namaste");

