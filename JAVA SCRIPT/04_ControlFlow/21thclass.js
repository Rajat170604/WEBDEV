// loops

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log(`${i} detected`);
//         break;
//     }
//     console.log();
//     for (let j = 0; j < 10; j++) {
//         if (j == 5) {
//             console.log(`${j} detected`);
//             continue;
//         }
//         console.log(`${i}\t${j}`);
//     }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(i);
// } while (i < 1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of arr) {
//     console.log(iterator);
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("FR", "FRANCE");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("USA", "UNITED STATES OF AMERICA");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObj = {
    game1: "NFS",
    game2: "Spider Man",
};

// for (const [key, value] of myObj) {
//     console.log(`${key} :- ${value}`);
// }

// for (const key in myObj) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

for (const key in myObj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    // }
    // console.log(`${key} :- ${myObj[key]}`);
}

for (const key in arr) {
    // console.log(`${key} :- ${arr[key]}`);
}

// for (const key in map) {
//     console.log(key);
// }  //  not itretable

// arr.forEach(printMe);

// function printMe(items) {
//     console.log(items);
// }

arr.forEach((element, index, arr) => {
    // console.log(element, index, arr);
});

const newobj = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    },
];

newobj.forEach((item) => {
    // console.log(`${item.languageName} :- ${item.languageFileName}`);
});

const coding = ["js", "java", "python", "c", "cpp"];
const values = coding.forEach((item) => {
    // console.log(item);
    return item;
});
// console.log(values);

const res = arr.filter((nums) => nums > 4); // returns inplicitly......
// console.log(res);

const res1 = arr.map((nums) => nums + 4); // returns inplicitly......
// console.log(res1);

const res2 = arr.map((nums) => nums * 10).map((nums) => nums + 2); // returns inplicitly......
// console.log(res2);

const res3 = arr
    .map((nums) => nums * 10)
    .map((nums) => nums + 2)
    .filter((nums) => nums > 40); // returns inplicitly......
// console.log(res3);

// const init = 0;
// const res4 = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, init
// ); // returns inplicitly......
// console.log(res4);


const init = 0;
const res4 = arr.reduce(function (acc, curval) {
    // console.log(`acc :- ${acc}\tcurval :- ${curval}`);
    return acc + curval
}, 0) // returns inplicitly......
// console.log(res4);




const myShoppingCart = [
    {
        courseName: "js",
        coursePrice: 449
    },
    {
        courseName: "python",
        coursePrice: 449
    },
    {
        courseName: "web dev",
        coursePrice: 1449
    },
    {
        courseName: "mobile dev",
        coursePrice: 3449
    },
    {
        courseName: "hacking",
        coursePrice: 7449
    }
]

const totalPrice = myShoppingCart.reduce((acc, item) => acc + item.coursePrice , 0)
console.log(totalPrice);