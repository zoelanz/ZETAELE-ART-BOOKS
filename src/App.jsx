import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from "./components/footer/footer";
import CartContextProvider from "./context/CartContext";
import GoToTop from "./components/GoToTop/GoToTop";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/tienda" element={<ItemListContainer />} />
            <Route path="/tienda/:category" element={<ItemListContainer />} />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/tienda" replace />} />
          </Routes>
          <GoToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
