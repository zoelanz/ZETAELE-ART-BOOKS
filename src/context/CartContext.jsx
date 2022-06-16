import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";

import {
  getFirestore,
  collection,
  addDoc,
  documentId,
  writeBatch,
  getDocs,
  where,
  query,
} from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((product) => product.id === item.id);

    //THE PRODUCT WILL NOT BE SHOWN TWICE IN THE CART

    if (index !== -1) {
      let previousQuantity = cartList[index].quantity;
      cartList[index].quantity = previousQuantity + item.quantity;
      let cart = [...cartList];
      setcartList(cart);
      setLocalStorageCart(cart);
    } else {
      let cart = [...cartList, item];
      setcartList(cart);
      setLocalStorageCart(cart);
    }
  }

  //FUNCTION TO DELETE ONE PRODUCT IN PARTICULAR
  function deleteProduct(id) {
    let cart = cartList.filter((prod) => prod.id !== id);
    setcartList(cart);
    setLocalStorageCart(cart);
  }

  //FUNCTION TO EMPTY CART
  function emptyCart() {
    setcartList([]);
    localStorage.clear();
  }

  //TOTAL QUANTITY , THIS WILL BE SHOWN IN THE RESUME PURCHASE
  function totalQuantity() {
    return cartList.reduce(
      (counter, product) => (counter += product.quantity),
      0
    );
  }

  //TOTAL PRICE , THIS WILL BE SHOWN IN THE RESUME PURCHASE
  function totalPrice() {
    return cartList.reduce(
      (counter, product) => counter + product.quantity * product.price,
      0
    );
  }

  function toastify(text, time) {
    toast(text, {
      position: "top-center",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastify",
    });
  }

  async function updateStock() {
    const db = getFirestore();
    const queryCollectionStock = collection(db, "products");
    const queryUpdateStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((product) => product.id)
      )
    );
    const batch = writeBatch(db);
    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((resp) =>
          batch.update(resp.ref, {
            stock:
              resp.data().stock -
              cartList.find((product) => product.id === resp.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));
    batch.commit();
  }

  function purchaseOrder(e) {
    const inputName = document.getElementById("formName").value;
    const inputSurname = document.getElementById("formSurname").value;
    const inputPhone = document.getElementById("formPhone").value;
    const inputAddress = document.getElementById("formAddress").value;
    const inputEmail = document.getElementById("formEmail").value;
    const inputEmailRepeat = document.getElementById("formEmailRepeat").value;

    if (inputEmail === inputEmailRepeat) {
      if (
        inputName != "" &&
        inputSurname != "" &&
        inputEmail != "" &&
        inputEmailRepeat != "" &&
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

        order.date = new Date();

        order.products = cartList.map((cartProduct) => {
          const id = cartProduct.id;
          const name = cartProduct.name;
          const quantity = cartProduct.quantity;
          const price = cartProduct.price * cartProduct.quantity;
          return { id, name, quantity, price };
        });

        order.total = totalPrice();

        updateStock();

        const db = getFirestore();
        const queryCollectionOrders = collection(db, "Purchase order");
        addDoc(queryCollectionOrders, order)
          .then(toastify("Su orden esta siendo procesada!", 2500))
          .then(
            (resp) =>
              toastify(
                `GRACIAS POR SU COMPRA! Su códido de orden es: ${resp.id}`,
                5500
              ),
            localStorage.clear()
          )
          .catch((err) => console.log(err))
          .finally(() => {
            setTimeout(() => {
              window.location.href = "/tienda";
            }, 8000);
          });
      }
    } else {
      toastify("REVISE SUS DATOS", 2500);
    }
  }

  function setLocalStorageCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function getLocalStorageCart() {
    let localStorageCart = JSON.parse(localStorage.getItem("cart"));
    localStorageCart ? setcartList(localStorageCart) : setLocalStorageCart([]);
  }

  useEffect(() => {
    getLocalStorageCart();
  }, []);

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
          toastify,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;
