
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./item.css";


function Item({name, img, itemId, price}) {



  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Card.Img className="imagenCard" variant="top" src={img} />
      <Card.Body className="bodyCard">
        <Card.Title className="tituloCard">{name}</Card.Title>
        <Card.Text className="textoPrice" >US$ {price}</Card.Text>
        <Link className="buttonDetail" to={`/detalle/${itemId}`}>
          DETALLES
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
