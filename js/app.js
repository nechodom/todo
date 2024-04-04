const inputField = document.getElementById("inputText");
const submitButton = document.getElementById("add");
const output = document.getElementById("text");

submitButton.addEventListener("click", function () {
  const inputValue = inputField.value;

  const newElement = document.createElement("h2");
  newElement.textContent = inputValue;

  output.appendChild(newElement);
});
