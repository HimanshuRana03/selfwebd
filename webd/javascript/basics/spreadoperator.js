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
into separate distinct variables*/
