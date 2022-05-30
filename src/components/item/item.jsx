import "./item.css";

import { Card } from "react-bootstrap";

// import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";

function Item({ nombre, img, itemId, precio}) {

  function cart(count) {
    alert(`${count} items agregados al carrito`);
  }

  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Card.Img className="imagenCard" variant="top" src={img} />
      <Card.Body className="bodyCard">
        <Card.Title className="tituloCard">{nombre}</Card.Title>
        <Card.Text className="textoPrice" >US$ {precio}</Card.Text>
        <Link className="buttonDetail" to={`/detalle/${itemId}`}>
          DETALLES
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
