import React from "react";

const Catalog = () => {
  const elektronika = [
    { title: "Elektronika" },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
    {
      subtitle: "Smartfonlar va telefonlar",
      variants: [
        "Telefonlar uchun aksessuarlar",
        "Smartfonlar",
        "Eski telefonlar",
        "Uy telefonlar",
      ],
    },
  ];

  return (
    <div className="catalog">
      <div className="categories">
        <button>Elektornika</button>
        <button>Maishiy texnika</button>
        <button>Kiyim</button>
        <button>Aksessuarlar</button>
        <button>Chiroy</button>
        <button>Salomatlik</button>
        <button>Oyoq kiyim</button>
        <button>Yosh bollar uchun</button>
        <button>Sport</button>
        <button>Kitoblar</button>
      </div>
      <div className="variants">
        <div className="title">
          {elektronika.map((item) => (
            <>{item.title && <b>{item.title}</b>}</>
          ))}
        </div>
        <div className="options">
          {elektronika.map((item, index) => (
            <>
              {item.variants && (
                <div className="categoryCard">
                  <p>{item.subtitle}</p>
                  {item.variants.map((variant, idx) => (
                    <button key={idx}>{variant}</button>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
