import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsBag } from "react-icons/bs";

import "./CartWidget.css";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <li className="cart">
      <BsBag size={23} />
      {totalQuantity() !== 0 && totalQuantity()}
    </li>
  );
}

export default CartWidget;
