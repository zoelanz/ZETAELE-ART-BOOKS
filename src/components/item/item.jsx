
import "./item.css"

import { Card } from "react-bootstrap"

import ItemCount from "../itemCount/itemCount"





function Item({nombre,img}) {

    function cart(count){
        alert(`${count} items agregados al carrito`)
    }
    
return (

<Card className="containerCard" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={img}/>
<Card.Body>
    <Card.Title className="tituloCard">{nombre}</Card.Title>
    <ItemCount stock={10} initial={1} onAdd={cart}/> 

</Card.Body>

</Card>


)
}

export default Item