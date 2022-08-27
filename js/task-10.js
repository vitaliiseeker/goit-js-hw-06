const controls = document.querySelector("#controls");
const inputNumber = controls.firstElementChild;
const buttonCreate = inputNumber.nextElementSibling;
// const buttonCreate = controls.children[1]; //--- another search option
const buttonDestroy = buttonCreate.nextElementSibling;
// const buttonDestroy = controls.children[2];  //---- another search option
const boxes = controls.nextElementSibling;

document.querySelector("head").insertAdjacentHTML("beforeend", `<style> #boxes { display:flex; justify-content:center; align-items:center; flex-direction: column; gap:20px;}</style>`);

inputNumber.addEventListener("input", onButtonCreate);
buttonCreate.addEventListener("click", onButtonCreate);
buttonDestroy.addEventListener("click", onButtonDestroy);

function onButtonCreate() {
  if (!inputNumber.value || inputNumber.value <= 0) return alert("Please Choose a value greater than zero!");
  if (boxes.children.length) destroyBoxes();
  createBoxes(inputNumber.value);
  controls.parentElement.addEventListener("keydown", isKeyPressed);
}

function onButtonDestroy() {
  if (!boxes.children.length) return alert("There is nothing to destroy!");
  destroyBoxes();
}

function isKeyPressed(evt) {
  if (evt.code === "Escape") {
    destroyBoxes();
    controls.parentElement.removeEventListener("keydown", isKeyPressed);
  }
}

function createBoxes(amount) {

  const elementDiv = [];
  for (let i = 0; i < amount; i += 1) {
    elementDiv.push(`<div style="width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:${getRandomHexColor()};"></div>`);
  }
  boxes.insertAdjacentHTML("beforeend", elementDiv.join(""));
}

function destroyBoxes() {
  boxes.textContent = "";
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

