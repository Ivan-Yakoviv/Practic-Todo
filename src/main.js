import { nanoid } from 'nanoid'

//TODO-1

// Напишіть логіку обробнику подій по сабміту

// При сабміті треба у змінну записувати значення поля інпута

// Повинна бути перевірка на порожнє поле

const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

onRender();

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const value = event.target.elements.taskName.value.trim();
    if (!value) return;
    addTask(value);
}); 



//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски



function generateList(text, id) {
    const markUP = `<li id=${id}>${text}<button type="button">X</button></li>`
    taskList.insertAdjacentHTML("beforeend", markUP);
}

//TODO-3
// Написати функцію яка буде зберігати данні в сховище вигляді об'єкта { id: value, text: value}



function addTask(text) {
    const id = nanoid();
    const formData = {
        id,
        text
    };
    generateList(text, id);
    const taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
    taskArr.push(formData);

    localStorage.setItem("tasks", JSON.stringify(taskArr));
}

function onRender() {
    const data = JSON.parse(localStorage.getItem("tasks"));
    console.log(data);
    const startMarkUp = data.map(item => `<li id="${item.id}">${item.text}<button type="button">X</button></li>`).join("");
    taskList.insertAdjacentHTML("beforeend", startMarkUp)
}

