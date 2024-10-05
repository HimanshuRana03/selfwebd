//objects -> key value pairs

/*let object={
    name:"Himanshu rana",

    greet: function()
    {
        console.log("hello");
    }
};
//console.log(object);
object.greet();*/

//arrays ->collection of items

//let arr=[1,2,3,4];
//array consstrutor
/*let arr= new Array('Himanshu',2,4,true);
//console.log(arr); 
//console.log(arr[0]);

arr.push('rana');
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('rana');
console.log(arr);
*/

let arr=['himanshu',1,2];

let ans=arr.filter((value)=>{
    if(typeof(value)=='string')
    {
        console.log(value);
    }
});
console.log(ans);

