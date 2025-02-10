//createElement()
//const h1=document.createElement("h1");
//h1.textContent="Himanshu Rana is my name";

//console.log(h1);


//appendChild()
//const body= document.body;
//body.appendChild(h1);

//insertBefore()
const ul= document.querySelector("ul");
const newli=document.createElement("li");
newli.textContent="Himanshu Rana";

const oldli=document.querySelector("li");
ul.insertBefore(newli,oldli);


//append()
//const sections= document.querySelector("section");

//const i=document.createElement("i");
//i.innerText="Hello !";

//sections.append(i);

//prepend()
//sections.prepend(i);

//insertAdjacentElement()
//const para=document.querySelector("p");

//const addition_sentence=document.createElement("i");//italics type ka
//addition_sentence.textContent="Himanshu Rana is my name";

//para.insertAdjacentElement("beforebegin",addition_sentence);
//para.insertAdjacentElement("afterbegin",addition_sentence);
//para.insertAdjacentElement("beforeend",addition_sentence);
//para.insertAdjacentElement("afterend",addition_sentence);

//removeChild()
const newlist=document.querySelector(".newlist");
//const to_remove_list=document.querySelector(".four");
//newlist.removeChild(to_remove_list);

//remove()
newlist.remove();