import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar"; // importo el archivo del navbar
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  // llamo a la funcion donde cree el navbar: SE LO LLAMA ELEMENTO, llamo a las apis o fuentes externas

  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <div className="containerGeneralContador">
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>

            {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
          </div>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

