let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('.submit')
const userInput = document.querySelector('.userip')
const numberOfGuesses = document.querySelector('.numberOfGuesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const resultParameter = document.querySelector('.resultParameter')

const p = document.createElement('p')

let guesses = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
        const userGuess = parseInt(userInput.value)
        validateGuess(userGuess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number")
    } else if (guess < 1) {
        alert("Please Enter a Number more than 0")
    } else if (guess > 100) {
        alert("Please Enter a Number less than 100")
    } else if (guess === '') {
        alert("Please Enter a Valid Number")
    } else {
        guesses.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}.`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Too Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    numberOfGuesses.innerHTML += `${guess} -> `
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<br><h2>${message}</h2><br><p> </p>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<br><button class="newGame">Start New Game</button><br>`
    resultParameter.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random * 100 + 1)
        guesses = []
        numGuess = 1
        numberOfGuesses.innerHTML = ''
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        resultParameter.removeChild(p)
        displayMessage(`Enjoy Your Game...`)
        playGame = true
    })
}