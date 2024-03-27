import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import basket_icon from "../assets/basket_icon.png";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Home = () => {
  const [data, setData] = useState([
    { id: 1, title: "TEXT1", subtitle: "text", price: 500000000, liked: false },
    { id: 2, title: "TEXT2", subtitle: "text", price: 500000000, liked: false },
    { id: 3, title: "TEXT3", subtitle: "text", price: 500000000, liked: false },
    { id: 4, title: "TEXT4", subtitle: "text", price: 500000000, liked: false },
    { id: 5, title: "TEXT5", subtitle: "text", price: 500000000, liked: false },
    { id: 6, title: "TEXT6", subtitle: "text", price: 500000000, liked: false },
    { id: 7, title: "TEXT7", subtitle: "text", price: 500000000, liked: false },
    { id: 8, title: "TEXT8", subtitle: "text", price: 500000000, liked: false },
    { id: 9, title: "TEXT9", subtitle: "text", price: 500000000, liked: false },
  ]);
  const [slide, setSlide] = useState(1);
  const [offset, setOffset] = useState(0);
  const like = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let newOffset = offset + 949;
      if (newOffset > 1898) {
        newOffset = 0;
      }
      setOffset(newOffset);
    }, 1000000000);

    return () => clearInterval(interval);
  }, [offset]);

  function handleClick(direction) {
    let newOffset;
    if (direction === "right") {
      newOffset = offset + 949;
      if (newOffset > 1898) {
        newOffset = 0;
      }
    } else if (direction === "left") {
      newOffset = offset - 949;
      if (newOffset < 0) {
        newOffset = 1898;
      }
    }
    setOffset(newOffset);
  }
  function right() {
    if (slide < 3) {
      setSlide(slide + 1);
    } else if (slide === 3) {
      setSlide(1);
    } else {
      setSlide(slide);
    }
  }
  function left() {
    if (slide > 1) {
      setSlide(slide - 1);
    } else if (slide === 1) {
      setSlide(3);
    } else {
      setSlide(slide);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="first-page">
          <div className="reklama">
            <div className="reklama-box">
              <div className="top-box">
                <h1>Text</h1>
                <h1>Text</h1>
                <h1>Text</h1>
              </div>
              <div className="bottom-box">
                <h1>Text</h1>
                <h1>Text</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <button>Yangilar</button>
          <button>Mashhurlar</button>
        </div>
        <div className="main-carousel">
          <button onClick={() => left()}>
            <FaChevronLeft />
          </button>
          <div className="carousel-wrapper">
            <div
              className="carousel"
              style={
                slide === 1
                  ? { transform: "translateX(0px)" }
                  : slide === 2
                  ? { transform: "translateX(-1220px)" }
                  : slide === 3
                  ? { transform: "translateX(-2420px)" }
                  : {}
              }
            >
              <div className="slider">
                {data.slice(0, 3).map((item) => (
                  <div className="card" key={item.id}>
                    <div className="card-image">
                      <img src="" alt="" />
                      <button onClick={() => like(item.id)}>
                        {item.liked ? <FaStar className="liked" /> : <CiStar />}
                      </button>
                    </div>
                    <b>{item.title}</b>
                    <p>{item.subtitle}</p>
                    <div className="card-price">
                      <b>{item.price} so'm</b>
                      <button>
                        <img src={basket_icon} alt="rasm yo'q" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider">
                {data.slice(3, 6).map((item) => (
                  <div className="card" key={item.id}>
                    <div className="card-image">
                      <img src="" alt="" />
                      <button onClick={() => like(item.id)}>
                        {item.liked ? <FaStar className="liked" /> : <CiStar />}
                      </button>
                    </div>
                    <b>{item.title}</b>
                    <p>{item.subtitle}</p>
                    <div className="card-price">
                      <b>{item.price} so'm</b>
                      <button>
                        <img src={basket_icon} alt="rasm yo'q" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider">
                {data.slice(6, 9).map((item) => (
                  <div className="card" key={item.id}>
                    <div className="card-image">
                      <img src="" alt="" />
                      <button onClick={() => like(item.id)}>
                        {item.liked ? <FaStar className="liked" /> : <CiStar />}
                      </button>
                    </div>
                    <b>{item.title}</b>
                    <p>{item.subtitle}</p>
                    <div className="card-price">
                      <b>{item.price} so'm</b>
                      <button>
                        <img src={basket_icon} alt="rasm yo'q" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => right()}>
            <FaChevronRight />
          </button>
        </div>
        <div className="textBox">
          <b>Lorem, ipsum.</b>
          <span>
            Lorem Ipsum va veb-dizayn. Lorem Ipsum 16-asr boshidan beri
            sanoatning standart qo'g'irchoq matni bo'lib kelgan. O'sha paytda
            nomi noma'lum printer Lorem Ipsum yordamida turdagi namunalarni
            ishlab chiqarish uchun o'lcham va shakllarning katta to'plamini
            yaratdi. Lorem Ipsum nafaqat muvaffaqiyatli
          </span>
          <ul>
            <li>Lorem Ipsum va veb-dizayn:</li>
            <li>Lorem Ipsum va veb-dizayn</li>
            <li>Lorem Ipsum va veb-dizayn Lorem Ipsum va veb-dizayn</li>
            <li>Lorem Ipsum va veb-dizayn</li>
          </ul>
          <p>
            Lorem Ipsum va veb-dizayn Lorem Ipsum va veb-dizayn. Lorem Ipsum
            16-asr boshidan beri sanoatning standart qo'g'irchoq matni bo'lib
            kelgan. O'sha paytda nomi noma'lum printer Lorem Ipsum yordamida
            turdagi namunalarni ishlab chiqarish uchun o'lcham va shakllarning
            katta to'plamini yaratdi. Lorem Ipsum nafaqat muvaffaqiyatli
          </p>
          <button>
            Qo’shimcha <FaChevronDown />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
