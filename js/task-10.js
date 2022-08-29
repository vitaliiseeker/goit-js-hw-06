const refs = {
  controls: document.querySelector("#controls"),
  inputNumber: controls.firstElementChild,
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
}
let numderDiv = 0;

document.querySelector("head").insertAdjacentHTML("beforeend", `<style> #boxes { display:flex; justify-content:center; align-items:center; flex-direction: column; gap:20px;}</style>`);

refs.buttonCreate.addEventListener("click", onButtonCreate);
refs.buttonDestroy.addEventListener("click", onButtonDestroy);

function onButtonCreate() {
  if (!refs.inputNumber.value || refs.inputNumber.value < 0) return alert("Please Choose a value greater than zero!");
  createBoxes(Number.parseInt(refs.inputNumber.value));
  document.addEventListener("keydown", isKeyPressed);
}

function onButtonDestroy() {
  if (!refs.boxes.children.length) return alert("There is nothing to destroy!");
  destroyBoxes();
}

function isKeyPressed(evt) {
  if (evt.code === "Escape") {
    destroyBoxes();
    document.removeEventListener("keydown", isKeyPressed);
  }
}

function createBoxes(amount) {

  const elementDiv = [];
  for (let i = 0; i < amount; i += 1) {
    elementDiv.push(`<div style="width:${30 + (i + numderDiv) * 10}px; height:${30 + (i + numderDiv) * 10}px; background-color:${getRandomHexColor()};"></div>`);
  }
  numderDiv += amount;
  refs.boxes.insertAdjacentHTML("beforeend", elementDiv.join(""));
}

function destroyBoxes() {
  refs.boxes.textContent = "";
  refs.inputNumber.value = "";
  numderDiv = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

