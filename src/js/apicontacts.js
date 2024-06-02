import axios from "axios";

const BASE_URL = "https://64859281a795d24810b7146a.mockapi.io/work";

export async function getAllContacts() {
    try {
        const response = await axios.get(`${BASE_URL}/contacts`)
    } catch(error) {
		console.log(error);}
}

export async function getElementByID(id) {
    try {
        axios.get(`${BASE_URL}/contacts/${id}`)
    } catch(error) {
		console.log(error);}
}

export async function postElement(data) {
  try {
      axios.post(`${BASE_URL}/contacts/`, data)
    } catch(error) {
		console.log(error);}
}

export async function updateContactById(id, data) {
  try {
      axios.put(`${BASE_URL}/contacts/${id}`, data)
    } catch(error) {
		console.log(error);}
}

export async function deleteContactById(id) {
  try {
      axios.delete(`${BASE_URL}/contacts/${id}`)
    } catch(error) {
		console.log(error);}
}

