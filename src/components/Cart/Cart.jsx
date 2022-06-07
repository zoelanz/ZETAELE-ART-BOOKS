import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ImHeartBroken } from "react-icons/im";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import CartModal from "../CartModal/CartModal";

import "animate.css";
import "./Cart.css";

let libros = [
  {
    category: "moda",
    name: "Sneaker Freaker. The Ultimate Sneaker Book",
    description:
      "Desde hace casi dos décadas, Sneaker Freaker ha liderado la escena mundial de las zapatillas de deporte. Con más de 650 páginas rediseñadas, fotografías recientes, detalles históricos pormenorizados y una minuciosidad obsesiva propia de un otaku, esta monumental antología es una oda a las zapatillas deportivas. Reúne lo mejor de la revista junto a contenido creado exclusivamente para TASCHEN.",
    price: 60,
    stock: 10,
    img: "https://i.imgur.com/b5vc1Bq.jpg",
  },
  {
    category: "moda",
    name: "20th-Century Fashion. 100 Years of Apparel Ads",
    description:
      "Los 400 anuncios publicitarios de la colección Jim Heimann que conforman esta historia ilustrada de la moda no sólo analizan las tendencias y siluetas que marcaron el siglo XX, sino también la evolución del mercado y el público al que se dirigía. De exclusivo negocio limitado a los salones parisienses la moda pasó a convertirse en la gran industria global que conocemos hoy.",
    price: 20,
    stock: 6,
    img: "https://i.imgur.com/itmao8e.jpg",
  },
  {
    category: "moda",
    name: " Mario Testino. Private View",
    description:
      "Cuando la fama de un fotógrafo casi eclipsa a la de su lista de personajes sabes que es Testino. Esta Edición de Coleccionista presenta una suntuosa selección de sus trabajos de estudio y tomas espontáneas, relucientes al más puro estilo de la casa. Entre lo más destacado se encuentran una radiante Gwyneth Paltrow con su Oscar, una Jennifer Lopez con capa de pieles y los inolvidables retratos de Diana, princesa de Gales.",
    price: 1500,
    stock: 26,
    img: "https://i.imgur.com/yDbw4gv.jpg",
  },
  {
    category: "moda",
    name: " 40th Mert Alas and Marcus Piggott.",
    description:
      "Sumérjase en el electrizante mundo de Mert & Marcus, el dúo fotográfico cuyo genio y energía está detrás de la imagen pública de algunas de las marcas y personalidades más relevantes de nuestro tiempo, de Miu Miu a Angelina Jolie y de Givenchy a Gisele Bündchen. En formato compacto, basado en nuestra superventas Edición de Coleccionista, unas 300 imágenes conforman un repertorio híper glamuroso y brillante producto de una asociación creativa que ha definido y redefinido los estándares de la moda.",
    price: 80,
    stock: 20,
    img: "https://i.imgur.com/1neZU54.jpg",
  },
  {
    category: "moda",
    name: "Peter Lindbergh. On Fashion Photography. 40th Ed.",
    description:
      "El compendio definitivo sobre la obra de Peter Lindbergh se publica ahora en una edición especial de aniversario. Gracias a colaboraciones con losnames más venerados de la moda, Lindbergh creó nuevas narrativas con un enfoque humanista Este libro incluye más de 300 imágenes, muchas de ellas inéditas, y una entrevista adaptada con Lindbergh.",
    price: 25,
    stock: 12,
    img: "https://i.imgur.com/eVx7lBc.jpg",
  },
  {
    category: "moda",
    name: "Kate Moss by Mario Testino",
    description:
      "Kate + Mario = moda dinamita. Este libro es el homenaje personal del legendario fotógrafo, Mario Testino, a su gran musa, Kate Moss: una joven que atrapa su corazón y su mirada con su belleza, humor y espíritu, y cuya imagen ha conquistado los sueños del mundo entero. Esta extraordinaria colección incluye desfiles de moda, tomas instantáneas y las impresiones de ambos iconos.",
    price: 700,
    stock: 14,
    img: "https://i.imgur.com/dWbXGQU.jpg",
  },
  {
    category: "moda",
    name: "Helmut Newton. Polaroids",
    description:
      "La infalible habilidad de Helmut Newton para capturar el atractivo erótico de las mujeres fuertes y sorprendentes fue legendaria. Esta es una colección convincente de sus Polaroids de prueba, tomadas para prepararse para sus disparos formales, y que con su espontaneidad franca, ofrecen una fascinante visión del arte del fotógrafo.",
    price: 60,
    stock: 5,
    img: "https://i.imgur.com/h3McwZb.jpg",
  },
  {
    category: "moda",
    name: "Fashion Designers A-Z. Prada Edition",
    description:
      "Los grandes hitos de la moda del último siglo. Fotografías de más de 500 prendas pertenecientes a la colección permanente del Museo del Fashion Institute of Technology de Nueva York, que arrojan luz sobre la obra de más de 100 diseñadores y su influencia en la historia de la moda, con especial atención a sus piezas más destacadas. Este volumen de edición limitada, convertido en un clásico desde el momento de su publicación, es un título esencial en cualquier biblioteca especializada.",
    price: 750,
    stock: 18,
    img: "https://i.imgur.com/q1Nn8ry.jpg",
  },

  // fotografia

  {
    category: "fotografia",
    name: "Mick Rock. The Rise of David Bowie. 1972–1973",
    description:
      "Tributo a David Bowie de su fotógrafo oficial y socio creativo, Mick Rock. Recopilada en 2015 con permiso de Bowie, esta electrizante colección repasa con instantáneas sobre el escenario, retratos del backstage, cubiertas de álbumes o recortes de prensa, la revolución musical, teatral y sexual que supuso la vanguardista gira mundial Ziggy Stardust de 1972 y 1973. Un canto a un artista atrevido y excepcional.",
    price: 40,
    stock: 21,
    img: "https://i.imgur.com/pRdfLE1.jpg",
  },
  {
    category: "fotografia",
    name: "David LaChapelle. Good News. Part II",
    description:
      "TASCHEN se enorgullece de presentar la última, definitiva y muy esperada publicación del artista David LaChapelle, un proyecto en dos volúmenes que completa la antología de su trayectoria profesional. Aquí, Good News toma el relevo de Lost + Found, Part I con una monumental selección de imágenes que nunca antes habían sido publicadas en forma de libro. Culmina así la historia en cinco volúmenes del trabajo de LaChapelle, que ha cautivado a generaciones de espectadores de todo el mundo.",
    price: 70,
    stock: 15,
    img: "https://i.imgur.com/TqFvPAS.jpg",
  },
  {
    category: "fotografia",
    name: "Walter Chandoha. Dogs. Photographs 1941–1991",
    description:
      "El extraordinario legado de Walter Chandoha, el mejor fotógrafo de mascotas del siglo XX, sigue vivo en esta secuela de su éxito de crítica Cats. El libro presenta más de 60 razas fotografiadas con estilos y en ubicaciones de lo más variado, e incluye estudios de color y retratos ambientales, escenas callejeras en blanco y negro, perros deambulando libremente por el campo y certámenes caninos del pasado. Todas las imágenes rebosan de la ternura y empatía de Chandoha por estos encantadores animales.",
    price: 50,
    stock: 6,
    img: "https://i.imgur.com/br05ntn.jpg",
  },
  {
    category: "fotografia",
    name: "Historia de la fotografía. De 1839 a la actualidad",
    description:
      "De chico de los recados a uno de los industriales más importantes en la historia de Estados Unidos, la trayectoria de George Eastman, fundador de Kodak, se desarrolló de un modo singularmente norteamericano. Tras su muerte, su casa se convirtió en un museo internacional de fotografía y cine y hoy acoge la colección de su categoría más grande del mundo. Este volumen recoge las mejores imágenes de la colección y aporta una perspectiva única sobre la historia de la fotografía.",
    price: 20,
    stock: 8,
    img: "https://i.imgur.com/LEsuh01.jpg",
  },
  {
    category: "fotografia",
    name: "London. Portrait of a City",
    description:
      "Londres es una ciudad de excitantes contrastes, una mezcla de historia e innovación constante. Esta monografía en tamaño XL reúne una gran cantidad de fotografías procedentes de todo tipo de archivos para presentar un mapa visual del pasado y el presente de la ciudad. Imágenes de sus muy diversos habitantes, calles y rincones se combinan a lo largo del libro con referencias culturales clave y ensayos informativos.",
    price: 70,
    stock: 10,
    img: "https://i.imgur.com/3kW4mKb.jpg",
  },
  {
    category: "fotografia",
    name: "Mario Testino. SIR. 40th Ed.",
    description:
      "Mario Testino selecciona sus mejores retratos de hombres de los últimos treinta años. El juego de géneros, el fotoperiodismo, la tradición y la moda se encuentran en este edén de la seducción que evidencia el ojo infalible de Testino para la espontaneidad y la elegancia a la vez que retrata la evolución de la representación masculina en las últimas tres décadas.",
    price: 25,
    stock: 5,
    img: "https://i.imgur.com/ln1mbkx.jpg",
  },
  {
    category: "fotografia",
    name: "Peter Beard",
    description:
      "Peter Beard convirtió su vida en el continente africano en una obra de arte total: un collage de fotografía, activismo ambiental y literatura en formato diario. La edición original limitada de este voluminoso tomo en tamaño XL puede haberse agotado al instante, pero ahora vuelve para presentar el mundo único de este artista, un reino donde las modelos de alta costura alimentan jirafas bajo el sol de Kenia y los cadáveres de los elefantes dan testimonio de la destrucción del mundo natural a manos de los humanos.",
    price: 150,
    stock: 15,
    img: "https://i.imgur.com/euerIMQ.jpg",
  },
  {
    category: "fotografia",
    name: "The Polaroid Book. 40th Ed.",
    description:
      "Gracias a su peculiar tonalidad y su espontaneidad, las imágenes Polaroid se han convertido en un formato fotográfico popular durante décadas. Recopilando cientos de imágenes de importantes artistas de la colección de la Polaroid Corporation, y con la calidez y la nostalgia de un álbum familiar, esta oda a la cámara instantánea muestra las formas experimentales y la innovación con las que los fotógrafos la han utilizado.",
    price: 25,
    stock: 4,
    img: "https://i.imgur.com/2Q0wrNf.jpg",
  },

  // arte

  {
    category: "arte",
    name: "Albert Oehlen",
    description:
      "Gracias a su peculiar tonalidad y su espontaneidad, las imágenes Polaroid se han convertido en un formato fotográfico popular durante décadas. Recopilando cientos de imágenes de importantes artistas de la colección de la Polaroid Corporation, y con la calidez y la nostalgia de un álbum familiar, esta oda a la cámara instantánea muestra las formas experimentales y la innovación con las que los fotógrafos la han utilizado.",
    price: 80,
    stock: 6,
    img: "https://i.imgur.com/JApkTOd.jpg",
  },
  {
    category: "arte",
    name: "Arte moderno. Una historia desde el impresionismo hasta hoy.",
    description:
      "Un recorrido por la historia del arte moderno a través de 200 pinturas, esculturas, fotografías y piezas conceptuales cargadas de riesgo e innovación. Con descriptiones detalladas de las obras y análisis de los principales movimientos, este libro es un compendio riguroso de las ideas y creaciones artísticas que pusieron en jaque a los cánones academicistas, atacaron lo establecido e irrumpieron con fuerza con una propuesta vanguardista.",
    price: 20,
    stock: 9,
    img: "https://i.imgur.com/IRLpDUz.jpg",
  },
  {
    category: "arte",
    name: "Jean-Michel Basquiat",
    description:
      "Contemple de cerca los complejos signos y garabatos de Jean-Michel Basquiat, cuyas pinturas conservan hoy la misma frescura y vigencia que en el Nueva York de la década de 1980. Esta monografía en tamaño XXL reúne exquisitas reproducciones de las obras más destacadas del artista, acompañadas de textos del editor Hans Werner Holzwarth y de Eleanor Nairne, comisaria e historiadora de arte. Presentan a un artista cuya leyenda sigue viva, un símbolo de Nueva York de los años ochenta.",
    price: 200,
    stock: 4,
    img: "https://i.imgur.com/JmmGpCY.jpg",
  },
  {
    category: "arte",
    name: "Dalí",
    description:
      "Desde los relojes blandos hasta la célebre jirafa en llamas, esta obra celebra el fantástico mundo y la extravagante personalidad de Salvador Dalí, uno de los artistas más visionarios y prolíficos del siglo XX. Provocador, excéntrico y de gran destreza técnica, Dalí revolucionó el concepto de creador con su arte de consumo y su controvertido personaje. Un libro imprescindible sobre el hombre con el bigote más icónico del mundo.",
    price: 16,
    stock: 5,
    img: "https://i.imgur.com/KUklZ1K.jpg",
  },
  {
    category: "arte",
    name: "Frida Kahlo. Obra pictórica completa",
    description:
      "Entre las pocas mujeres artistas que han trascendido en la historia del arte, ninguna tuvo un ascenso tan meteórico como la pintora mexicana Frida Kahlo. Fue una figura prominente del arte mexicano de la posrevolución, además de pionera del discurso político en materia de género, sexualidad y feminismo. Esta monografía XXL combina sus 152 pinturas con fotografías poco conocidas, páginas de su diario, cartas y una biografía ilustrada.",
    price: 200,
    stock: 8,
    img: "https://i.imgur.com/kDOoDc2.jpg",
  },
  {
    category: "arte",
    name: "Monet. El triunfo del impresionismo",
    description:
      "La técnica de pintura impresionista de Claude Monet sigue siendo fuente de inspiración hoy. A través de su deslumbrante serie Los nenúfares o su obra fundadora, Impresión, sol naciente, descubra por qué Monet se convirtió en maestro de la pintura francesa en el siglo XIX, gracias a esta exploración de su vida y obra.",
    price: 60,
    stock: 15,
    img: "https://i.imgur.com/mkGMe2t.jpg",
  },
  {
    category: "arte",
    name: "Van Gogh",
    description:
      "Elogiado como pionero del postimpresionismo, Vincent van Gogh representa como nadie al prototipo del artista atormentado. Este libro nos introduce en el universo del genial artista francés a través de sus lienzos más famosos para descubrirnos su genio, a menudo febril, sus temáticas y estados de ánimo.",
    price: 16,
    stock: 5,
    img: "https://i.imgur.com/wJsKQdb.jpg",
  },
  {
    category: "arte",
    name: "Warhol on Basquiat. The Iconic Relationship Told in Andy Warhol’s Words and Pictures",
    description:
      "Producido en colaboración con The Andy Warhol Foundation y los herederos de Jean-Michel Basquiat, este libro explora la compleja relación personal y profesional de ambos artistas a través de cientos de fotografías inéditas de Basquiat tomadas por Warhol así como extractos de los legendarios Andy Warhol Diaries, material de archivo poco conocido y ejemplos de las obras de arte que crearon en común.",
    price: 60,
    stock: 8,
    img: "https://i.imgur.com/lEhZF68.jpg",
  },

  // arquitectura y diseño

  {
    category: "arquitectura",
    name: "100 Interiors Around the World. Un viaje por el mundo de los interiores",
    description:
      "PrEste catálogo, que incluye lo mejor del interiorismo en todos los continentes, ofrece al lector los hogares más elegantes de Biarritz a Brasil. Deléitese con las imágenes tomadas por ilustres fotógrafos de diseño de interiores que muestran todo tipo de casas imaginables. Desde el minimalismo de hormigón y las líneas limpias hasta el eclecticismo más desenfadado, espacios y estilos en los que brillan las texturas y las tendencias.",
    price: 20,
    stock: 10,
    img: "https://i.imgur.com/OButPsr.jpg",
  },
  {
    category: "arquitectura",
    name: "Bauhaus. Edición actualizada",
    description:
      "Esta práctica edición actualizada explora la Escuela de Arte y Diseño Bauhaus a través de 575 ilustraciones en 552 páginas, además de las biografías de sus figuras clave. Realizada en colaboración con el Bauhaus-Archiv de Berlín, esta obra de referencia está ahora disponible en edición Bibliotheca Universalis, la guía perfecta para su próximo viaje a Berlín, Weimer o Dessau.",
    price: 20,
    stock: 14,
    img: "https://i.imgur.com/nupw0z3.jpg",
  },
  {
    category: "arquitectura",
    name: "Cabins",
    description:
      "¿Echa de menos la sencillez de lo rústico? Venga y asómese a Cabañas, una magnífica muestra de viviendas minimalistas, aisladas y de bajo impacto de todo el mundo. Desde un estudio en la costa de Inglaterra que invita a la contemplación a cabañas ecológicas en las Ghats occidentales, en India, cada una de estas viviendas es un modelo de innovación, respeto al medio ambiente y vida sostenible y consciente.",
    price: 20,
    stock: 3,
    img: "https://i.imgur.com/OXyGx0C.jpg",
  },
  {
    category: "arquitectura",
    name: "Calatrava. Complete Works 1979–Today",
    description:
      "Esta monografía actualizada de Calatrava incluye todas sus obras originales, así como los proyectos más recientes. Desde el intercambiador del World Trade Center de Manhattan hasta el Museo del Mañana de Río de Janeiro, descubra las formas orgánicas y la sensibilidad por el equilibro de Calatrava gracias a entradas detalladas, fotografías y los bocetos originales en acuarela que lo distinguen como un maestro creativo único.",
    price: 60,
    stock: 4,
    img: "https://i.imgur.com/rsYjNd0.jpg",
  },
  {
    category: "arquitectura",
    name: "Contemporary Houses. 100 Homes Around the World",
    description:
      "Entre en cien de las casas más hermosas e innovadoras de las últimas dos décadas. De la mano de arquitectos destacados, como Daniel Libeskind, Herzog & de Meuron y Zaha Hadid, este es un compendio mundial sobre los matices, desafíos y oportunidades al trasladar todos los requisitos emocionales y prácticos de un hogar a una construcción real.",
    price: 80,
    stock: 2,
    img: "https://i.imgur.com/bLSB68a.jpg",
  },
  {
    category: "arquitectura",
    name: "Eames",
    description:
      "La pareja creativa formada por Charles y Ray Eames marcó un antes y un después en la historia del diseño. Marido y mujer definieron una nueva modernidad multifuncional en los ámbitos del mobiliario, la fotografía, la arquitectura, el diseño textil, el diseño industrial y el cine. Descubra las múltiples facetas de su ilustre repertorio y su revolucionario impacto en la vida de la clase media estadounidense",
    price: 16,
    stock: 7,
    img: "https://i.imgur.com/RnHz0QC.jpg",
  },
  {
    category: "arquitectura",
    name: "Living in Provence ",
    description:
      "Visite una tierra de tranquilas plazas adoquinadas, cerámica rústica y campos de lavanda. Descubra el encanto rural que sedujo a artistas de la talla de Vincent van Gogh y Picasso con esta monografía dedicada a las casas e interiores de la Provenza. Desde espléndidos castillos hasta tranquilos y antiguos retiros campestres, esta edición actualizada incluye reveladoras explicaciones, evocadoras imágenes a doble página y nuevas fotografías.",
    price: 20,
    stock: 3,
    img: "https://i.imgur.com/0yKAjzt.jpg",
  },
  {
    category: "arquitectura",
    name: "Zaha Hadid",
    description:
      "Descubra el audaz futurismo de Zaha Hadid. La arquitecta, la primera mujer en ganar el premio Pritzker y la Medalla de Oro del RIBA, rompió las reglas y redefinió el sector, pese a que para algunos sus diseños no se podían construir. En el momento de su inesperada muerte en 2016, Hadid era reconocida como la primera gran arquitecta de la primera década del siglo XXI.",
    price: 16,
    stock: 6,
    img: "https://i.imgur.com/HkiVEY6.jpg",
  },
];

