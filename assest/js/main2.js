
let usera = 'qwer'
let pina = 1234
let balance = 1000

function doProcess() {

    const user = document.getElementById("user").value;
    const pin = document.getElementById("pin").value;
    const result = document.getElementById('result')
    if (usera == user && pina == pin) {
        let hide = document.getElementById('hello')
        // hide.style.display = `block`
       hide.style.opacity = '1'
        // hide.style.transition = 'transition: 1s ease-in-out';
    }
    else {
        result.value = "INVALID USER OR PIN"
        return;
    }
}
