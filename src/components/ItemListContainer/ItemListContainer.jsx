import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../itemList/itemList";

import "./ItemListContainer.css";

function ItemListContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");

    const queryCollectionFilter = category
      ? query(queryCollection, where("category", "==", category))
      : queryCollection;
    getDocs(queryCollectionFilter)
      .then((resp) =>
        setProduct(resp.docs.map((prod) => ({ ...prod.data(), id: prod.id })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      {loading ? (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {category && (
            <Link className="buttonBack" to="/tienda">
              <MdOutlineKeyboardArrowLeft />
              <span>INICIO</span>
            </Link>
          )}
          <ItemList productsFetch={product} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
