const counter = document.querySelector("#value");
const ButtonDecreaseValue = document.querySelector("button[data-action='decrement']");
const ButtonIncrementValue = document.querySelector("button[data-action='increment']");

let counterValue = 0;

ButtonDecreaseValue.addEventListener("click", onButtonDecrease);
ButtonIncrementValue.addEventListener("click", onButtonIncrement);
counter.parentElement.parentElement.addEventListener("keydown", isKeyPressed);
// document.getElementsByTagName('body')[0].addEventListener("keydown", isKeyPressed); //---- another search option

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