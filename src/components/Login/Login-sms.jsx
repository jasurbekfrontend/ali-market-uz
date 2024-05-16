import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Loginsms = () => {
  const navigate = useNavigate();
  return (
    <form action="" className="login__form-sms">
      <h1>Tasdiqlash kodini kriting!</h1>
      <p>00:59</p>
      <div className="login__form-inp">
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
      </div>
      <h6>
        Kod kelmadimi?
        <span>Qayta yuborish</span>
      </h6>
      <button> Yuborish</button>
    </form>
  );
};

export default Loginsms;
