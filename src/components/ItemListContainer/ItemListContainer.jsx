
import "./ItemListContainer.css";

import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import {getFirestore, collection, getDocs,query,where,addDoc} from "firebase/firestore"



function ItemListContainer() {
  const [producto, setProducto] = useState({});

  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();


    useEffect(() => {

      const db= getFirestore() 
 
      const queryCollection = collection (db, "productos")

    if(!categoria){
     getDocs(queryCollection)
     .then(resp=>setProducto(resp.docs.map(prod=> ({...prod.data(),id: prod.id}) ) ) )
     .catch((error)=>(error))
     .finally(()=>setLoading(false))

    }else{

     const queryCollectionFilter = query(queryCollection, where("categoria", '==', categoria));
     getDocs(queryCollectionFilter)
       .then((resp) =>
         setProducto(resp.docs.map((prod) => ({...prod.data(),id: prod.id})))
       )
       .catch((err) => console.error(err))
       .finally(() => setLoading(false));
}}, [categoria]);



  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {categoria && (
            <Link className="buttonVolver" to="/tienda">
              <MdOutlineKeyboardArrowLeft />
              <span>VOLVER</span>
            </Link>
          )}
          <ItemList productosFetch={producto} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer
