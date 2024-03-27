import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";

const SiteBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sitebar">
      <div className="logo" onClick={()=>navigate('/')}>
        <img src={logo} alt="" />
        <p>UZMARKET</p>
      </div>
      <div className="sitebarLinks">
        <p>Bosh menyu</p>

        <button className="link" onClick={()=>navigate('/electronics')}>Elektornika</button>
        <button className="link">Maishiy texnika</button>
        <button className="link">Kiyim</button>
        <button className="link">Aksessuarlar</button>
        <button className="link">Chiroy</button>
        <button className="link">Salomatlik</button>
        <button className="link">Oyoq kiyim</button>
        <button className="link">Yosh bollar uchun</button>
        <button className="link">Sport</button>
        <button className="link">Kitoblar</button>

      </div>
    </div>
  );
};

export default SiteBar;
