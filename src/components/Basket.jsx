import React from "react";
import { CiLocationOn } from "react-icons/ci";
const Basket = () => {
  return (
    <div className="basket">
      <div className="basketPart">
        <p>Ваша корзина пуста.</p>
        <span>Добавьте же скорее что-нибудь!</span>
        <button>Бесплатная доставка от 50,000 сум</button>
      </div>
      <div className="map-container">
        <div className="locate">
          <CiLocationOn />
        </div>

        <iframe
          title="Map"
          width="290px"
          height="116px"
          loading="lazy"
          frameborder="0"
          scrolling="yes"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11856.23003868218!2d-74.0062985!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1648150906573!5m2!1sen!2suk"
        ></iframe>
        <p>Выберите адресс</p>
        <span>Из указанных</span>
      </div>
    </div>
  );
};

export default Basket;
