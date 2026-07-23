// this are some simple comparision oprators
//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 == 1);
//console.log(2 != 1);


//console.log("2" > 1);// js atomatically compaire two diffrent datatypes and give result here result is => true for both.
//console.log("02" > 1);

console.log(null > 0); //=>flase
console.log(null == 0);//=>false
console.log(null >= 0);//=>true
// the reson is that an equality check == and comparisons><,>=<= work diffrently. Comparisons convert null to a number, treating it as 0. that's why (3) null >= 0 ture and (1)null > 0 is false.

console.log(undifined == 0);// => error
console.log(undifined > 0);
console.log(undifined < 0);

//=== this is a assigment oprator (strict chek) it not just compair but also check the datatype and then chek or compaire.