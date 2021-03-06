import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { detailId } = useParams();

  const productNotFound = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "products", detailId);

    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && productNotFound("Product Not Found", { replace: true });
        setProduct({ ...resp.data(), id: resp.id });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productNotFound]);

  return (
    <div>
      {loading ? (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
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
