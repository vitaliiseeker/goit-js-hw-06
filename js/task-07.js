const refs = {
    slider: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}

refs.slider.addEventListener("input", (evt) => refs.text.style.fontSize = evt.target.value + "px");

// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
