var container = document.createElement("div");
container.className = "container";
var containerBtn = document.createElement("div");
containerBtn.className = "containerBtn";
var inputFirst = document.createElement("input");
inputFirst.type = "number";
var inputSecond = document.createElement("input");
inputSecond.type = "number";
var h1 = document.createElement("h1");
h1.className = "h1";
var buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";
buttonPlus.addEventListener("click", function () {
    var value1 = +inputFirst.value;
    var value2 = +inputSecond.value;
    var result = value1 + value2;
    h1.innerText = "Result: ".concat(result);
    inputFirst.value = "";
    inputSecond.value = "";
});
var buttonMinus = document.createElement("button");
buttonMinus.innerText = "-";
buttonMinus.addEventListener("click", function () {
    var value1 = +inputFirst.value;
    var value2 = +inputSecond.value;
    var result = value1 - value2;
    h1.innerText = "Result: ".concat(result);
    inputFirst.value = "";
    inputSecond.value = "";
});
var buttonMultiplications = document.createElement("button");
buttonMultiplications.innerText = "*";
buttonMultiplications.addEventListener("click", function () {
    var value1 = +inputFirst.value;
    var value2 = +inputSecond.value;
    var result = value1 * value2;
    h1.innerText = "Result: ".concat(result);
    inputFirst.value = "";
    inputSecond.value = "";
});
var buttonDivision = document.createElement("button");
buttonDivision.innerText = "/";
buttonDivision.addEventListener("click", function () {
    var value1 = +inputFirst.value;
    var value2 = +inputSecond.value;
    var result = value1 / value2;
    h1.innerText = "Result: ".concat(result);
    inputFirst.value = "";
    inputSecond.value = "";
});
containerBtn.append(buttonPlus, buttonMinus, buttonDivision, buttonMultiplications);
container.append(inputFirst, inputSecond, containerBtn, h1);
document.body.append(container);
