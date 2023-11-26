let score = "33";
let score1 = "33abc";
//console.log(typeof score);
let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
let valueInNumber1 = Number(score1);
//console.log(typeof valueInNumber1);
//console.log(valueInNumber1);

/* type conversion of different data types into number
    string=>NaN
    null=>0
    true=>1
    false=>0
    undefined=>NaN
*/

let isLoggedin = 1;
let booleanIsLoggedIn = Boolean(isLoggedin);
//console.log(booleanIsLoggedIn);

/*
    conversion of empty string into boolean is false
    conversion of string into boolean is true
*/

let num = 33
let stringNum = String(num)
console.table([stringNum, typeof stringNum])