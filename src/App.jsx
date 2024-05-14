import Home from "./pages/Home";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import PersonalCabinet from "./components/PersonalCabinet";
import Navbar from "./components/Navbar";
import SiteBar from "./components/SiteBar";
import { Route, Routes} from "react-router-dom";
import ProductBoxMax from "./components/ProductBoxMax";
import Electroniks from "./components/Electroniks";
import Cart from "./components/Cart";

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
            <Route path="/account" element={<PersonalCabinet />} />
            <Route path="/electronics" element={<Electroniks />} />
            <Route path="/product" element={<ProductBoxMax />} />
            <Route path="/cart" element={<Cart/>} />
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
