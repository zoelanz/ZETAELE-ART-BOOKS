import "./item.css";

import { Card } from "react-bootstrap";

import ItemCount from "../itemCount/itemCount";

function Item({ nombre, img, stockDis }) {
  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }

  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Card.Img className="imagenCard" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="tituloCard">{nombre}</Card.Title>
        <ItemCount stock={stockDis} initial={1} onAdd={cart} />
      </Card.Body>
    </Card>
  );
}

export default Item;
