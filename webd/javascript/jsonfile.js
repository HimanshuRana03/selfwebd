/*in json
{
"name":"Himanshu",
"age":21,
"address":{
    "city":"Mumbai",
    "country":"India"
}
}
*/
//in javascript to convert an object to json format
const person={
name:"Himanshu",
age:21,
address:{
    city:"Mumbai",
    country:"India"
}
};
const jsonperson=JSON.stringify(person);
console.log(jsonperson);//stringify to convert js to json
console.log(JSON.parse(jsonperson));//json to js 