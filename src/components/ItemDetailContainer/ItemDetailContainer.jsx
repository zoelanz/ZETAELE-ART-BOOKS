import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { detailId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const dbQuery = doc(db, "products", detailId);

    getDoc(dbQuery)
      .then((resp) => setProduct({ ...resp.data(), id: resp.id }))
      // .then((resp)=>console.log(resp.data()))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="containerDetail">
            <ItemDetail product={product} />
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
