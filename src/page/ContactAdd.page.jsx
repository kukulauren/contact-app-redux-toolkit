import React, { useEffect, useState } from "react";
import { ButtonComponents, FormComponents } from "../components";
import { addNewContact, editContact } from "../service/contact.service";
import { useNavigate, useLocation } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const location = useLocation();
  useEffect(() => {
    if (location.state?.edit) {
      const { id, name, phone, address, email } = location.state.data;
      setFormData({ name, phone, address, email });
    }
  }, [location]);

  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.data.id, formData);
    } else {
      res = await addNewContact(formData);
    }
    console.log(res);
    if (res) {
      nav("/");
    }
  };
  return (
    <div className="center">
      <div className="w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-5 font-bold text-center capitalize">
          Create your contact
        </h1>
        <form onSubmit={handleSubmit} className=" space-y-7 mt-5">
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.name}
            name={"name"}
            type={"text"}
            label={"Name"}
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.phone}
            name={"phone"}
            type={"text"}
            label={"Phone"}
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.email}
            name={"email"}
            type={"email"}
            label={"Email"}
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.address}
            name={"address"}
            type={"text"}
            label={"Address"}
          />
          <ButtonComponents type="submit">
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
