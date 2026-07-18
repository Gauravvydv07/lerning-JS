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
console.log(stringNumber);
console.log(typeof stringNumber);

// when we convert the no into a string it converts the no into a string but we cant see it like a string like a ("") doubble quets 