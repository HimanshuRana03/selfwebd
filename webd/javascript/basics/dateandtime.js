/*date and time
const date = new Date();
console.log(date);

console.log(date.toDateString());
const year= date.getFullYear();
console.log(year);

// const hrs= date.getHours();
// console.log(hrs);

// const months=date.getMonth();
// console.log(months);
*/


/*set interval(repeatedly calling a function with fixed interval of time) and set timeout

function hello()
{
    console.log("hello");
};
setInterval(
    hello,2000
);

setTimeout(function(){
    console.log("hi");
},10000);

*/


/*Template Strings Template strings, also known as template literals, are a feature in JavaScript 
//that allows you to create strings with embedded expressions(``). They are denoted by backticks instead 
// of single or double quotes. Template strings provide a more flexible and concise way to construct 
// strings, especially when they involve variables or expressions.

console.log(`hello
my name
is Himanshu`);

const name="Himanshu";
console.log(`${name}`);
*/



/*Arrow Functions , also known as fat arrow functions,
are a concise and shorter way to define functions in JavaScript.
*/
add=(a,b)=>
    {
        return (a+b);
    }
let result=add(5,5);
 console.log(result);