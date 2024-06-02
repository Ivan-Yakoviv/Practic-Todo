import { KEY } from "./js/constance";
import { tasks } from "./js/reference";
import { onRender } from "./js/pagerender";
import { listRemover } from "./js/listedition";

onRender(tasks);
listRemover(tasks, KEY);
