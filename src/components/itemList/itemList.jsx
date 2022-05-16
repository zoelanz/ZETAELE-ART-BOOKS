import Item from "../item/item";
import "./itemList.css";


function ItemList({productosFetch}) {
  return (
    <div className="contenedorTodasLasCards">
     {productosFetch.map((item)=>
      (
        <div className="containerCard" key={item.id}>
          <Item nombre={item.nombre} img={item.img} stockDis={item.stock}
          
          />
          
        </div>
      
      ))}
    </div>
  );
}
export default ItemList;
