// Functions contd...

function calculateCartPrice(...num) {
    return num
}

// console.log(calculateCartPrice(100, 3102, 5421, 32454, 6541321));

const user = {
    userName: "Hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} & price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName: "sam",
    price: 249
})

const myNewArrays = [543,4351,9764,541321,5647]

function returnsecondValue(getArray) {
    return getArray[1]
}

// console.log(returnsecondValue(myNewArrays));
console.log(returnsecondValue([100,200,300,400,500,600,700,800,900]));