const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
}

refs.input.addEventListener("input", inputChange);

function inputChange(evt) {
  document.addEventListener("keydown", isKeyPressed);
  evt.target.value ?
    onChange(evt.target.value) :
    toCleane();
}

function isKeyPressed(evt) {
  if (evt.code === "Escape") {
    toCleane();
    document.removeEventListener("keydown", isKeyPressed);
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

