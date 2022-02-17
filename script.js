function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit')
        return getPin();
    }

}

// Generate Pin 
function generatePin() {
    document.getElementById('pin-field').value = getPin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('input-box');
    if (isNaN(number)) {
        if (number == "C") {
            calc.value = '';
        }
    }
    else {

        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }

})

function verifyPin() {
    const getPin = document.getElementById('pin-field').value;
    const typedNumbers = document.getElementById('input-box').value;
    const successMessage = document.getElementById('success');
    const failedMessage = document.getElementById('failed');
    if (getPin == typedNumbers) {
        successMessage.style.display = "block";
        failedMessage.style.display = "none";
    }
    else {
        successMessage.style.display = "none";
        failedMessage.style.display = "block";
    }
}