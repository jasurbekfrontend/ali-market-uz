import React, { useState } from "react";

const ProductBoxMax = () => {
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
  const data = [
    {
      id: 1,
      title: "IPHONE 15 PRO MAX",
      seller: "Apple",
      colors: ["red", "green", "blue"],
      price: 15000000,
      discount: 20000000,
      memory: ["8/256", "8/128", "8/512"],
      count: 583,
      info: [
        "1 yil rasmiy kafolat",
        "IMEI kodlari rasmiy ro'yhatdan o'tqazilgan",
        "Displey 6.6-dyuymli ekran, IPS LCD, yangilanish chastotasi 90 Gts",
        "Android 13 (Go Edition) operatsion tizimi bilan ishlaydi, Unisoc T606 protsessori bilan jixozlangan",
        "Asosiy kamerasi 13 MP, oldi kamerasi 8 MP",
        "Quvvatlash qurilmasi 10W",
        "SIM-karta uyasi 2",
        "Akkumulyator 5000 mAh",
      ],
      rating: 4.9,
      comments: [
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
        {
          id: Date.now(),
          name: "John Doe",
          date: "3-fevral, 2024",
          comment:
            "Отличный смартфон, все приложения летают, пользоваться одно удовольствие",
        },
      ],
    },
  ];
  return (
    <div className="product-box-max">
      {data.map((item) => (
        <>
          <div className="head-box" key={item.id}>
            <div className="left-head">
              <img src="" alt="rasm yo'q" />
            </div>
            <div className="middle-head">
              <img src="" alt="rasm yo'q" />
              <img src="" alt="rasm yo'q" />
              <img src="" alt="rasm yo'q" />
            </div>
            <div className="right-head">
              <h6>{item.rating} (50 ta baxo) 500 marta harid qilingan</h6>
              <b>{item.title}</b>
              <p className="right-head-text">
                Sotuvchi:<p>{item.seller}</p>
              </p>
              <p className="right-head-text">
                Yetkazib berish: <p>Tekin 1 kunda</p>
              </p>
              <div className="line"></div>
              <form className="product-form">
                {item.colors ? <p>Rangni tanlang:</p> : ""}

                <label>
                  {item.colors?.map((color) => (
                    <>
                      <p style={{ color: `${color}` }}>{color}</p>
                      <input
                        style={{ accentColor: `${color}` }}
                        type="radio"
                        name="color"
                        id=""
                      />
                    </>
                  ))}
                </label>
                {item.memory ? <p>Xotira: </p> : ""}
                <label>
                  {item.memory?.map((memory) => (
                    <>
                      <p>{memory}</p>
                      <input type="radio" name="memory" id="" />
                    </>
                  ))}
                </label>
                <p>Soni:</p>
              </form>
              <div className="countBox">
                <div>
                  <button onClick={minus}>-</button>
                  <p>{count}</p>
                  <button onClick={plus}>+</button>
                </div>
                <p>(Qoldi 583)</p>
              </div>
            </div>
          </div>
          <div className="price-box">
            <p>Narxi: </p>
            <span>
              {item.price} So'm <del>{item.discount} So'm</del>
            </span>
          </div>
          <div className="actions">
            <button className="addCart">Savatga solish</button>
            <button className="addCart">Sotib olish</button>
          </div>
          <div className="infoProduct">
            <p>Qisqacha malumot</p>
            <ul>
              {item.info.map((info) => (
                <li>{info}</li>
              ))}
            </ul>
          </div>
          <div className="comments">
            {item.comments.map((comment) => (
              <div className="comment-card">
                <div className="comment-title">
                  <div className="profile-img">{comment.name.slice(0, 1)}</div>
                  <div className="name">
                    <b>{comment.name}</b>
                    <p>{comment.date}</p>
                  </div>
                </div>
                <div className="comment-text">
                  <span>{comment.comment}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductBoxMax;
