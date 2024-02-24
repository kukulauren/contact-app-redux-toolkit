import React, { useEffect } from "react";
import { PreventComponents } from "../components";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleAdd = () => {
    nav("/home/contactadd");
  };
  useEffect(() => {
    (async () => {
      const res = await getProfile();
    })();
  }, []);
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className="container mx-auto h-screen">
        <div className=" w-[80%] mx-auto h-full">
          <nav className="flex justify-between px-2 py-3 shadow ">
            <Link to="/home">Contact App</Link>
            <div className="space-x-5">
              <button className="" onClick={handleAdd}>
                Add
              </button>
              <button className="" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
