import React, { useState } from "react";
import addcart from "../assets/svg/addcart.svg";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

function Card({ data, setData }) {
  

  function likeItem(id) {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, liked: !item.liked };
      }
      return item;
    });
    setData(updatedData);
  }

  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src="" alt="Card Image" />
            <button onClick={() => likeItem(item.id)}>
              {item.liked === true ? (
                <TbStarFilled style={{ color: "rgb(253, 152, 3)" }} />
              ) : (
                <CiStar />
              )}
            </button>
          </div>
          <b>{item.title}</b>
          <p>{item.subtitle}</p>
          <div className="card-price">
            <b>${item.price.toFixed(2)}</b>
            <button>
              <img src={addcart} alt="Add to Cart" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
