const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

const elementsLi = ingredients.map(element => {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  elementLi.classList.add("item");
  return elementLi;
});

navEl.append(...elementsLi);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

