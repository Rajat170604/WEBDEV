// Arrow function

const user = {
    userName: "rajat",
    price: 999,
    welcomeMessege: function() {
        console.log(`${this.userName}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessege()
// user.welcomeMessege(user.userName="sam")

// console.log(this);

// function chai() {
//     let user1 = "jhfuh"
//     // console.log(this);
//     console.log(this.user1);
// }

// chai() // undefined // this acts on a object

// const chai = function () {
    // let user1 = "jhfuh"
    // console.log(this);
    // console.log(this.user1);
// }

// chai()

const chai =  () => {                       // arrow function declaration
    let user1 = "jhfuh"
    console.log(this);
    console.log(this.user1);
}

// chai()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const add = (num1, num2) => {
//     return num1+num2                     // explicit return
// }

// const add = (num1, num2) => (num1+num2) // implicit return

const add = (num1, num2) => ({name: "dycvkuhv"}) // to return object
console.log(add(63,54));

// let arr = [54, 54, 678, 9, 321]

// arr.forEach( () => () )
// arr.forEach(function () {} )