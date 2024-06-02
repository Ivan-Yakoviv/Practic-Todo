import { KEY } from "./constance";
import { getLocalStorage } from "./lshelpers";

export function onRender(list) {
    const data = getLocalStorage(KEY);
    if (!data) return;
    const startMarkUp = data.map(item => `<li id="${item.id}">${item.text}<button type="button" class="close-btn">X</button></li>`).join("");
    list.insertAdjacentHTML("beforeend", startMarkUp)
}