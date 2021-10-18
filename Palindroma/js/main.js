let userEntry = prompt(
  "Inserisci una parola, un numero, una data, un orario o una frase per verificare che sia palindroma:"
);
let message = setResponseMessage(userEntry);
displayResponse(message);

function setResponseMessage(word) {
  formattedWord = stringToLowerCaseNoWhiteSpaces(word);
  let message;
  if (isPalindrome(formattedWord)) {
    message = word + " è palindroma";
  } else {
    message = word + " non è palindroma";
  }
  return message;
}

function stringToLowerCaseNoWhiteSpaces(word) {
  return word.toLowerCase().replace(/[/|\\\s-:]/g, "");
}

function isPalindrome(word) {
  let invertedWord = invertString(word);
  return word === invertedWord;
}

function invertString(word) {
  word = word.split("");
  let invertedWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord.push(word[i]);
  }
  invertedWord = invertedWord.join("");
  return invertedWord;
}

function displayResponse(message) {
  alert(message);
}
