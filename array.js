// How to declare an array-

let myArray= [1,2,3,4,5,6]
//console.log(myArray);
let newArray= new Array(7,8,9,10,11)
//console.log(newArray);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Different Methods used in array


// console.log(newArray.join());
//console.log(myArray.push(12));
myArray.push(10)
//console.log(myArray);
myArray.pop()
//console.log(myArray);
myArray.unshift(9)
//console.log(myArray);
myArray.shift()
//console.log(myArray);
console.log(myArray.includes(5));
console.log(myArray.indexOf(5));
const myarr2= myArray.slice(0,4)
console.log(myarr2);
console.log(myArray);
const myArr1= myArray.splice(1,3)
console.log(myArr1);
console.log(myArray);