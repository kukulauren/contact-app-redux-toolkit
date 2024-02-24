import React, { useState } from "react";

const useApi = (fun) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: null,
    data: null,
  });
  //object destructuring
  const { loading, error, data } = apiData;

  const handleDealApi = async (formData) => {
    //loading stage
    setApiData((pre) => ({ ...pre, loading: true }));

    // data fetching. Here we set the function in another file=>auth.service
    const res = await fun(formData);

    if (res.error) {
      //catching error
      setApiData((pre) => ({ ...pre, loading: false, error: res.msg }));
    } else {
      //if no error, we get data.
      setApiData((pre) => ({ ...pre, loading: false, data: res.data }));
    }
  };
  return {handleDealApi, loading, error, data};
};

export default useApi;
