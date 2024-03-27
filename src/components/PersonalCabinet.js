import React from "react";

const PersonalCabinet = () => {
  return (
    <>
      <p className="cabinetText">Shaxsiy kabinet</p>
      <div className="cabinet">
        <div className="topCabinet">
          <p>ID 123123</p>
          <div className="topLabels">
            <label>
              <p>Familiya</p>
              <input type="text" value={"Name"} />
            </label>
            <label>
              <p>Ism</p>
              <input type="text" value={"SurName"} />
            </label>
            <label>
              <p>Otasini ismi</p>
              <input type="text" value={"Name"} />
            </label>
          </div>
        </div>

        <div className="middleCabinet">
          <label>
            <p>Elektron pochta</p>
            <input type="email" value={"example@name.com"} />
          </label>
          <label>
            <p>Telfon raqami</p>
            <input type="email" value={"+998 93 405 2818"} />
          </label>
        </div>
        <div className="middleCabinet">
          <label>
            <p>Tug'ilgan sana</p>
            <input type="date" value={"00/00/0000"} />
          </label>
        </div>
        <div className="bottomButtons">
          <button>Tizimdan chiqish</button>
          <button>Saqlash</button>
        </div>
      </div>
    </>
  );
};

export default PersonalCabinet;
