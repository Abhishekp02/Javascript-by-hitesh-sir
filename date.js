let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.getTimezoneOffset());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let createdDate= new Date("10-08-2023")
console.log(createdDate);
console.log(createdDate.getDate());
console.log(createdDate.getMonth()+1);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myTimeStamp= Date.now()
console.log(myTimeStamp);
 Date.now("10-08-2023")
 console.log(Date());
console.log(createdDate.getTime());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let newDate= new Date()
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))