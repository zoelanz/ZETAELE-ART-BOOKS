import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  //creo los estados y funciones globales

  const [cartList, setcartList] = useState([]);



  function añadirAlCarrito(item) {
    const indice = cartList.findIndex((producto) => producto.id === item.id);

    // CON ESTE IF LOGRO QUE NO SE DUPLIQUE EL PRODUCTO Y QUE SUME EN CANTIDAD SI AGREGO PRODCUTOS

    if (indice !== -1) { 
      const cantidadVieja = cartList[indice].quantity;
      cartList[indice].quantity +=cantidadVieja
      setcartList([...cartList])
   
    } else {
      setcartList([...cartList, item]);
    }
  }

  function eliminarUnProducto(id){
    setcartList(cartList.filter(prod=>prod.id !== id))
  }

 
  function vaciarCarrito() {
    setcartList([]);
  }

  function cantidadTotal(){

    return cartList.reduce((contador,producto)=>contador+=producto.quantity,0)

  }

  function precioTotal(){

    return cartList.reduce((contador,producto)=>contador + (producto.quantity*producto.precio),0)



  }


 

  return (
    <div>
      <CartContext.Provider value={{ cartList, añadirAlCarrito, vaciarCarrito, eliminarUnProducto,cantidadTotal,precioTotal }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;
