// object contd.

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "kjasdhf@gmai.com",
    fullName: {
        userFirstNmae: "Rajat",
        userMiddleNmae: "Kumar",
        userLastNmae: "Dalai"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFirstNmae);
// console.log(regularUser.fullName?.userFirstNmae); // checks iff available or not (mostly during response from apis)

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}
// let obj3 = { obj1, obj2}
// let obj3 = Object.assign(obj1, obj2)
// let obj3 = Object.assign({}, obj1, obj2)

let obj3 = {...obj1, ...obj2}
// console.log(obj3);

const arr = [
    {
        id: 1,
        mail: "skdbvk"
    },
    {
        id: 1,
        mail: "skdbvk"
    },
    {
        id: 1,
        mail: "skdbvk"
    },
    {
        id: 1,
        mail: "skdbvk"
    },
    {
        id: 1,
        mail: "skdbvk"
    }
]

// console.log(arr[0].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));