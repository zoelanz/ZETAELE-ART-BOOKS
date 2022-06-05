
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./item.css";


function Item({ nombre, img, itemId, precio}) {



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
