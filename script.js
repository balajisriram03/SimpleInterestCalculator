const inputOne = document.getElementById("num1");
const inputTwo = document.getElementById("num2");
const inputThree = document.getElementById("num3");
const principalAmountWindow = document.getElementById("result0");
const totalAmountWindow = document.getElementById("result1");
const totalResultWindow = document.getElementById("result2");

function displayResult(value, elementID) {
    document.getElementById(elementID).value = value;
}

function disp() {
    let principal = +inputOne.value;
    let rate = +inputTwo.value;
    let time = +inputThree.value;
    let timePeriod = document.getElementById("tp").value;
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
alert("Please enter valid numbers in all boxes!");
return;
}

     if (timePeriod === "month") {

time = time / 12;
}

    let result0 = principal;
    let result1 = principal + (rate / 100) * principal * time;
    let result2 = (rate / 100) * principal * time;

    displayResult(result0, "result0");
    displayResult(result1, "result1");
    displayResult(result2, "result2");
}