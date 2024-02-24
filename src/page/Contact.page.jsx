import React, { useEffect, useState } from "react";
import { deleteContact, getContactData } from "../service/contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";

const ContactPage = () => {
  const [item, setItem] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [deleteItem,setDeleteItem]=useState(false);
  const handleDelete=async (id) => {
    await deleteContact(id);
    setDeleteItem((pre)=>!pre)
  }
  useEffect(() => {
    (async () => {
      const res = await getContactData();
      if (res.error) {
        setItem((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItem((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [deleteItem]);
  return (
    <div>
      <div className=" flex justify-center items-center flex-col">
        {item.loading ? (
          <LoadingComponents />
        ) : (
          <>
            {item.error ? (
              <h1>{item.error}</h1>
            ) : (
              item.data.map((i) => <ContactCardComponents handleDelete={handleDelete} key={i.id} data={i}/>)
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
