//Using rest operator to bind the values in an array...Example of E-commmerce Ekart item value price

function calculateCartvalue(...val1){
return val1
}
console.log(calculateCartvalue(200,300,400,500,600));

//Objects as arguments in function

const user={
    username:"Abhishek",
    courseprice: 1000
}
function objectIn(anyobject){
    console.log(`Username is ${anyobject.username}`);
}
objectIn(user)

// Array in JavaScript function as an arguments

const myArray= [100,200,300,400,500]
function getSecondvalue(anyarray){
    console.log(anyarray[1]);
    
}
getSecondvalue(myArray)
