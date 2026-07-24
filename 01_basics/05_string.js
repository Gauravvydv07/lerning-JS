const name = "Gaurav"
const repoCount = 5

//console.log(name + repoCount + "Repositorys"); // this is old way to add(conkatinate)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// modern way = string interpolation.

const gameName = new String(`Gaurav-v-ydv`)// another or a main way declear the string.

//console.log(gameName[0]);// this shows the position
//console.log(gameName.__proto__);// this is shows the prototype like is this object or is this function etc..

//more objects (pstring methods)=

// console.log(gameName.length); // shows the lenght of string
// console.log(gameName.toUpperCase()); //make the upercase the string
// console.log(gameName.charAt(5)); // shows which charachter at this index 
// console.log(gameName.indexOf('v'));// shows the index of this character.

// const newString = gameName.substring(0, 4)//= shows the string in between the index of 0 to 3 "it not shows the 4th mens last index character."
// console.log(newString);

//const anotherString = gameName.slice(-8, 3)// slice the string with (start index, end index.)
//console.log(anotherString);

const newStringOne = "  Gaurav  "
console.log(newStringOne);
console.log(newStringOne.trim());// remove the space between the string 

const url = "https://gaurav.com/gaurav%20yadav"// to replce a characher or to replase anything form string

console.log(url.replace('%20', '-'))

console.log(url.includes('@gmail.com'));//checks this string contain a given part and return true and false ..

console.log(gameName.split('-')); // convert strin to arry with the sparator we give it.like a (just a scape('') 'or '-' a dash between what and where we want to brek to arr.)