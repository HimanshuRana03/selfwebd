/*spread operator as a function 
function print(a,b)
{
    console.log("a",a);
    console.log("b",b);
}
const arr=['hello','Himanshu'];
//print(arr);
print(...arr);//spread operator ...

//as a array
const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
console.log(arr1);
console.log(arr2);
*/

/*
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript.
function print1(...a)
{
    console.log(a);
}
print1("hello","hi","h");

function print2(b,...a)// rest parameter hamesha last mai lagega kyuki wo baki bachi saari values le leta hai agar phele lagaege toh woh saari values le lega aur dusre parameters ko values nahi milengi
{
    console.log(b);
    console.log(a);
}
print2("hello","hi","h");
*/

/*Destructuring allows us to "unpack" values from data-structures (Arrays, objects) 
into separate distinct variables
const arr=[1,2,3,4,5];

const [a,b,c]=arr;
console.log("a",a);
console.log("b",b);
console.log("c",c);

//in functions
function f() 
{
    return [1,2];
}
[a1,b1]=f();
console.log("a1",a1);
console.log("b1",b1);

//in objects the order does not matter but the name does matter  
const obj={name:"Himanshu",age:21};
//const{hello}=obj;
//console.log(hello); //undefined throw kar raha hai kyuki wo object mai hum phele se hi label declare kar dete hai
const{name,age}=obj;
console.log(name);
//renaming 
const obj1={a:10,b:30};
const{a:x,b:y}=obj1;
console.log(x);
console.log(y);
*/

/*for of loop */
const name="Himanshu";
for( let char of name)
{
    console.log(char);
}

const arr1=["a","b","c"];
for(let variable of arr1)
{
    console.log(variable);
}
