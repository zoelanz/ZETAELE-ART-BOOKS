import { BsBag } from "react-icons/bs";
import "./CartWidget.css";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";




function CartWidget(){

  const {totalQuantity} =
  useContext(CartContext);

    return(

    <li className="cart">
        <BsBag size={23} />
        {totalQuantity() !== 0 && totalQuantity() }
    </li>  

    )
}

export default CartWidget