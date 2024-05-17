import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import katalog from "../assets/svg/katalog.svg";
import home from "../assets/svg/home.svg";
import star from "../assets/svg/star.svg";
import { BsCart3 } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Navigator = () => {


  return (
    <div
      className="navigator"
    >
      <Link to="/">
        <img src={home} alt="" />
      </Link>
      <Link to="/katalog">
        <img src={katalog} alt="" />
      </Link>
      <Link to="/cart">
        <BsCart3 />
      </Link>
      <Link to="/account">
        <AiOutlineUser />
      </Link>
    </div>
  );
};

export default Navigator;
