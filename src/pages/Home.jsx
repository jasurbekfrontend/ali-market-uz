import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card";

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
      <Carousel infiniteLoop={true} width={749}>
        <div className="slider">
          <p>Legend 1</p>
        </div>
        <div className="slider">
          <p>Legend 2</p>
        </div>
        <div className="slider">
          <p>Legend 3</p>
        </div>
      </Carousel>
      <div className="card-container">
        {<Card data={data} setData={setData} />}
      </div>
    </div>
  );
};

export default Home;
