import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <button>О компании</button>
        <button>Доставка и оплата</button>
        <button>Лента материалов</button>
        <button>Политика возврата</button>
      </div>
      <div className="middleFooter">
        <p>Введите номер</p>
        <input type="text" placeholder="+998 (_ _) _ _ _  _ _  _ _" />
        <span>Выберите удобный мессенджер для общения</span>
        <div>
          <FaWhatsapp /> <FaTelegram />
        </div>
      </div>
      <div className="rightFooter">
        <a href="tel:+996 705 188 955">Тел:+996 705 188 955</a>
        <a href="tel:+996 705 188 955">Тел:+996 705 188 955</a>
        <p>Адрес:Ташкент</p>
      </div>
    </footer>
  );
};

export default Footer;
