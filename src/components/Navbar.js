import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router";
import Catalog from "./Catalog";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [catalogToggle, setCatalogToggle] = useState(false);

  function toggle() {
    setCatalogToggle(!catalogToggle);
  }
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1210);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1210);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isWideScreen);
  return (
    <nav>
      <div className="header">
        <div className="katalog">
          {isWideScreen === true ? (
            <img onClick={() => navigate("/")} src={logo} alt="" />
          ) : (
            ""
          )}

          <svg
            onClick={() => toggle()}
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.2422 5.55469H27.6562V2.625C27.6562 1.65569 26.8678 0.867188 25.8984 0.867188H5.27344C4.30412 0.867188 3.51562 1.65569 3.51562 2.625V9.07031H1.75781C0.788498 9.07031 0 9.85881 0 10.8281V21.375C0 22.3443 0.788498 23.1328 1.75781 23.1328H7.61719C8.5865 23.1328 9.375 22.3443 9.375 21.375V17.2734H13.2422V19.6758C12.6833 19.7886 12.1694 20.0628 11.7567 20.4755C11.2033 21.0289 10.8984 21.7646 10.8984 22.5469C10.8984 22.8705 11.1607 23.1328 11.4844 23.1328H19.6875C20.0111 23.1328 20.2734 22.8705 20.2734 22.5469C20.2734 21.1322 19.2654 19.9484 17.9297 19.6762V17.2734H21.7969V21.375C21.7969 22.3443 22.5854 23.1328 23.5547 23.1328H28.2422C29.2115 23.1328 30 22.3443 30 21.375V7.3125C30 6.34319 29.2115 5.55469 28.2422 5.55469ZM4.6875 4.38281H13.2422C13.5658 4.38281 13.8281 4.12051 13.8281 3.79688C13.8281 3.47324 13.5658 3.21094 13.2422 3.21094H4.6875V2.625C4.6875 2.30182 4.95026 2.03906 5.27344 2.03906H25.8984C26.2216 2.03906 26.4844 2.30182 26.4844 2.625V3.21094H17.9297C17.606 3.21094 17.3438 3.47324 17.3438 3.79688C17.3438 4.12051 17.606 4.38281 17.9297 4.38281H26.4844V5.55469H23.5547C22.5854 5.55469 21.7969 6.34319 21.7969 7.3125V13.7578H9.375V10.8281C9.375 9.85881 8.5865 9.07031 7.61719 9.07031H4.6875V4.38281ZM1.17188 12.5859H8.20312V19.6172H1.17188V12.5859ZM1.75781 10.2422H7.61719C7.94037 10.2422 8.20312 10.5049 8.20312 10.8281V11.4141H1.17188V10.8281C1.17188 10.5049 1.43463 10.2422 1.75781 10.2422ZM7.61719 21.9609H1.75781C1.43463 21.9609 1.17188 21.6982 1.17188 21.375V20.7891H8.20312V21.375C8.20312 21.6982 7.94037 21.9609 7.61719 21.9609ZM19.0011 21.9609H12.1701C12.2562 21.7167 12.3967 21.4929 12.5855 21.304C12.9176 20.9719 13.3589 20.7891 13.8281 20.7891H17.3438C18.1075 20.7891 18.7594 21.2789 19.0011 21.9609ZM16.7578 19.6172H14.4141V17.2734H16.7578V19.6172ZM9.375 16.1016V14.9297H21.7969V16.1016H9.375ZM28.8281 21.375C28.8281 21.6982 28.5654 21.9609 28.2422 21.9609H23.5547C23.2315 21.9609 22.9688 21.6982 22.9688 21.375V7.3125C22.9688 6.98932 23.2315 6.72656 23.5547 6.72656H28.2422C28.5654 6.72656 28.8281 6.98932 28.8281 7.3125V21.375Z"
              fill="black"
            />
          </svg>
          {isWideScreen === true ? (
            <h3 onClick={() => toggle()}>Katalog</h3>
          ) : (
            ""
          )}
          <button>
            <IoIosStar className="star" />
          </button>
        </div>
        <div className="form-search">
          <input type="text" />
          <IoIosSearch className="search" />
          <select>
            <option value="uzb">Uzb</option>
            <option value="ru">Ru</option>
            <option value="eng">Eng</option>
          </select>
        </div>
        <div className="user">
          <AiOutlineUser />
          {isWideScreen === true ? (
            <button onClick={() => navigate("/account")}>Kirish</button>
          ) : (
            ""
          )}
        </div>
        <div className="user">
          <BsCart3 />

          {isWideScreen === true ? (
            <button onClick={() => navigate("/cart")}>Savat</button>
          ) : (
            ""
          )}
        </div>
      </div>
      {catalogToggle === true ? <Catalog /> : ""}
    </nav>
  );
};

export default Navbar;
