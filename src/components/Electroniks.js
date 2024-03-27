import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ElektrPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [elektrProduct, setElektrProduct] = useState([
    {
      id: 1,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 2,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 3,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 4,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 5,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 6,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 7,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 8,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 9,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 10,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 11,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 12,
      tpye: "mashxurlar",
      title: "TEXT",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 13,
      tpye: "yangilar",
      title: "TEXT1",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 14,
      tpye: "yangilar",
      title: "TEXT2",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 15,
      tpye: "yangilar",
      title: "TEXT3",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 16,
      tpye: "yangilar",
      title: "TEXT4",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 17,
      tpye: "yangilar",
      title: "TEXT5",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 18,
      tpye: "yangilar",
      title: "TEXT6",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 19,
      tpye: "yangilar",
      title: "TEXT7",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 20,
      tpye: "yangilar",
      title: "TEXT8",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 21,
      tpye: "ynagilar",
      title: "TEXT9",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 22,
      tpye: "yangilar",
      title: "TEXT10",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 23,
      tpye: "yangilar",
      title: "TEXT11",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
    {
      id: 24,
      tpye: "yangilar",
      title: "TEXT12",
      subtitle: "text",
      price: 500000000,
      liked: false,
    },
  ]);
  const [selectedType, setSelectedType] = useState("mashxurlar");

  const elektrProductLength = elektrProduct.length;

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };
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
    <>
      <div
        className="product-box"
        style={
          open
            ? { position: "absolute", top: "142px", left: "375px",  }
            : { position: "absolute", top: "-730px", left: "375px",  }
        }
      >
        <div className="leftBox">
          <img src="" alt="rasm yo'q" />
          <button onClick={()=>navigate('/product')}>Mahsulot haqida bor malumot</button>
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
      <div className="elektr">
        <div className="elektr-length">
          <h2>Elektronka</h2>
          <span>{elektrProductLength} Mahsulot</span>
        </div>
        <div className="select-option">
          <div className="select-item">
            <h4>Oldin korsatilsin:</h4>
            <select onChange={handleSelectChange} value={selectedType}>
              <option value="mashxurlar">Mashxurlar</option>
              <option value="yangilar">Yangilar</option>
            </select>
          </div>
        </div>
        <div className="elektr-box">
          {elektrProduct
            .filter((item) => item.tpye === selectedType) // Tanlangan turdagi mahsulotlar filter qilinadi
            .map((item) => {
              return (
                <div
                  className="elektr-card"
                  onClick={()=>setOpen(!open)}
                  key={item.id}
                >
                  <div className="img"></div>
                  <h3>{item.title}</h3>
                  <span>{item.subtitle}</span>
                  <div className="elektr-price-basket">
                    <h4>{item.price} so'm</h4>
                    <button>
                      <img src="" alt="basket" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ElektrPage;
