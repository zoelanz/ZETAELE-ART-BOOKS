import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ImHeartBroken } from "react-icons/im";



import CartModal from "../CartModal/CartModal";

import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "./Cart.css";

function Cart() {
  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);



  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const { cartList, emptyCart, deleteProduct, totalPrice, totalQuantity } =
    useContext(CartContext);



  return cartList.length ? (
    <div className="containerCart">
      <div className="containerProductsCart">
        <div>
          <table className="table tableMediaQuery">
            <thead className="spacing tableTitle">
              <tr>
                <th scope="col">PRODUCTO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ELIMINAR</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {cartList.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <img className="imgCart" src={product.img} alt="" />
                  </th>
                  <td>{product.name}</td>
                  <td>{product.price * product.quantity}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      class="noselect deleteButton"
                      onClick={() => deleteProduct(product.id)}
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
          <button className="buttonEmptyCart spacing" onClick={emptyCart}>
            Vaciar carrito
          </button>
        </div>
      </div>

      {/* PURCHASE RESUME */}

      <div className="containerResume">
        <div className="containerResumePurchase">
          <table className="table purchaseDetail">
            <thead>
              <th className="titlePurchaseDetail spacing" scope="col">
                <p>DETALLE DE COMPRA</p>{" "}
              </th>
            </thead>
            <tbody className="textOrder">
              <td>
                <p className="spacing">
                  Cantidad de productos:
                  {totalQuantity() !== 0 && totalQuantity()}
                </p>
                <p className="spacing">
                  TOTAL: US${totalPrice() !== 0 && totalPrice()}
                </p>
              </td>
            </tbody>
          </table>
          <CartModal
            className="buttonEndPurchase spacing"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            fullscreen={fullscreen}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="containerEmptyCart1">
      <div className="containerEmptyCart animate__animated animate__zoomIn animate__slow">
        <h2 className="textEmptyCart ">SU CARRITO ESTA VACIO </h2>
        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/tienda"}
        >
          <button className="buttonEmptyCart">IR A LA TIENDA </button>
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
