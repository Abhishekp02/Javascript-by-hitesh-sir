// Constructor object
//singleton

//Symbol Decleration in Objects-
const mySymbol= Symbol("key1")

//Objects Literals
const oneUser={
    name: "Abhishek",
    id: 123,
    [mySymbol]: "myKey",
    email: "abhishek@google.com",
    isLoggedIn: true
}
// way to access objects value in js-

//1st Way
console.log(oneUser.name);

//2nd Way
console.log(oneUser["email"]);
console.log(oneUser);

// Functions in Objects

oneUser.greeting= function(){
    console.log("hello userOne");
}
console.log(oneUser.greeting());