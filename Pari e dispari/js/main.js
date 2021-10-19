let form = document.querySelector("form");

form.addEventListener("submit", playTheGame);

function playTheGame(e) {
  e.preventDefault();

  let numberInput = getUserInputNumber();
  let generatedNumber = generateRandomNumber();
  result = calculateResult(numberInput, generatedNumber);

  revealAINumber(generatedNumber);
  displayResult(result);
  displayWinner(result);
}

function getUserInputNumber() {
  let userInput = form.querySelector('input[type="number"]').value;
  return parseInt(userInput); //A number is needed to return but the type of the input value is string
}

function generateRandomNumber() {
  return Math.round(Math.random() * 4) + 1;
}

function calculateResult(numberInput, generatedNumber) {
  return numberInput + generatedNumber;
}

function revealAINumber(generatedNumber) {
  let randomNumber = document.querySelector("#number-random");
  randomNumber.textContent = generatedNumber;
}

function displayResult(result) {
  let resultOutput = document.querySelector(".result");
  resultOutput.textContent = "Risultato: " + result + ". Il vincitore è:";
}

function displayWinner(result) {
  let winnerOutput = document.querySelector("#winner");
  let isUserTheWinner = getWinOrNot(result);
  let message = getWinnerMessage(isUserTheWinner);
  winnerOutput.textContent = message;
}

function getWinOrNot() {
  let userOddOrEvenChoice = form.querySelector(":checked").value;
  let isUserTheWinner;
  if (userOddOrEvenChoice === "even") {
    isUserTheWinner = isEven(result);
  } else {
    isUserTheWinner = isOdd(result);
  }
  return isUserTheWinner;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function getWinnerMessage(isUserTheWinner) {
  let message;
  if (isUserTheWinner) {
    message = "Tu";
  } else {
    message = "A.I.";
  }
  return message;
}
