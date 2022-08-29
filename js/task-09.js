const refs = {
  widget: document.querySelector(".widget"),
  valueColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
}

refs.buttonChangeColor.addEventListener("click", () => {

  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.valueColor.textContent = randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

