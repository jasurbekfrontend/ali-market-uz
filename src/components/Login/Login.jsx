import React from "react";
import telegram from "../../assets/telegram__form.png";
import facebook from "../../assets/facebook__form.png";
import google from "../../assets/google__form.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="login__container">
      <form className="login__form">
        <h1>Hisobga kirish </h1>
        <div className="login__form-send">
          <label htmlFor="">Telefon raqam yoki e-mail</label>
          <input type="number" name="" id="" />
        </div>

        <button onClick={()=>navigate("/verify")}>Tasdiqlash kodini yuborish</button>
        <p>Yoki ijtimoiy tarmoqlar orqali</p>
        <div className="login__social-icon">
          <img src={telegram} alt="" />
          <img src={facebook} alt="" />
          <img src={google} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Login;
