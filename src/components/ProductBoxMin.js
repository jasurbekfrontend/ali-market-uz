import React, { useState } from "react";

const ProductBoxMin = () => {
  const [count, setCount] = useState(1);
  function plus() {
    setCount(count + 1);
  }
  function minus() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return count;
    }
  }
  return (
    <div className="product-box">
      <div className="leftBox">
        <img src="" alt="rasm yo'q" />
        <button>Mahsulot haqida bor malumot</button>
      </div>
      <div className="rightBox">
        <b>IpHONE 15 PRO MAX</b>
        <p>Rangni tanlang :</p>
        <div className="choose">
          <label for="">
            <p>yellow</p>
            <input name="1" type="radio"></input>
          </label>
          <label for="">
            <p>red</p>
            <input name="1" type="radio"></input>
          </label>
          <label for="">
            <p>blue</p>
            <input name="1" type="radio"></input>
          </label>
          <label for="">
            <p>black</p>
            <input name="1" type="radio"></input>
          </label>
        </div>
        <p>Xotira: </p>
        <div className="choose">
          <label for="">
            <p>8/256</p>
            <input name="2" type="radio"></input>
          </label>
          <label for="">
            <p>8/256</p>
            <input name="2" type="radio"></input>
          </label>
          <label for="">
            <p>8/256</p>
            <input name="2" type="radio"></input>
          </label>
        </div>
        <p>Soni</p>
        <div className="countBox">
          <div>
            <button onClick={minus}>-</button>
            <p>{count}</p>
            <button onClick={plus}>+</button>
          </div>
          <p>(Qoldi 583)</p>
        </div>
        <p>Narxi</p>
        <div className="price">
          <p>15.000.000 so'm</p>
          <del>20.000.000</del>
        </div>
        <button className="addCart">Savatga solish</button>
      </div>
    </div>
  );
};

export default ProductBoxMin;
