let userArray: = [];
const arrayField = document.querySelector(".array-input");
const userAnswer = document.querySelector(".user-answer");
const instructionsField = document.querySelector(".instructions");
const methodSelectorSection = document.querySelector(".methods");
const methodSelector = document.querySelector("select");
const resultSection = document.querySelector(".result");
const tryAgainButton = document.querySelector(".try-again");

const handleInputSubmit = (event) => {
  event.preventDefault();
  userArray = userAnswer.value.split(",");
  arrayField.reset();
  arrayField.classList.add("--hidden");
  methodSelectorSection.classList.remove("--hidden");
  instructionsField.textContent =
    "Ahora, elige uno de los métodos para ver el resultado que saldría al aplicárselo a tu array.";
  return userArray;
};

arrayField.addEventListener("submit", handleInputSubmit);

tryAgainButton.addEventListener("click", () => location.reload());
