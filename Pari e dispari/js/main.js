let form = document.querySelector("form");
let resultOutput = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let numberInput = parseInt(form.querySelector('input[type="number"]').value);
  let userOddOrEvenChoice = form.querySelector(":checked").value;
  generatedNumber = Math.round(Math.random() * 5);
  result = numberInput + generatedNumber;

  if (userOddOrEvenChoice === "even") {
    if (result % 2 === 0) {
      resultOutput.textContent = "Tu!";
    } else {
      resultOutput.textContent = "A.I.!";
    }
  } else {
    if (result % 2 !== 0) {
      resultOutput.textContent = "Tu";
    } else {
      resultOutput.textContent = "A.I.";
    }
  }
});
