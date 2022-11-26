let button = document.querySelector(".nav__button");
let body = document.querySelector(".js-bodyBackground")
let darkButton = document.querySelector(".js-nav__color")
let ex = document.querySelector(".day__select");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    button.classList.toggle("nav__button--bright")
    if (body.classList.contains("dark")) {
        darkButton.innerText = "jasny"
    } else {
        darkButton.innerText = "ciemny"
    }
});

const excercisesButtonElement = document.querySelector('#js-exercises__button');
const excercisesChooseElement = document.querySelector('#js-exercises__choose')
let excercisePickedElement = document.querySelector('.js-exercises__ex')

excercisesButtonElement.onclick = (event) => {
    event.preventDefault();
    excercisePickedElement.innerHTML = excercisesChooseElement.value;
};

let response = document.querySelector(".container__response").innerText
let responseTable = document.querySelector(".container__table")





