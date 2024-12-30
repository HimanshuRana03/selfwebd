/*console.log("hello");
console.error("this is an unexpected error that is caused");
console.warn("sudhar ja");
console.table({name:"Himanshu Rana",subject:"Newbie"});

let a="Himanshu Rana"
console.log( a+" is a " +typeof a);
*/
//type conversion
/*let number=10;
// string to number1 number = Number(number);
//2 number=parseInt(number);
//number to string
number = number.toString();
console.log(number);
console.log(typeof number);*/

/*
conditional statements
let password=1;
if (password==8)
{
    console.log("password is correct");
}
else if(password>=8)
{
    console.log("password is too long")
}
else if(password<=8)
{
    console.log("password is too short");
}
else{
    console.log("enter the correct password ")
}*/

/*switch case
let ans=4;
let bulb="";

switch(ans)
{
    case 0:
        bulb="off";
        break;
    case 1:
        bulb="on";
        break;
    default:
        bulb="no choice made";
        break;
}
console.log(bulb);
*/

/*arrays
push,pop,unshift(push at front),shift(pop from front),sort,includes,conncat
const array=["a","e","i","o","u"];
console.log(array.length);
array.push("p");
console.log(array.length);
console.log("popped element is "+array.pop());
console.log(array.length);
console.log(array.includes("a"));
*/

/*objects 
const person={
    name:"Hhimanshu Rana",
    age:21,
    country:"India"
};
console.log(person.name);
//another method
console.log(person["age"]);
*/

/*callback function is a fuction in which a function is passed as a parameter */
function fun(name,func)
{
    console.log(name);
    func();
}
fun("Himanshu Rana",function()
{
    console.log("I am a callback function");
});

function a(b)
{
    let value="Himanshu";
    b(value);
}
a(function(value){
    console.log(value);
});