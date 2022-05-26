import ItemCount from "../itemCount/itemCount";
import InputCount from "../InputCount/InputCount";

import "./ItemDetail.css";

import { Carousel } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";



function ItemDetail({ product, onAdd, stockDis}) {
  
  const [inputType, setInputType] = useState("ItemCount");
  
  
  const {añadirAlCarrito,cartList} = useContext(CartContext)



  function handleInputType() {
    setInputType("InputCount");
  }

  function onAdd (qty) {
    alert(`${qty} items agregados al carrito`);
    añadirAlCarrito({...product,quantity:qty})
    handleInputType()
   
  }

  // console.log(cartList)

  return (
    <div className="cardDetail">
      <div className="carrousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={product.img}
                alt="First slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={product.img}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={product.img}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid">
        <div className="wrapper row">
          <div className="details col-md-12">
            <h3 className="product-title">{product.nombre}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <p className="product-description">{product.descripcion}</p>
            <h4 className="price">
              Precio: <span>{product.precio}</span>
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
