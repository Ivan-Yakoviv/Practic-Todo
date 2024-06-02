import { nanoid } from "nanoid";
import { taskList } from "./reference";
import { KEY } from "./constance";
import { getLocalStorage, setLocalStorage } from "./lshelpers";

export function addTask(text) {
    const id = nanoid();
    const formData = {
        id,
        text
    };
    const markUP = `<li id=${id}>${text}<button type="button" class="close-btn">X</button></li>`;
    taskList.insertAdjacentHTML("beforeend", markUP);
    const taskArr = getLocalStorage(KEY) || [];
    taskArr.push(formData);

    setLocalStorage(KEY, taskArr);
}