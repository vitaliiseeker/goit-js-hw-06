function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");
const valueColor = widget.firstElementChild.lastElementChild;
const buttonChangeColor = widget.lastElementChild;
const body = widget.parentNode;

buttonChangeColor.addEventListener("click", () => {

  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;
})


// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

