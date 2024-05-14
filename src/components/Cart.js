import React, { useState } from "react";
import deleteimg from "../assets/delete_6wzwaxpnu2xg 1.png";

const Cart = () => {
  const data = [
    {
      id: 1,
      count: 1,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8ugKZJN-QzSe83SfHk1pZDLM5Wdwa_km0V7-Ry1cH0Y48HMyi71pf5BgqpaQRnSZroh5Fn2IIFY0YAw7pfI4t16H2AfirKhng7EmWuwcFWR3CLEWzswsaIPJyP9MLPtBtlqBN5nSMj_0&usqp=CAc",
      title: "IPHONE 15 PRO MAX",
      seller: "Apple",
      colors: ["red", "green", "blue"],
      price: 15000000,
      discount: 20000000,
      memory: ["8/256", "8/128", "8/512"],
      checked: false,
    },
    {
      id: 2,
      count: 1,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8ugKZJN-QzSe83SfHk1pZDLM5Wdwa_km0V7-Ry1cH0Y48HMyi71pf5BgqpaQRnSZroh5Fn2IIFY0YAw7pfI4t16H2AfirKhng7EmWuwcFWR3CLEWzswsaIPJyP9MLPtBtlqBN5nSMj_0&usqp=CAc",
      title: "IPHONE 15 PRO MAX",
      seller: "Apple",
      colors: ["red", "green", "blue"],
      price: 15000000,
      discount: 20000000,
      memory: ["8/256", "8/128", "8/512"],
      checked: false,
    },
    {
      id: 3,
      count: 1,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8ugKZJN-QzSe83SfHk1pZDLM5Wdwa_km0V7-Ry1cH0Y48HMyi71pf5BgqpaQRnSZroh5Fn2IIFY0YAw7pfI4t16H2AfirKhng7EmWuwcFWR3CLEWzswsaIPJyP9MLPtBtlqBN5nSMj_0&usqp=CAc",
      title: "IPHONE 15 PRO MAX",
      seller: "Apple",
      colors: ["red", "green", "blue"],
      price: 15000000,
      discount: 20000000,
      memory: ["8/256", "8/128", "8/512"],
      checked: false,
    },
  ];

  const [cartItems, setCartItems] = useState(data);
  const [selectAll, setSelectAll] = useState(false);

  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedItems = cartItems.map((item) => {
      return { ...item, checked: !selectAll };
    });
    setCartItems(updatedItems);
  };

  const handleCheckboxChange = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <>
      <div className="Cart">
        <h1>Savatingiz</h1>
        <div className="card-select">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <b>Hammasini tanlash</b>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="Card">
            <div className="card-map">
              <div className="Card-img">
                <input
                  type="checkbox"
                  name={item.id}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <img src={item.img} alt="" />
                <div className="card-info">
                  <h2>{item.title}</h2>
                  <p>Sotuvchi: {item.seller}</p>
                  <p>Ranglari: {item.colors.join(", ")}</p>
                  <p>Xotirasi: {item.memory.join(", ")}</p>
                </div>
              </div>
              <div className="Card-calculate">
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  <img src={deleteimg} alt="" />
                  O'chirish
                </button>
                <h1>{item.price} so'm</h1>
                <p>{item.discount} so'm</p>
                <div className="counter">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <p>{item.count}</p>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
