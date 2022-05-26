import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar"; // importo el archivo del navbar
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from "./components/footer/footer";
import CartContextProvider from "./context/CartContext";

function App() {
  // llamo a la funcion donde cree el navbar: SE LO LLAMA ELEMENTO, llamo a las apis o fuentes externas

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />

          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/tienda" element={<ItemListContainer />} />
            <Route path="/tienda/:categoria" element={<ItemListContainer />} />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Cart />} />

            <Route path="/*" element={<Navigate to="/tienda" replace />} />
          </Routes>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
