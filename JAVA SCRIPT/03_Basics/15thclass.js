// functions

function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("T");
}

// sayMyName()

function addTwoNumbers(num1, num2) {
    console.log(num1+num2);
}

// addTwoNumbers(3, 5)
// addTwoNumbers(3, 'a')
// addTwoNumbers("b", 4)
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3, 5)
// console.log(`Results: ${result}`);

function addTwoNumbers1(num11, num22) {
    // const result1 = num11+num22
    // console.log("Rajat");
    // return result1
    // const result1 = num11+num22 // after returning nothing can be executed

    return num11+num22
}
// const result2 = addTwoNumbers1(3, 5)
// console.log("Results: ", result2);

/*
function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please Enter a username");
    // }

    if (!username) {
        console.log("Please Enter a username");
    }
    return `${username} Just logged in`
}
// console.log(loginUserMessage("Rajat"));
*/


function loginUserMessage(username = "sam") // for default value
{ 
    // if (username === undefined) {
    //     console.log("Please Enter a username");
    // }

    if (!username) {
        console.log("Please Enter a username");
    }
    return `${username} Just logged in`
}


console.log(loginUserMessage()); // undefined just logged in


