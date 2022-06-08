import { createContext, useState } from "react";

import { toast } from 'react-toastify';

import { getFirestore, collection, addDoc } from "firebase/firestore";

import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  //creo los estados y funciones globales

  const [cartList, setcartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((product) => product.id === item.id);

    // CON ESTE IF LOGRO QUE NO SE DUPLIQUE EL PRODUCTO Y QUE SUME EN CANTIDAD SI AGREGO PRODCUTOS

    if (index !== -1) {
      const previousQuantity = cartList[index].quantity;
      cartList[index].quantity = previousQuantity + item.quantity;
      setcartList([...cartList]);
    } else {
      setcartList([...cartList, item]);
    }
  }

  function deleteProduct(id) {
    setcartList(cartList.filter((prod) => prod.id !== id));
  }

  function emptyCart() {
    setcartList([]);
  }

  function totalQuantity() {
    return cartList.reduce(
      (counter, product) => (counter += product.quantity),
      0
    );
  }

  function totalPrice() {
    return cartList.reduce(
      (counter, product) => counter + product.quantity * product.price,
      0
    );
  }

  function toastify(){

    toast('Su orden esta siendo procesada!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toastify'
      });



  }

  function purchaseOrder(e) {
    //obtener datos del input y guardarlos en variables

    const inputName = document.getElementById("formName").value;

    const inputSurname = document.getElementById("formSurname").value;

    const inputPhone = document.getElementById("formPhone").value;

    const inputAddress = document.getElementById("formAddress").value;

    const inputEmail = document.getElementById("formEmail").value;

    if (
      inputName != "" &&
      inputSurname != "" &&
      inputEmail != "" &&
      inputPhone != "" &&
      inputAddress != ""
    ) {
      e.preventDefault();
      let order = {};

      order.buyer = {
        name: inputName,
        surname: inputSurname,
        phone: inputPhone,
        address: inputAddress,
        email: inputEmail,
      };

      order.products = cartList.map((cartProduct) => {
        const id = cartProduct.id;
        const name = cartProduct.name;
        const quantity = cartProduct.quantity;
        const price = cartProduct.price * cartProduct.quantity;

        return { id, name, quantity, price };
      });

      order.total = totalPrice();

      const db = getFirestore();
      const queryCollectionOrders = collection(db, "Purchase order");
      addDoc(queryCollectionOrders, order).then((resp) => console.log(resp))
      .then(toastify())
      .finally(setTimeout(() => {
        window.location.href = "/tienda" 
      }, 3500)
       )
    }

  }

  return (
    <div>
      <CartContext.Provider
        value={{
          cartList,
          addToCart,
          emptyCart,
          deleteProduct,
          totalQuantity,
          totalPrice,
          purchaseOrder,
          toastify
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;
