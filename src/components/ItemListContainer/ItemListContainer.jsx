
import "./ItemListContainer.css";

import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import {getFirestore, collection, getDocs,query,where,addDoc} from "firebase/firestore"



function ItemListContainer() {
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const { category } = useParams();


    useEffect(() => {

      const db= getFirestore() 
 
      const queryCollection = collection (db, "products")

    if(!category){
     getDocs(queryCollection)
     .then(resp=>setProduct(resp.docs.map(prod=> ({...prod.data(),id: prod.id}) ) ) )
     .catch((error)=>(error))
     .finally(()=>setLoading(false))

    }else{

     const queryCollectionFilter = query(queryCollection, where("category", '==', category));
     getDocs(queryCollectionFilter)
       .then((resp) =>
         setProduct(resp.docs.map((prod) => ({...prod.data(),id: prod.id})))
       )
       .catch((err) => console.error(err))
       .finally(() => setLoading(false));
}}, [category]);



  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {category && (
            <Link className="buttonVolver" to="/tienda">
              <MdOutlineKeyboardArrowLeft />
              <span>VOLVER</span>
            </Link>
          )}
          <ItemList productsFetch={product} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer
