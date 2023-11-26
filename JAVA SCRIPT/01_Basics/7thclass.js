// Memory management

// Stack (primitive), Heap(non-primitive)

let myName = "Rajat"

let anotherName = myName
console.log(anotherName);

anotherName = "RajatKumar"

console.log(myName);
console.log(anotherName);

let u1 = {
    name1: "adssssssssas",
    mnum : 51
}

console.log(u1.name1);

let u2 = u1

u2.name1 = "jhsgdvc"

console.log(u1.name1);
console.log(u2.name1);