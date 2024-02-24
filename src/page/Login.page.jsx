import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, processing } from "../store/Slice/auth.slice";
import { Login } from "../service/auth.service";

const LoginPage = () => {
  const nav = useNavigate();
  const { loading, error, data } = useSelector((store) => store.auth);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(processing());
    const res = await Login(formData);
    dispatch(login(res.data));
  };
  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl mb-5 font-bold text-center capitalize">
                Login Your Contact
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form className=" space-y-7 mt-5" onSubmit={handleSubmit}>
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                />
                <ButtonComponents
                  type="submit"
                  style={"select-none rounded-lg"}
                >
                  Login
                </ButtonComponents>
              </form>
              <p className="mt-5">
                If you don't have an account, please{" "}
                <button
                  onClick={() => nav("/register")}
                  className=" text-blue-400 underline"
                >
                  register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
