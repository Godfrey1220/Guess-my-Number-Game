// variables

let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

// Events

btnTry.addEventListener("click", handleClick);

btnReset.addEventListener("click", resetScreen);

// Functions

function resetScreen() {
  handleToggle();
  attempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function handleToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    handleToggle();

    document.querySelector(
      "h2"
    ).innerText = `You got it right after ${attempts} attempts.`;
  }

  attempts++;
  inputNumber.value = "";
}
