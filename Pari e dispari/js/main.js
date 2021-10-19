let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let numberInput = parseInt(form.querySelector('input[type="number"]').value);
  let userOddOrEvenChoice = form.querySelector(":checked").value;
  generatedNumber = Math.round(Math.random() * 4) + 1;
  result = numberInput + generatedNumber;

  let resultOutput = document.querySelector(".result");
  let winnerOutput = document.querySelector("#winner");
  let randomNumber = document.querySelector("#number-random");
  randomNumber.textContent = generatedNumber;
  resultOutput.textContent = "Risultato: " + result + ". Il vincitore è:";

  if (userOddOrEvenChoice === "even") {
    if (result % 2 === 0) {
      winnerOutput.textContent = "Tu";
    } else {
      winnerOutput.textContent = "A.I.";
    }
  } else {
    if (result % 2 !== 0) {
      winnerOutput.textContent = "Tu";
    } else {
      winnerOutput.textContent = "A.I.";
    }
  }
});
