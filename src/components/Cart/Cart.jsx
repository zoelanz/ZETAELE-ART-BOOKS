import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ImHeartBroken } from "react-icons/im";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import CartModal from "../CartModal/CartModal";

import "animate.css";
import "./Cart.css";

// FUNCION PARA SUBIR TODOS LOS PRODUCTOS A FIREBASE

// function addDocsFb(){
//   libros.forEach((testItem) => {
//   const db = getFirestore();

//   const queryCollection = collection(db, "productos");

//   addDoc(queryCollection, testItem)
//   .then((resp)=> console.log(resp))
// });}


function Cart() {

  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const {
    cartList,
    vaciarCarrito,
    eliminarUnProducto,
    precioTotal,
    cantidadTotal,
  } = useContext(CartContext);

  // ORDEN DE COMPRA HARDCODEADA

  const generateOrder = () => {

    let order = {};
    order.buyer = {
      name: "Zoe",
      email: "zoemarialanz@gmail.com",
      phone: "2235911534",
    };
    
    order.total= precioTotal();
    order.productos = 
    cartList.map
    ((cartProduct) => {
      const id = cartProduct.id;
      const name = cartProduct.nombre;
      const price = cartProduct.precio * cartProduct.quantity;

      return { id, name, price };
    }); 

    const db = getFirestore();
    const queryCollection = collection(db, "Orden de compra");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito()); 
  }

  return cartList.length ? (
    <div className="contenedorCart">
      <div className="contenedorProductosCart">
        <div>
          <table className="table tableMediaQuery">
            <thead className="spacing titulosTabla">
              <tr>
                <th scope="col">PRODUCTO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ELIMINAR</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {cartList.map((producto) => (
                <tr key={producto.id}>
                  <th scope="row">
                    <img className="imgCart" src={producto.img} alt="" />
                  </th>
                
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.quantity}</td>
                 
                  <td>
                    <button
                      class="noselect botonEliminar"
                      onClick={() => eliminarUnProducto(producto.id)}
                    >
                      <span class="text">Eliminar</span>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            className="botonVaciarCarrito spacing"
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </button>
        </div>
      </div>

      {/* RESUMEN DE COMPRA */}

      <div className="contenedorResumenFormulario">
        <div className="contenedorResumenCompra">
          <table className="table detalleCompra">
            <thead>
              <th className="tituloDetalleCompra spacing" scope="col">
                <p>DETALLE DE COMPRA</p>{" "}
              </th>
            </thead>
            <tbody className="textOrder">
              <td>
                <p className="spacing">
                  Cantidad de productos:
                  {cantidadTotal() !== 0 && cantidadTotal()}
                </p>
                <p className="spacing">
                  TOTAL: US${precioTotal() !== 0 && precioTotal()}
                </p>
              </td>
            </tbody>
          </table>

          <button onClick={generateOrder}>Enviar orden de compra!</button>

          <CartModal
            className="botonFinalizarCompra spacing"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            fullscreen={fullscreen}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="contenedorCarritoVacio1">
      <div className="contenedorCarritoVacio animate__animated animate__zoomIn animate__slow">
        <h2 className="textoCarritoVacio ">SU CARRITO ESTA VACIO </h2>

        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/tienda"}
        >
          <button className="botonCartIrTienda">IR A LA TIENDA </button>
        </NavLink>
        <ImHeartBroken
          className="animate__animated animate__swing animate__slower animate__infinite 	"
          size={50}
        />
      </div>
      {/* <button onClick={()=>addDocsFb()}> traer datos </button> */}
    </div>
  );
}

export default Cart;
