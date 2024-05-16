import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card";
import aksiya from "../assets/aksiya.png";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
    {
      id: 2,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
    {
      id: 3,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
    {
      id: 1,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
    {
      id: 2,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
    {
      id: 3,
      title: "Title",
      subtitle: "subtitle",
      price: 500000,
      liked: false,
    },
  ]);

  return (
    <div className="home-wrapper">
    <Carousel
  style={{
    width: '100%', // Carouselning o'lchami to'liq ota eniga moslash
    maxWidth: '949px', // Maksimal Carousel o'lchami
    margin: '0 auto', // Carouselni o'rta bo'ylab chiqish
  }}
  infiniteLoop={true}
  showThumbs={false}
  showIndicators={false}
  showStatus={false}
>
  <img src={aksiya} alt="" style={{ width: '100%' }} /> {/* Rasmning o'lchami Carousel o'lchamiga moslash */}
  <img src={aksiya} alt="" style={{ width: '100%' }} /> {/* Rasmning o'lchami Carousel o'lchamiga moslash */}
  <img src={aksiya} alt="" style={{ width: '100%' }} /> {/* Rasmning o'lchami Carousel o'lchamiga moslash */}
</Carousel>

      <div className="card-container">
        {<Card data={data} setData={setData} />}
      </div>
    </div>
  );
};

export default Home;
