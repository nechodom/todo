/**
 * TODO:
 * - [ ] dopsat create task
 * - [ ] ziskavat data z locale storage a vlozit do data[]
 * - [ ] udelat popup s informaci o vytvoreni/chybach tasku
 */

const form = document.querySelector("form");
const inputText = document.querySelector("#inputText");
const add = document.querySelector("#submit");
const data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
	// declare vars

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
  const template = `
    <div class="todo-card">
      <h2 id="text">${data[0].text}</h2>
      <button>Upravit</button>
      <button>Smazat</button>
    </div>
  `;

	// check
	console.log("data", data)
	console.log("template", template)

	// reset form
  inputText.value = "";
}

