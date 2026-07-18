let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber)

//when conversion is done then
//"33" string in a Number => 33

// and when onversion is not happens then
//"33abc" string return the => NaN(Not a Number) returns
// when the value or variable is true => then return 1 ame as false=> 0
// Null => 0 
//undefined => NaN(Not a Number)

let isLoggedIn = 0

let booleanIsLoggedIn =Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

// when convert number into Boolean 
//1 => true; 0 => false (skipping 0 to false if i input any no the result always gets true.)
//"" empty string => false
//"Gaurav" => true

// NO to String 

let total = 10

let stringNumber = String(total)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// when we convert the no into a string it converts the no into a string but we cant see it like a string like a ("") doubble quets 

//*****************************OPRATIONS***************************************************

let value = 3

let negvalue = -value

console.log(negvalue)

// we have multiple oprations like this 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);
// console.log(2**2);

let str1 = "hello"
let str2 = " Gaurav"

let str3 = str1 + str2
console.log(str3)

console.log(1 + "2"); // Number and string cant add result => 12
console.log("1" + 2); // same string and Number cant add
console.log("1" + 2 + 3 );// when we want to add first string and after that multiple no it will not add is acy like a string result => 123
console.log(1 + 2 + "3"); // and when we want to add a frist Number and afetr that a string it will add a first no then add a steing like result => 33 (frist add 1+2 = 3 and then it adds "3" a string and gove result is 33)
 // and in this assigment oprators here the prefix and postfix oprators are works like 
 //console.log(++ture) => result will the 1
 //consol.log(true--) => result will be the error
