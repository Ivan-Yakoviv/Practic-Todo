//TODO-1

// Напишіть логіку обробнику подій по сабміту

// При сабміті треба у змінну записувати значення поля інпута

// Повинна бути перевірка на порожнє поле

const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const value = event.target.elements.taskName.value.trim();
    if (value === "") {
return;
    }
    generateList(value);
    console.dir(event.target.elements.taskName.value);
}); 



//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски



function generateList(text) {
    const markUP = `<li>${text}<button type="button">X</button></li>`
    taskList.insertAdjacentHTML("beforeend", markUP);
}

