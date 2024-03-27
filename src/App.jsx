import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import PersonalCabinet from "./components/PersonalCabinet";
import ProductBoxMin from "./components/ProductBoxMin";
import Catalog from "./components/Catalog";
import Navbar from "./components/Navbar";
import SiteBar from "./components/SiteBar";
import { Route, Routes } from "react-router-dom";
import ProductBoxMax from "./components/ProductBoxMax";
import Electroniks from "./components/Electroniks";

function App() {
  return (
    <>
      <div
        className="main"
        style={{ display: "flex", background: "rgb(242, 242, 242)" }}
      >
        <SiteBar />
        <div
          className="mainHome"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Catalog />} />
            <Route path="/account" element={<PersonalCabinet />} />
            <Route path="/electronics" element={<Electroniks />} />
            <Route path="/product" element={<ProductBoxMax />} />
          </Routes>
          <Footer />
        </div>
        <Basket />
      </div>
      {/* <Catalog /> */}
      {/* <ProductBoxMin /> */}
    </>
  );
}

export default App;