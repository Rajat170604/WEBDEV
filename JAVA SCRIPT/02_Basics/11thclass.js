// Arrays

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrr = ["kajsb", "ajncan", "xaluhsca", "lkcjnljbad"]

const arr1 = new Array(1, 2, 3, 6, 5, 47, 8, 9, 0)

// .push()
// .pop()


myArray.unshift(11)
// console.log(myArray); // [11,1,2,3,4,5,6,7,8,9,10] // ans
myArray.shift()
// console.log(myArray); // [1,2,3,4,5,6,7,8,9,10] // ans

// console.log(myArray.includes(11));
// console.log(myArray.indexOf(11));

// const newArray = myArray.join()
// console.log(typeof(newArray));
// console.log(newArray);

// slice splice

// console.log("A", myArray);
// const a1 = myArray.slice(1, 4)
// console.log(a1);

// const a2 = myArray.splice(1, 4)
// console.log(a2);
// console.log("B", myArray);

const marvel_hero = ["ironman", "spiderman", "hulk", "thor"]
const dc_hero = ["superman", "batman", "flash"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);

// console.log(marvel_hero[4][1]);

// console.log(marvel_hero.concat(dc_hero));
// console.log(marvel_hero);

// const all_heros = [...marvel_hero, ...dc_hero]
// console.log(all_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const another_another_array = another_array.flat(Infinity)
// console.log(another_another_array);

// console.log(Array.isArray("Rajat"));
// console.log(Array.from("Rajat"));
// console.log(Array.from({name: "Rajat"})); // give wether to convert keys or values to an array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500
console.log(Array.of(score1,score2, score3, score4, score5));