import Item from "../item/item";
import "./itemList.css";
import { useEffect, useState } from "react";


let libros = [
    { id: 1, nombre: "Sneaker Freaker. The Ultimate Sneaker Book", descripcion: "aaa", stock: 10, img:
    'https://www.taschen.com/media/images/1640/complete_history_of_sneakers_va_gb_3d_04688_1809271432_id_1194841.png' },
    { id: 2, nombre: "Peter Lindbergh. On Fashion Photography. 40th Ed.", descripcion: "aaaaaa", stock: 8, img:
    'https://www.taschen.com/media/images/1640/lindbergh_fashion_40_int_3d_41103_2107201428_id_1303936.png' },
    { id: 3, nombre: "Helmut Newton. Polaroids", descripcion: "aaaaaa", stock: 8, img:
    'https://www.taschen.com/media/images/1640/newton_polaroids_fo_int_3d_05754_1507011051_id_908094.png' },
    { id: 4, nombre: "Kate Moss by Mario Testino", descripcion: "aaaaaa", stock: 8, img:
    'https://www.taschen.com/media/images/1640/25_testino_kate_moss_fo_int_3d_45722_1503121815_id_909382.png' },
    
]


function ItemList() {


  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const promesa = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  useEffect(() => {
    promesa
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="contenedorTodasLasCards">

      {loading ? (
        <h2 className="line-wobble"></h2>
      ) : (
        libros.map((item)=>{

            return (
                <div key={item.id}>
                  <Item
                    nombre={item.nombre}
                    img={item.img}
                  />
                </div>
            )
        })
      )}
    </div>
  );
}

export default ItemList;
