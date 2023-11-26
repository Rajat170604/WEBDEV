// Objects
// Singleton 
// Object.create  //(singleton)


// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Rajat",
    "full name": "Rajat Kumar Dalai",
    mySym: "mykey1", // wrong as it is not a symbol rather a string
    [mySym]: "mykey1", // symbol declaration inside an object
    age: 19,
    location: "Berhampur",
    email: "r@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.age = 20
// Object.freeze(jsUser)
jsUser.age = 21
// console.log(jsUser);

jsUser.greetings = function () {
    console.log("Hello Js user");
}

console.log(jsUser.greetings);
console.log(jsUser.greetings());

jsUser.greetings1 = function () {
    console.log(`Hello Js user, ${this.name} `);
}
console.log(jsUser.greetings1());
