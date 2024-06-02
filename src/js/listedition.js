import { getLocalStorage, setLocalStorage } from "./lshelpers";

export function listRemover (list, KEY) {
    list.addEventListener("click", (event) => {
        if (!(event.target.classList.contains("close-btn"))) return;
        const storageArr = getLocalStorage(KEY)
        const reducedArr = storageArr.filter(item => item.id !== event.target.parentNode.id);
        setLocalStorage(KEY, reducedArr);
        event.target.parentNode.remove();
    })
}