let form = document.querySelector("form");
let inputText = document.querySelector("inputText");
let add = document.querySelector("submit");

let checkIfFoundElements = () => {
  let inputText = document.querySelector("inputText");
  if (inputText) {
    console.log("Našel jsem element inputText!");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("error!");
    msg.innerHTML = "Text nemůže být prázdný!";
  } else {
    console.log("Úspěšně přidán nový task!");
    msg.innerHTML = "";
    acceptData();
    add.click();
  }
};

let acceptData = () => {
  data.push({
    text: textInput.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log("data");
  createTask();
};

let createTask = (e) => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
        <div class="todo-card">
        <h2 id="text">${x.text}</h2>
        <button>Upravit</button>
        <button>Smazat</button>
      </div>
        `);
  });
  resetForm();
};

let resetForm = () => {
  textInput.value = "";
};
