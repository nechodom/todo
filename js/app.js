let form = document.querySelector("form");
let inputText = document.querySelector("#inputText");
let add = document.querySelector("#submit");
let msg = "";
let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (inputText.value === "") {
    console.log("error!");
    msg.innerHTML = "Text nemůže být prázdný!";
  } else {
    console.log("Úspěšně přidán nový task!");
    msg.innerHTML = "";
    acceptData();
  }
};

let acceptData = () => {
  data.push({
    text: inputText.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log("data");
  createTask();
};

let createTask = (e) => {
  text.innerHTML = "";
  data.map((x, y) => {
    return (text.innerHTML += `
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
