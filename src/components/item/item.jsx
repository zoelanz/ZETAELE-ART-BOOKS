import "./item.css";

import { Card } from "react-bootstrap";

import ItemCount from "../itemCount/itemCount";

import {Link} from "react-router-dom"
 

function Item({ nombre, img, stockDis }) {
  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }
  
  return (
    <Link to={`/detalle/${id}`}>
    <Card className="card" style={{ width: "16rem" }}>
      <Card.Img className="imagenCard" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="tituloCard">{nombre}</Card.Title>
        <button>DETALLES</button>
        <ItemCount stock={stockDis} initial={1} onAdd={cart} />
      </Card.Body>
    </Card>
    </Link>
  );
  }

export default Item;
