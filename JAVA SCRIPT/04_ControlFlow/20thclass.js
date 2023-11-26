// conditionals
// <, >, ,=, >=, ==, ===, !=, !==


// const userLoggedin = true

// if (2 == "2") {
//     console.log("executed");
// }

// if (2 === "2") {
//     console.log("executed");
// } else {
//     console.log("failed");
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000

// if (balance > 500) console.log(test); // implicit execution

// if (balance > 500) console.log(test), console.log("test2"); // don't do this rather use braces

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

// const userLoggedin = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedin && debitCard) {
//     console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const month = 1

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("chose correct one");
//         break;
// }




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const userEmail = "r@rajat.ai.in"

// if (userEmail) {
//     console.log("Got it");
// } else {
//     console.log("Provide it");
// }

/*
    falsy values

    false, 0, -0, BigInt 0n, "", null, undefined, NaN

*/

/*
    truthy values

    true, 1, "0", 'false', " ", [], {}, function(){}, 
*/

// const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// } else {
//     console.log("not empty");
// }

const userEmail = {}

// if (Object.keys(userEmail).length === 0) {
//     console.log("Object is empty");
// } else {
//     console.log("not empty");
// }




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??) nill undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10

// console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("lessthan 80") : console.log("more than 80");