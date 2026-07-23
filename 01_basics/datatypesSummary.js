// primitive data types(call by values)

// 7 types : 1> String 2> Number 3> Boolean 4>Null 5>Undefined 6>Symbol 7>BigInt
// Intiger datatypes =>
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);
const bigNumber = 34623487324732n


// refrence (Non primitive)=>(refrence can be allowcate.)

//1> Arry 2> Objects 3> Functions

const cars = ["Bmw", "auodi", "thar"] //=> Arry / refrence type/non primitive

//let myObj = {        
//    name: Gaurav, // object currly brackets data (key-value paires)
//    age : 23,
//}

//const myFunction = function(){
//    console.log("Hello World");// this is a function
//}

//console.log(typeof outsideTemp);


// all non-primitive dataypes comes always a function.
// and datatype of function is object function datatype.

//**********************************************************************

// STACK AND HEAP MEMORY 
// Stack(used in primitive datatypes take a copy of variable that is declead)
//Heap(used in non-primitive datatypes take a refrce of a variable that is decleaed.)

let myYoutubename = "404GauravFound"

let anothername = myYoutubename
anothername = 'gauravyadav'

console.log(myYoutubename);// myYoutubename ahe as rahil mnje yachi copy ahe ahi pude dili .
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "user@oksbi"
}

let userTwo = userOne

userTwo.emial="gauravgoogle.com"

console.log(userOne.email)
console.log(userTwo.email)// mail change nhi hot as it is rahto mnje email hi value heap chya refrence mdun ghetli 
//mje apn ithe je changes krto te original value mde changes krto.