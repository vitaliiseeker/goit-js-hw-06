const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
}

// input.addEventListener("input", (evt) =>
//   span.textContent = evt.target.value === ""
//     ? "Anonymous" : evt.target.value);

refs.input.addEventListener("input", inputChange);

function inputChange(evt) {
  refs.input.parentElement.addEventListener("keydown", isKeyPressed);
  evt.target.value ?
    onChange(evt.target.value) :
    toCleane();
}

function isKeyPressed(evt) {
  if (evt.code === "Escape") {
    toCleane();
    refs.input.parentElement.removeEventListener("keydown", isKeyPressed);
  }
}

function onChange(value) {
  refs.span.textContent = value;
}

function toCleane() {
  refs.span.textContent = "Anonymous";
  refs.input.value = "";
}

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

