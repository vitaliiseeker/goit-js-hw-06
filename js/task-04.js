const counter = document.querySelector("#value");
const buttonDecreaseValue = document.querySelector("button[data-action='decrement']");
const buttonIncrementValue = document.querySelector("button[data-action='increment']");
let counterValue = 0;

buttonDecreaseValue.addEventListener("click", onButtonDecrease);
buttonIncrementValue.addEventListener("click", onButtonIncrement);
document.addEventListener("keydown", isKeyPressed);

function onButtonDecrease() {
  counterValue -= 1;
  counter.textContent = counterValue;
};

function onButtonIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
};

function isKeyPressed(evt) {
  switch (evt.code) {

    case "ArrowDown":
      onButtonDecrease();
      break;

    case "ArrowUp":
      onButtonIncrement();
      break;

    case "Escape":
      counter.textContent = 0;
      break;
  }
}


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.