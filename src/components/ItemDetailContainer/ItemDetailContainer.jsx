import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {Link} from "react-router-dom"

let libros = [
  {
    id: "1",
    nombre: "Sneaker Freaker. The Ultimate Sneaker Book",
    descripcion: "aaa",
    precio:"US$100",
    stock: 10,
    img: "https://www.taschen.com/media/images/1640/complete_history_of_sneakers_va_gb_3d_04688_1809271432_id_1194841.png",
  },
  {
    id: "2",
    nombre: "Peter Lindbergh. On Fashion Photography. 40th Ed.",
    descripcion: "Siga los pasos de Peter Lindbergh a lo largo de cuatro decenios a la vanguardia de la fotografía de moda. A través de sus innumerables colaboraciones con los nombres más venerados del mundo de la moda, el fotógrafo alemán creó nuevas narrativas con un enfoque humanista que dieron como resultado tomas icónicas a un tiempo introspectivas y atractivas. Este libro incluye más de 300 imágenes, muchas de ellas inéditas, así como una introducción en la que Lindbergh nos da su opinión sobre la “llamada fotografía de moda”.",
    precio:"US$100",
    stock: 8,
    img: "https://www.taschen.com/media/images/1640/lindbergh_fashion_40_int_3d_41103_2107201428_id_1303936.png",
  },
  {
    id: "3",
    nombre: "Helmut Newton. Polaroids",
    descripcion: "aaaaaa",
    stock: 9,
    img: "https://www.taschen.com/media/images/1640/newton_polaroids_fo_int_3d_05754_1507011051_id_908094.png",
  },
  {
    id: "4",
    nombre: "Kate Moss by Mario Testino",
    descripcion: "aaaaaa",
    stock: 6,
    img: "https://www.taschen.com/media/images/1640/25_testino_kate_moss_fo_int_3d_45722_1503121815_id_909382.png",
  },
];


function ItemDetailContainer() {

const [productoDelArray, setProductoDelArray] = useState({});

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(libros);
  }, 2000);
});

useEffect(() => {
  promesa
    .then((respuesta) => {
      setProductoDelArray(respuesta.find((item)=> item.id === "2"));
    })
}, []);

  return (
    <div>
       <Link className="buttonVolver" to="/tienda" >
      <MdOutlineKeyboardArrowLeft/>
        <span>VOLVER</span>
      </Link>
      <ItemDetail nombre={productoDelArray.nombre} id={productoDelArray.id} precio={productoDelArray.precio} descripcion={productoDelArray.descripcion} img={productoDelArray.img} stockDis={productoDelArray.stock} />
    </div>
  );
}

export default ItemDetailContainer;
