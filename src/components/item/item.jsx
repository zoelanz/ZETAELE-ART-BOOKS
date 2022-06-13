import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./item.css";

function Item({ name, img, itemId, price }) {
  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Link to={`/detalle/${itemId}`}>
        <Card.Img className="imgCard" variant="top" src={img} />
      </Link>
      <Card.Body className="bodyCard">
        <Card.Title className="titleCard">{name}</Card.Title>
        <Card.Text className="textPrice">US$ {price}</Card.Text>
        <Link className="buttonDetail" to={`/detalle/${itemId}`}>
          DETALLES
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
