import React from "react";
import telegram from "../../assets/telegram__form.png";
import facebook from "../../assets/facebook__form.png";
import google from "../../assets/google__form.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Loginregister = () => {
  const navigate = useNavigate();

  return (
    <form className="login__form-register">
      <div className="login__form-register-title">
        <h1>Ro'yhatdan o'tish </h1>
      </div>
      <div className="login__form-send">
        <label htmlFor="">Ism</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Familya</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Telefon raqam yoki e-mail</label>
        <input type="number" name="" id="" />
      </div>

      <button onClick={() => navigate("/verify")}>
        Tasdiqlash kodini yuborish
      </button>
      <p>Yoki ijtimoiy tarmoqlar orqali</p>
      <div className="login__social-icon">
        <img src={telegram} alt="" />
        <img src={facebook} alt="" />
        <img src={google} alt="" />
      </div>
    </form>
  );
};

export default Loginregister;
