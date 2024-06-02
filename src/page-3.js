import axios from "axios";
import { getAllContacts, getElementByID, postElement, deleteContactById, updateContactById } from "./js/apicontacts";

getAllContacts();
// getElementByID(18);
postElement({ name: "Jared", phone: 911 })
// deleteContactById(19);
updateContactById(20, {name: "Patron", phone: 322})

