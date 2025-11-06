import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

// Páginas principais da aplicação
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {


  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        {/* Navbar fixada no topo, presente em todas as rotas */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Sistema de rotas da aplicação */}
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Página do carrinho de compras */}
          <Route path="/cart" element={<Cart />} />

          {/* Página de finalização do pedido */}
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
