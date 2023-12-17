
let usera = 'trigon'
let pina = 1212
let balance = 1000

function doProcess() {

    const user = document.getElementById("user").value;
    const pin = document.getElementById("pin").value;
    const result = document.getElementById('result')
    if (usera == user && pina == pin) {
        let hide = document.getElementById('hello')
        hide.style.display = `block`
    }
    else {
        result.value = "INVALID USER OR PIN"
        return;
    }
}
