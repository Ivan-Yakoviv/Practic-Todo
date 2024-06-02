import { KEY } from './js/constance';
import { onRender } from './js/pagerender';
import { form, taskList } from './js/reference';
import { listRemover } from './js/listedition';
import { addTask } from './js/addtask';

onRender(taskList);
listRemover(taskList, KEY);

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const value = event.target.elements.taskName.value.trim();
    if (!value) return;
    addTask(value);
}); 
