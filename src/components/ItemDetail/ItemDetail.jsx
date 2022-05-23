import ItemCount from "../itemCount/itemCount";
import "./ItemDetail.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import InputCount from "../InputCount/InputCount";



function ItemDetail({ nombre, img, descripcion, precio, stockDis, onAdd }) {
  const [inputType, setInputType] = useState("ItemCount");

  function handleInputType() {
    setInputType("InputCount");
  }

  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }

  return (
    <div className="cardDetail">
      <div className="carrousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={img}
                alt="First slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={img}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="containerImgCarrousel">
              <img
                className="d-block w-100 imgCarrousel"
                src={img}
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
            <h3 className="product-title">{nombre}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <p className="product-description">{descripcion}</p>
            <h4 className="price">
              Precio: <span>{precio}</span>
            </h4>
            {inputType === "ItemCount" ? (
              <ItemCount
                stock={stockDis}
                initial={1}
                onAdd={cart}
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
