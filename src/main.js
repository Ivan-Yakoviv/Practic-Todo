//TODO-1

// Напишіть логіку обробнику подій по сабміту

// При сабміті треба у змінну записувати значення поля інпута

// Повинна бути перевірка на порожнє поле

const form = document.querySelector("#task-form");
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const value = event.target.elements.taskName.value.trim();
    if (value === "") {
return;
    }
    console.dir(event.target.elements.taskName.value);
}); 