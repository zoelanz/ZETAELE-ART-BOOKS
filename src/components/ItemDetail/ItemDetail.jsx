import ItemCount from "../itemCount/itemCount";
import InputCount from "../InputCount/InputCount";

import "./ItemDetail.css";

// import { Carousel } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


function ItemDetail({ product, onAdd}) {
  
  const [inputType, setInputType] = useState("ItemCount");


  const {addToCart,cartList} = useContext(CartContext)


  function handleInputType() {
    setInputType("InputCount");
  }

  function onAdd (qty) {
    // alert(`${qty} items agregados al carrito`);
    addToCart({...product,quantity:qty})
    handleInputType()
   
  }

  return (
    <div className="cardDetail">
      <div>

      <img
                className=" w-100"
                src={product.img}
                alt="First slide"
              />
       
      </div>
      <div className="container-fluid">
        <div className="wrapper row">
          <div className="details col-md-12">
            <h3 className="product-title">{product.name}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <p className="product-description">{product.description}</p>
            <h4 className="price">
              Precio: <span> US${product.price}</span>
            </h4>
            {inputType === "ItemCount" ? (
              <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={onAdd}
                handleInputType={handleInputType}
              />
            ) : (
              <InputCount />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
