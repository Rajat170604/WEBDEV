const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});
promiseOne.then(function () {
    console.log("promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("promise consumed");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "rajat", email: "rajat@example.in" });
    }, 1000);
});
promiseThree.then((user) => {
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (error) {
            resolve({ userName: "rajat", email: "rajat@example.in" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});
promiseFour
    .then((user) => {
        console.log(user);
        return user.userName;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: "rajat", email: "rajat@example.in" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});
async function consumePromiseFive() {
    try {
        const reponse = await promiseFive;
        console.log(reponse);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getUsers() {
//     try {
//         const responseOne = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responseOne.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);
//     }
// }
// getUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//     })
    
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => console.log(error))


fetch('https://api.github.com/users/Rajat170604')
    .then((response) => {
        return response.json()
    })
    
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
