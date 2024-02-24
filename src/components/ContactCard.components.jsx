import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import {deleteContact} from "../service/contact.service"

const ContactCardComponents = ({ handleDelete, data }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  const handleEdit = () => {
    nav(`/home/contactadd`, {
      state: {
        edit: true,
        data: data,
      },
    });
  };
  return (
    <div className="w-2/4 h-auto border my-5 p-5 flex justify-between items-center">
      <button onClick={handleRedirect}>
        <div className="">
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div className=" space-x-5">
        <button onClick={handleEdit}>
          <CiEdit />
        </button>
        <button onClick={handleDelete.bind(this,data.id)}>
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
