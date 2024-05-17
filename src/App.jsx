import Home from "./pages/Home";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import PersonalCabinet from "./components/PersonalCabinet";
import Navbar from "./components/Navbar";
import SiteBar from "./components/SiteBar";
import { Route, Routes } from "react-router-dom";
import ProductBoxMax from "./components/ProductBoxMax";
import Electroniks from "./components/Electroniks";
import Cart from "./components/Cart";
import Card from "./components/Card";
import Login from "./components/Login/Login";
import Loginsms from "./components/Login/Login-sms";
import Loginregister from "./components/Login/Login-register";
import Navigator from "./components/ Navigator";
import { useEffect, useState } from "react";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(isWideScreen);
  return (
    <div
      className="mainHome"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<PersonalCabinet />} />
        <Route path="/electronics" element={<Electroniks />} />
        <Route path="/product" element={<ProductBoxMax />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Loginsms />} />
        <Route path="/register" element={<Loginregister />} />
      </Routes>
      <Footer />
      {isWideScreen === false  ? (<Navigator />) : null}
    </div>
  );
}

export default App;
