//arithmetic
let a=5;
let b=8;
console.log(a** b);
console.log(++a);
console.log(a>b);
 b=6;
//=== strictly equal both the variable should have same type of values and same data
console.log(a===b);
a=8;
console.log(a>b?a:b);
console.log("Himanshu Rana");

//logical with non booleans
//falsy and truthy (falsy->null,0,nan,undefined,false,' ' truthy->anything which is not falsy)

//short-circuiting (eg:- false||true||false||false) agar koi bhi element true miljata hai toh aage dekhne ki jaruat hi nahi

//num>>1 right shift by 1 then that num is div by 2
//num<<1 left shift by 1 then that num is * by 2

let number=3;
if(number==3)
{
    console.log("ye hai same number");
}
else {
    console.log("ye hai different number");
}