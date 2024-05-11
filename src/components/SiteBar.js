import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import aksessuar from "../assets/svg/aksessuar.svg";
import bolalar from "../assets/svg/bolalar.svg";
import chiroy from "../assets/svg/chiroy.svg";
import elektronika from "../assets/svg/elektronika.svg";
import kitoblar from "../assets/svg/kitoblar.svg";
import kiyim from "../assets/svg/kiyim.svg";
import maishiy from "../assets/svg/maishiy.svg";
import oyoqkiyim from "../assets/svg/oyoqkiyim.svg";
import salomatlik from "../assets/svg/salomatlik.svg";
import sport from "../assets/svg/sport.svg";

const SiteBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sitebar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </div>
      <div className="sitebarLinks">
        <p>Bosh menyu</p>

        <button className="link" onClick={() => navigate("/electronics")}>
          <img src={elektronika} alt="" />
          Elektornika
        </button>
        <button className="link">
          <img src={maishiy} alt="" /> Maishiy texnika
        </button>
        <button className="link">
          <img src={kiyim} alt="" /> Kiyim
        </button>
        <button className="link">
          <img src={aksessuar} alt="" /> Aksessuarlar
        </button>
        <button className="link">
          <img src={chiroy} alt="" /> Chiroy
        </button>
        <button className="link">
          <img src={salomatlik} alt="" /> Salomatlik
        </button>
        <button className="link">
          <img src={oyoqkiyim} alt="" /> Oyoq kiyim
        </button>
        <button className="link">
          <img src={bolalar} alt="" /> Yosh bollar uchun
        </button>
        <button className="link">
          <img src={sport} alt="" /> Sport
        </button>
        <button className="link">
          <img src={kitoblar} alt="" /> Kitoblar
        </button>
      </div>
    </div>
  );
};

export default SiteBar;
