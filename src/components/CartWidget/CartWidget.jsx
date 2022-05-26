import { BsBag } from "react-icons/bs";
import "./CartWidget.css";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";




function CartWidget(){

  const {cantidadTotal } =
  useContext(CartContext);

    return(

    <li className="cart">
        <BsBag size={23} />
        {cantidadTotal() !== 0 && cantidadTotal() }
    </li>  

    )
}

export default CartWidget