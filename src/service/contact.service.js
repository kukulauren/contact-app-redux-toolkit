import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (e) {
    throw { error: true, msg: e.message };
  }
};
export const addNewContact = async (formData) => {
  try {
    const res = await api.post("contact", formData);
    if (res.data) {
      return res.data.success;
    }
  } catch (e) {
    throw { error: true, msg: e.message };
  }
};
export const getSingleContact = async (id) => {
  try {
    const res = await api.get(`contact/${id}`);
    if (res.data) {
      return res.data.contact;
    }
  } catch (e) {
    throw { error: true, msg: e.message };
  }
};
export const editContact = async (id, formData) => {
  try {
    const res = await api.put(`contact/${id}`,formData);
    if(res.data){
      return res.data.success
    }
  } catch (e) {
    throw { error: true, msg: e.message };
  }
};
export const deleteContact=async (id)=>{
  try {
    const res = await api.delete(`contact/${id}`);
    return res
  } catch (e) {
    throw { error: true, msg: e.message };
  }
}