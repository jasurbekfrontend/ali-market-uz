import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const Filter = () => {
  const [value, setValue] = useState([100000, 1000000]);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return (
    <form className="filter-form">
      <b>Ishlab chiqaruvchi</b>
      <div className="checkbox-filter">
        <div >
          <input type="checkbox" />
          <p>Kajsa</p>
        </div>
        <div >
          <input type="checkbox" />
          <p>Samsung</p>
        </div>
        <div >
          <input type="checkbox" />
          <p>Yesido</p>
        </div>
      </div>
      <b>Rang</b>
      <div className="checkbox-filter">
        <div >
          <input style={{ accentColor: "brown" }} type="checkbox" />
          <p>Jigarrang</p>
        </div>
        <div >
          <input style={{ accentColor: "red" }} type="checkbox" />
          <p>Qizil</p>
        </div>
        <div >
          <input style={{ accentColor: "green" }} type="checkbox" />
          <p>yashil</p>
        </div>
        <div >
          <input style={{ accentColor: "purple" }} type="checkbox" />
          <p>binafsharang</p>
        </div>
        <div >
          <input style={{ accentColor: "black" }} type="checkbox" />
          <p>qora</p>
        </div>
        <div >
          <input style={{ accentColor: "white" }} type="checkbox" />
          <p>oq</p>
        </div>
      </div>
      <b>Narx</b>
      <div className="filter">
        <div className="filter-price">
          <p>
            dan <p>gacha</p>
          </p>
          <div className="price-container">
            <div className="price-card">
              {value.slice(0, 1).map((item) => (
                <b>{item} so'm</b>
              ))}
            </div>
            <div className="price-card">
              {value.slice(1, 2).map((item) => (
                <b>{item} so'm</b>
              ))}
            </div>
          </div>
        </div>
        <Box sx={{ width: 209 }}>
          <Slider
            sx={{ color: "#FD9803" }}
            getAriadiv={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            min={10000000}
            max={2000000000}
          />
        </Box>
        {/* <p>
          Price:{" "}
          {value.slice(0, 1).map((item) => (
            <b>{item}$ - </b>
          ))}{" "}
          {value.slice(1, 2).map((item) => (
            <b>{item}$</b>
          ))}
        </p> */}
      </div>
      <button type="button">Filter</button>
    </form>
  );
};

export default Filter;
