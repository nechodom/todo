/**
 * TODO:
 * - [x] dopsat create task
 * - [ ] mít nový task vždy nahoře a dole ten nejstarší
 * - [ ] ziskavat data z locale storage a vlozit do data[]
 * - [ ] udelat popup s informaci o vytvoreni/chybach tasku
 */

const form = document.querySelector("form");
const inputText = document.querySelector("#inputText");
const add = document.querySelector("#submit");
const todos = document.querySelector("#todos");
const data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  // validation
  if (inputText.value === "") {
    console.error("error!");
    return;
  } else {
    console.log("Úspěšně přidán nový task!");
  }

  // process data
  data.push({
    text: inputText.value,
  });
  localStorage.setItem("data", JSON.stringify(data));

  // create task
  let len = data.length - 1;
  todos.innerHTML += `
    <div class="todo-card">
      <h2 id="text">${data[len].text}</h2>
      <button>Upravit</button>
      <button>Smazat</button>
    </div>
  `;

  // check
  console.log("data", data);

  // reset form
  inputText.value = "";
}

function printTodo() {
  let localData = localStorage.getItem("data");
  const obj = JSON.parse(localStorage.getItem("data"));
  if (localData) {
    for (let i = 0; i < obj.length; i++) {
      todos.innerHTML += `
        <div class="todo-card">
          <h2 id="text">${obj[i].text}</h2>
          <button>Upravit</button>
          <button>Smazat</button>
        </div>
      `;
    }
  } else {
    return;
  }
}
printTodo();
