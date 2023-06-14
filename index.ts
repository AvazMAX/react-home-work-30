const container: HTMLDivElement = document.createElement("div");
container.className = "container";

const containerBtn: HTMLDivElement = document.createElement("div");
containerBtn.className = "containerBtn";

const inputFirst: HTMLInputElement = document.createElement("input");
inputFirst.type = "number";

const inputSecond: HTMLInputElement = document.createElement("input");
inputSecond.type = "number";

const h1: HTMLHeadingElement = document.createElement("h1");
h1.className = "h1";

const buttonPlus: HTMLButtonElement = document.createElement("button");
buttonPlus.innerText = "+";
buttonPlus.addEventListener("click", () => {
  const value1: number = +inputFirst.value;
  const value2: number = +inputSecond.value;
  const result: number = value1 + value2;
  h1.innerText = `Result: ${result}`;
  inputFirst.value = "";
  inputSecond.value = "";
});

const buttonMinus: HTMLButtonElement = document.createElement("button");
buttonMinus.innerText = "-";
buttonMinus.addEventListener("click", () => {
  const value1: number = +inputFirst.value;
  const value2: number = +inputSecond.value;
  const result: number = value1 - value2;
  h1.innerText = `Result: ${result}`;
  inputFirst.value = "";
  inputSecond.value = "";
});

const buttonMultiplications: HTMLButtonElement =
  document.createElement("button");
buttonMultiplications.innerText = "*";
buttonMultiplications.addEventListener("click", () => {
  const value1: number = +inputFirst.value;
  const value2: number = +inputSecond.value;
  const result: number = value1 * value2;
  h1.innerText = `Result: ${result}`;
  inputFirst.value = "";
  inputSecond.value = "";
});

const buttonDivision: HTMLButtonElement = document.createElement("button");
buttonDivision.innerText = "/";
buttonDivision.addEventListener("click", () => {
  const value1: number = +inputFirst.value;
  const value2: number = +inputSecond.value;
  const result: number = value1 / value2;
  h1.innerText = `Result: ${result}`;
  inputFirst.value = "";
  inputSecond.value = "";
});

containerBtn.append(
  buttonPlus,
  buttonMinus,
  buttonDivision,
  buttonMultiplications
);
container.append(inputFirst, inputSecond, containerBtn, h1);
document.body.append(container);
