const output = document.querySelector(".output");

function getCheckAmount() {
    return document.getElementById("checkAmount").value;
}

function totalCheck(tipAmount,checkAmount) {
    let total = parseFloat(tipAmount) + parseFloat(checkAmount);
    return total;
}

function calQuickTip() {
    let quickTipOptions = document.getElementsByName('quickTipOption');
    for (i = 0; i < quickTipOptions.length; i++ ) {
        if (quickTipOptions[i].checked) {
            let checkAmount = getCheckAmount();
            console.log("Calculating Quick Tip for " + checkAmount );
            let selectedTipPercentage = quickTipOptions[i].value / 100;
            let tipAmount = (selectedTipPercentage * checkAmount).toFixed(2);
            let total = totalCheck(tipAmount,checkAmount);
            output.innerHTML = `<h2> You should tip $${tipAmount} on $${checkAmount} <br><br>
            The total is $${total}</h2>`;
            
        }
    }
}

const customTipButton = document.getElementById('customTipButton');
customTipButton.addEventListener("click", calCustomTip);

function calCustomTip() {
    let checkAmount = getCheckAmount();
    console.log("Calculating Custom Tip for " + checkAmount );
    let customPercent = (document.getElementById("customPercent").value) / 100;
    let tipAmount = (customPercent * checkAmount).toFixed(2);
    let total = totalCheck(tipAmount,checkAmount);
    output.innerHTML = `<h2> You should tip $${tipAmount} on $${checkAmount} <br><br>
    The total is $${total}</h2>`;
}






