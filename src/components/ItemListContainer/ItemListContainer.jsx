import ItemList from "../itemList/itemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getFetch from "../../helpers/getFetch";



function ItemListContainer() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id}= useParams()



  useEffect(() => {
    if(id){
      getFetch()
      .then(respuesta => 
        setProductos(respuesta.filter((prods)=>prods.descripcion=== id)))
       .finally(() => setLoading(false));
  } else {
    getFetch()
    .then(respuesta=>setProductos(respuesta))
    .finally(()=>setLoading(false))
  }
}, [id]);


    

  return (
    <div>
      {loading ? (
        <h2 className="line-wobble"></h2>
      ) : (
        <ItemList productosFetch={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