// FUNCION PARA SUBIR TODOS LOS PRODUCTOS A FIREBASE

function addDocsFb(){
  libros.forEach((testItem) => {
  const db = getFirestore();

  const queryCollection = collection(db, "products");

  addDoc(queryCollection, testItem)
  .then((resp)=> console.log(resp))
  .finally(console.log("subido"))
});}

function Cart() {
  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const {
    cartList,
    emptyCart,
    deleteProduct,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);

  return cartList.length ? (
    <div className="contenedorCart">
      <div className="contenedorProductosCart">
        <div>
          <table className="table tableMediaQuery">
            <thead className="spacing titulosTabla">
              <tr>
                <th scope="col">PRODUCTO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ELIMINAR</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {cartList.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <img className="imgCart" src={product.img} alt="" />
                  </th>

                  <td>{product.name}</td>
                  <td>{product.price * product.quantity}</td>
                  <td>{product.quantity}</td>

                  <td>
                    <button
                      class="noselect botonEliminar"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <span class="text">Eliminar</span>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            className="buttonEmptyCart spacing"
            onClick={emptyCart}
          >
            Vaciar carrito
          </button>
        </div>
      </div>

      {/* RESUMEN DE COMPRA */}

      <div className="contenedorResumenFormulario">
        <div className="contenedorResumenCompra">
          <table className="table detalleCompra">
            <thead>
              <th className="tituloDetalleCompra spacing" scope="col">
                <p>DETALLE DE COMPRA</p>{" "}
              </th>
            </thead>
            <tbody className="textOrder">
              <td>
                <p className="spacing">
                  Cantidad de productos:
                  {totalQuantity() !== 0 && totalQuantity()}
                </p>
                <p className="spacing">
                  TOTAL: US${totalPrice() !== 0 && totalPrice()}
                </p>
              </td>
            </tbody>
          </table>

          {/* <button onClick={generateOrder}>Enviar orden de compra!</button> */}

          <CartModal
            className="botonFinalizarCompra spacing"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            fullscreen={fullscreen}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="contenedorCarritoVacio1">
      <div className="contenedorCarritoVacio animate__animated animate__zoomIn animate__slow">
        <h2 className="textoCarritoVacio ">SU CARRITO ESTA VACIO </h2>

        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/tienda"}
        >
          <button className="botonCartIrTienda">IR A LA TIENDA </button>
        </NavLink>
        <ImHeartBroken
          className="animate__animated animate__swing animate__slower animate__infinite 	"
          size={50}
        />
      </div>
      <button onClick={()=>addDocsFb()}> traer datos </button>
    </div>
  );
}

export default Cart;
