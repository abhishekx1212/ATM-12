let balance = 1000

function btnInput(V) {
    var txtInput = document.getElementById('txtInput')
    txtInput.value = V
}

function doProcess() {
    const result = document.getElementById('result')
    switch (txtInput.value) {
        case "checkBalance":
            result.value = `YOUR BALANCE IS ₹${balance}`;
            break;
        case "deposit":
            const depositAmount = document.getElementById('withDepo').value;
            if (!isNaN(depositAmount) && depositAmount > 0) {
                balance += parseFloat(depositAmount);
                result.value = `DEPOSITED ₹${depositAmount}. \nYOUR NEW BALANCE IS ₹${balance}`;
            } else {
                result.value = 'ENTER AMOUNT!!!'
            }
            break;
        case "withdraw":
            const withdrawAmount = document.getElementById('withDepo').value;
            if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                if (withdrawAmount <= balance) {
                    balance -= parseFloat(withdrawAmount);
                    result.value = `WITHDRAWN ₹${withdrawAmount}. \nYOUR NEW BALANCE IS ₹${balance}`;
                } else {
                    result.value = "INSUFFICIENT FUNDS";
                }
            }else {
                result.value = 'ENTER AMOUNT!!!'
            }
            break;
        default:
            result.value = "INVALID ACTION";
    }

}