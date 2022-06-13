import Item from "../item/item";
import "./itemList.css";


function ItemList({productsFetch}) {
  return (

    <div className="containerAllCards">
      
     {productsFetch.map((item)=>
      (
        <div className="containerCard" key={item.id}>
          <Item name={item.name} img={item.img} stock={item.stock} itemId={item.id} price={item.price}/>
        </div>
      
      ))}
      
    </div>
    
  );
}
export default ItemList;
