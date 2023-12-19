const form = document.querySelector("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let weight = parseFloat(document.querySelector('#weight').value)
    let height = parseFloat(document.querySelector('#height').value)
    let result = document.querySelector('.result')

    if (weight === '' || weight <= 0 || isNaN(weight)) {
        document.querySelector('.result').appendChild(document.createTextNode("Enter valid weight"))
    } else if (height === '' || height <= 0 || isNaN(height)) {
        document.querySelector('.result').appendChild(document.createTextNode("Enter valid height"))
    } else {
        let bmi = ((weight) / (height ** 2)).toFixed(2)
        if (bmi < 18.6) {
            result.innerHTML = `<br><span>Your BMI = ${bmi}</span><br><span>You are Under weight</span><br>`
        } else if (bmi >= 18.6 && bmi <= 29.4) {
            result.innerHTML = `<br><span>Your BMI = ${bmi}</span><br><span>You are Normal weight</span><br>`
        } else {
            result.innerHTML = `<br><span>Your BMI = ${bmi}</span><br><span>You are Over weight</span><br>`
        }
    }

})