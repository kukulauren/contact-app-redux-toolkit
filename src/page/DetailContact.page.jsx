import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleContact } from '../service/contact.service';
import { LoadingComponents } from '../components';
import DetailContactItemComponents from '../components/DetailContactItem.components';

const DetailContactPage = () => {
    const [item,setItem]=useState({
        loading:true,
        data:null,
        error:null
    })
    const {id}=useParams();
    useEffect(() => {
        (async () => {
            const res=await getSingleContact(id);
            if (res.error) {
              setItem((pre) => ({ ...pre, loading: false, error: res.msg }));
            } else {
              setItem((pre) => ({ ...pre, loading: false, data: res }));
            }
        })()
    },[id])
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
              <div className="">
                <DetailContactItemComponents key={item.id} item={item} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DetailContactPage