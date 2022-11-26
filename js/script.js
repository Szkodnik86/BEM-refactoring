{
    {
        const welcome = () => {
            console.log("Witam wszystkich odwiedzających DEV", "- strona dodana do GIT.");
        };
        welcome();
    }

    {
        const button = document.querySelector(".nav__button");
        const body = document.querySelector(".js-bodyBackground");
        const darkButton = document.querySelector(".js-nav__color");
        
        button.addEventListener("click", () => {

            body.classList.toggle("dark");
            button.classList.toggle("nav__button--bright")
            if (body.classList.contains("dark")) {
                darkButton.innerText = "jasny"
            } else {
                darkButton.innerText = "ciemny"
            }
        });
    }

    {
        const excercisesButtonElement = document.querySelector('#js-exercises__button');
        const excercisesChooseElement = document.querySelector('#js-exercises__choose');
        const excercisePickedElement = document.querySelector('.js-exercises__ex');

        excercisesButtonElement.onclick = (event) => {
            event.preventDefault();
            excercisePickedElement.innerHTML = excercisesChooseElement.value;
        };
    }

}