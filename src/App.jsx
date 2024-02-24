import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  ContactAddPage,
  ContactPage,
  DetailContactPage,
} from "./page";
const App = () => {
  return (
    <main className="">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="contact/:id" element={<DetailContactPage/>} />
          <Route path="contactadd" element={<ContactAddPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
