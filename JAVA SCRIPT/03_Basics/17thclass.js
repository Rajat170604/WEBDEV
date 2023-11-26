// scopes

let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 100
    const b = 20
    var c = 30
    // console.log(`a inner = ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "jskdvbjhb"
    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "rajat"
    if (true) {
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++

// console.log(addOne(5)); // IT CAN BE DONE 

function addOne(num) {
    return num + 1
}

addOne(5)


// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    return num + 2
}

addTwo(5)