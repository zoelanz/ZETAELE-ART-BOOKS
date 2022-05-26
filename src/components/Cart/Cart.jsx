import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import {RiDeleteBackLine} from "react-icons/ri";

function Cart() {
  const { cartList, vaciarCarrito, eliminarUnProducto, precioTotal } =
    useContext(CartContext);

  return (
    <div className="contenedorCart">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">PRODUCTO</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">PRECIO</th>
            <th scope="col">CANTIDAD</th>
            <th scope="col">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
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
                  className="btnEliminar h-25 "
                  onClick={() => eliminarUnProducto(producto.id)}
                >
                  <RiDeleteBackLine size={35}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footerCart">
        <h4>PRECIO TOTAL: {precioTotal() !== 0 && precioTotal()}</h4>
        <button className="botonesOpciones" onClick={vaciarCarrito}>
          VACIAR CARRITO
        </button>
      </div>
    </div>
  );
}

export default Cart;
