const counter = document.querySelector("#value");
const ButtonDecreaseValue = document.querySelector("button[data-action='decrement']");
const ButtonIncrementValue = document.querySelector("button[data-action='increment']");

let counterValue = 0;

ButtonDecreaseValue.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

ButtonIncrementValue.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.