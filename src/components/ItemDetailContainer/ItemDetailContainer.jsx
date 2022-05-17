import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"

let libros = [
  {
    id: "1",
    categoria: "moda",
    nombre: "Sneaker Freaker. The Ultimate Sneaker Book",
    descripcion: "Desde hace casi dos décadas, Sneaker Freaker ha liderado la escena mundial de las zapatillas de deporte. Con más de 650 páginas rediseñadas, fotografías recientes, detalles históricos pormenorizados y una minuciosidad obsesiva propia de un otaku, esta monumental antología es una oda a las zapatillas deportivas. Reúne lo mejor de la revista junto a contenido creado exclusivamente para TASCHEN.",
    precio: "US$60",
    stock: 10,
    img: "/src/img/MODA/SneakerFreaker. The UltimateSneakerBook.jpg",
  },
  {
    id: "2",
    categoria: "moda",
    nombre: "Mert Alas and Marcus Piggott",
    descripcion: "Sumérjase en el electrizante mundo de Mert & Marcus, el dúo fotográfico cuya creatividad inagotable está detrás de la imagen pública de algunas de las marcas y personalidades más relevantes de nuestro tiempo, de Miu Miu a Angelina Jolie y de Givenchy a Gisele Bündchen. Esta Edición de Coleccionista en tamaño XXL incluye unas 300 fotografías de su hiperglamuroso y brillante repertorio.",
    precio: "US$1750",
    stock: 2,
    img: "/src/img/MODA/mert.jpg",
  },
  {
    id: "3",
    categoria: "moda",
    nombre: "Peter Lindbergh. On Fashion Photography. 40th Ed.",
    descripcion: "El compendio definitivo sobre la obra de Peter Lindbergh se publica ahora en una edición especial de aniversario. Gracias a colaboraciones con los nombres más venerados de la moda, Lindbergh creó nuevas narrativas con un enfoque humanista Este libro incluye más de 300 imágenes, muchas de ellas inéditas, y una entrevista adaptada con Lindbergh.",
    precio: "US$25",
    stock: 12,
    img: "/src/img/MODA/PeterLindbergh.OnFashionPhotography.40thEd.jpg",
  },
  {
    id: "4",
    categoria: "moda",
    nombre: " 40th Mert Alas and Marcus Piggott.",
    descripcion: "Sumérjase en el electrizante mundo de Mert & Marcus, el dúo fotográfico cuyo genio y energía está detrás de la imagen pública de algunas de las marcas y personalidades más relevantes de nuestro tiempo, de Miu Miu a Angelina Jolie y de Givenchy a Gisele Bündchen. En formato compacto, basado en nuestra superventas Edición de Coleccionista, unas 300 imágenes conforman un repertorio híper glamuroso y brillante producto de una asociación creativa que ha definido y redefinido los estándares de la moda.",
    precio: "US$80",
    stock: 20,
    img: "/src/img/MODA/MertAlasandMarcusPiggott.jpg",
  },
  {
    id: "5",
    categoria: "moda",
    nombre: " Mario Testino. Private View",
    descripcion: "Cuando la fama de un fotógrafo casi eclipsa a la de su lista de personajes sabes que es Testino. Esta Edición de Coleccionista presenta una suntuosa selección de sus trabajos de estudio y tomas espontáneas, relucientes al más puro estilo de la casa. Entre lo más destacado se encuentran una radiante Gwyneth Paltrow con su Oscar, una Jennifer Lopez con capa de pieles y los inolvidables retratos de Diana, princesa de Gales.",
    precio: "US$1500",
    stock: 26,
    img: "/src/img/MODA/MarioTestino.PrivateView.jpg",
  },
  {
    id: "6",
    categoria: "moda",
    nombre: "Kate Moss by Mario Testino",
    descripcion: "Kate + Mario = moda dinamita. Este libro es el homenaje personal del legendario fotógrafo, Mario Testino, a su gran musa, Kate Moss: una joven que atrapa su corazón y su mirada con su belleza, humor y espíritu, y cuya imagen ha conquistado los sueños del mundo entero. Esta extraordinaria colección incluye desfiles de moda, tomas instantáneas y las impresiones de ambos iconos.",
    precio: "US$700",
    stock: 14,
    img: "/src/img/MODA/KateMossbyMarioTestino.jpg",
  },
  {
    id: "7",
    categoria: "moda",
    nombre: "Helmut Newton. Polaroids",
    descripcion: "La infalible habilidad de Helmut Newton para capturar el atractivo erótico de las mujeres fuertes y sorprendentes fue legendaria. Esta es una colección convincente de sus Polaroids de prueba, tomadas para prepararse para sus disparos formales, y que con su espontaneidad franca, ofrecen una fascinante visión del arte del fotógrafo.",
    precio: "US$60",
    stock: 5,
    img: "/src/img/MODA/HelmutNewton.Polaroids.jpg",
  },
  {
    id: "8",
    categoria: "moda",
    nombre: "Fashion Designers A-Z. Prada Edition",
    descripcion: "Los grandes hitos de la moda del último siglo. Fotografías de más de 500 prendas pertenecientes a la colección permanente del Museo del Fashion Institute of Technology de Nueva York, que arrojan luz sobre la obra de más de 100 diseñadores y su influencia en la historia de la moda, con especial atención a sus piezas más destacadas. Este volumen de edición limitada, convertido en un clásico desde el momento de su publicación, es un título esencial en cualquier biblioteca especializada.",
    precio: "US$750",
    stock: 18,
    img: "/src/img/MODA/FashionDesignersA-Z.PradaEdition.jpg",
  },

  // fotografia

  {
    id: "9",
    categoria: "fotografia",
    nombre: "Mick Rock. The Rise of David Bowie. 1972–1973",
    descripcion: "Tributo a David Bowie de su fotógrafo oficial y socio creativo, Mick Rock. Recopilada en 2015 con permiso de Bowie, esta electrizante colección repasa con instantáneas sobre el escenario, retratos del backstage, cubiertas de álbumes o recortes de prensa, la revolución musical, teatral y sexual que supuso la vanguardista gira mundial Ziggy Stardust de 1972 y 1973. Un canto a un artista atrevido y excepcional.",
    precio: "US$40",
    stock: 21,
    img: "/src/img/FOTOGRAFIA/davidbowie.jpg",
  },
  {
    id: "10",
    categoria:"fotografia",
    nombre: "David LaChapelle. Good News. Part II",
    descripcion: "TASCHEN se enorgullece de presentar la última, definitiva y muy esperada publicación del artista David LaChapelle, un proyecto en dos volúmenes que completa la antología de su trayectoria profesional. Aquí, Good News toma el relevo de Lost + Found, Part I con una monumental selección de imágenes que nunca antes habían sido publicadas en forma de libro. Culmina así la historia en cinco volúmenes del trabajo de LaChapelle, que ha cautivado a generaciones de espectadores de todo el mundo.",
    precio: "US$70",
    stock: 15,
    img: "/src/img/FOTOGRAFIA/davidLaChapelle.jpg",
  },
  {
    id: "11",
    categoria:"fotografia",
    nombre: "Walter Chandoha. Dogs. Photographs 1941–1991",
    descripcion:"El extraordinario legado de Walter Chandoha, el mejor fotógrafo de mascotas del siglo XX, sigue vivo en esta secuela de su éxito de crítica Cats. El libro presenta más de 60 razas fotografiadas con estilos y en ubicaciones de lo más variado, e incluye estudios de color y retratos ambientales, escenas callejeras en blanco y negro, perros deambulando libremente por el campo y certámenes caninos del pasado. Todas las imágenes rebosan de la ternura y empatía de Chandoha por estos encantadores animales.",
    precio: "US$50",
    stock: 6,
    img: "/src/img/FOTOGRAFIA/dogs.jpg",
  },
  {
    id: "12",
    categoria:"fotografia",
    nombre: "Historia de la fotografía. De 1839 a la actualidad",
    descripcion:"De chico de los recados a uno de los industriales más importantes en la historia de Estados Unidos, la trayectoria de George Eastman, fundador de Kodak, se desarrolló de un modo singularmente norteamericano. Tras su muerte, su casa se convirtió en un museo internacional de fotografía y cine y hoy acoge la colección de su categoría más grande del mundo. Este volumen recoge las mejores imágenes de la colección y aporta una perspectiva única sobre la historia de la fotografía.",
    precio: "US$20",
    stock: 8,
    img: "/src/img/FOTOGRAFIA/historyPhotography.jpg",
  },
  {
    id: "13",
    categoria:"fotografia",
    nombre: "London. Portrait of a City",
    descripcion:"Londres es una ciudad de excitantes contrastes, una mezcla de historia e innovación constante. Esta monografía en tamaño XL reúne una gran cantidad de fotografías procedentes de todo tipo de archivos para presentar un mapa visual del pasado y el presente de la ciudad. Imágenes de sus muy diversos habitantes, calles y rincones se combinan a lo largo del libro con referencias culturales clave y ensayos informativos.",
    precio: "US$70",
    stock: 10,
    img: "/src/img/FOTOGRAFIA/london.jpg",
  },
  {
    id: "14",
    categoria:"fotografia",
    nombre: "Mario Testino. SIR. 40th Ed.",
    descripcion:"Mario Testino selecciona sus mejores retratos de hombres de los últimos treinta años. El juego de géneros, el fotoperiodismo, la tradición y la moda se encuentran en este edén de la seducción que evidencia el ojo infalible de Testino para la espontaneidad y la elegancia a la vez que retrata la evolución de la representación masculina en las últimas tres décadas.",
    precio: "US$25",
    stock: 5,
    img: "/src/img/FOTOGRAFIA/matioTestino.jpg",
  },
  {
    id: "15",
    categoria:"fotografia",
    nombre: "Peter Beard",
    descripcion:"Peter Beard convirtió su vida en el continente africano en una obra de arte total: un collage de fotografía, activismo ambiental y literatura en formato diario. La edición original limitada de este voluminoso tomo en tamaño XL puede haberse agotado al instante, pero ahora vuelve para presentar el mundo único de este artista, un reino donde las modelos de alta costura alimentan jirafas bajo el sol de Kenia y los cadáveres de los elefantes dan testimonio de la destrucción del mundo natural a manos de los humanos.",
    precio: "US$150",
    stock: 15,
    img: "/src/img/FOTOGRAFIA/peterBeard.jpg",
  },
  {
    id: "16",
    categoria:"fotografia",
    nombre: "The Polaroid Book. 40th Ed.",
    descripcion:"Gracias a su peculiar tonalidad y su espontaneidad, las imágenes Polaroid se han convertido en un formato fotográfico popular durante décadas. Recopilando cientos de imágenes de importantes artistas de la colección de la Polaroid Corporation, y con la calidez y la nostalgia de un álbum familiar, esta oda a la cámara instantánea muestra las formas experimentales y la innovación con las que los fotógrafos la han utilizado.",
    precio: "US$25",
    stock: 4,
    img: "/src/img/FOTOGRAFIA/polaroidBook.jpg",
  },

  // arte

  {
    id: "17",
    categoria:"arte",
    nombre: "Albert Oehlen",
    descripcion:"Gracias a su peculiar tonalidad y su espontaneidad, las imágenes Polaroid se han convertido en un formato fotográfico popular durante décadas. Recopilando cientos de imágenes de importantes artistas de la colección de la Polaroid Corporation, y con la calidez y la nostalgia de un álbum familiar, esta oda a la cámara instantánea muestra las formas experimentales y la innovación con las que los fotógrafos la han utilizado.",
    precio: "US$80",
    stock: 6,
    img: "/src/img/ARTE/albertOehlen.jpg",
  },
  {
    id: "18",
    categoria:"arte",
    nombre: "Arte moderno. Una historia desde el impresionismo hasta hoy.",
    descripcion:"Un recorrido por la historia del arte moderno a través de 200 pinturas, esculturas, fotografías y piezas conceptuales cargadas de riesgo e innovación. Con descripciones detalladas de las obras y análisis de los principales movimientos, este libro es un compendio riguroso de las ideas y creaciones artísticas que pusieron en jaque a los cánones academicistas, atacaron lo establecido e irrumpieron con fuerza con una propuesta vanguardista.",
    precio: "US$20",
    stock: 9,
    img: "/src/img/ARTE/arteModerno.jpg",
  },
  {
    id: "19",
    categoria:"arte",
    nombre: "Jean-Michel Basquiat",
    descripcion:"Contemple de cerca los complejos signos y garabatos de Jean-Michel Basquiat, cuyas pinturas conservan hoy la misma frescura y vigencia que en el Nueva York de la década de 1980. Esta monografía en tamaño XXL reúne exquisitas reproducciones de las obras más destacadas del artista, acompañadas de textos del editor Hans Werner Holzwarth y de Eleanor Nairne, comisaria e historiadora de arte. Presentan a un artista cuya leyenda sigue viva, un símbolo de Nueva York de los años ochenta.",
    precio: "US$200",
    stock: 4,
    img: "/src/img/ARTE/basquiat.jpg",
  },
  {
    id: "20",
    categoria:"arte",
    nombre: "Dalí",
    descripcion:"Desde los relojes blandos hasta la célebre jirafa en llamas, esta obra celebra el fantástico mundo y la extravagante personalidad de Salvador Dalí, uno de los artistas más visionarios y prolíficos del siglo XX. Provocador, excéntrico y de gran destreza técnica, Dalí revolucionó el concepto de creador con su arte de consumo y su controvertido personaje. Un libro imprescindible sobre el hombre con el bigote más icónico del mundo.",
    precio: "US$16",
    stock: 5,
    img: "/src/img/ARTE/dali.jpg",
  },
  {
    id: "21",
    categoria:"arte",
    nombre: "Frida Kahlo. Obra pictórica completa",
    descripcion:"Entre las pocas mujeres artistas que han trascendido en la historia del arte, ninguna tuvo un ascenso tan meteórico como la pintora mexicana Frida Kahlo. Fue una figura prominente del arte mexicano de la posrevolución, además de pionera del discurso político en materia de género, sexualidad y feminismo. Esta monografía XXL combina sus 152 pinturas con fotografías poco conocidas, páginas de su diario, cartas y una biografía ilustrada.",
    precio: "US$200",
    stock: 8,
    img: "/src/img/ARTE/frida.jpg",
  },
  {
    id: "22",
    categoria:"arte",
    nombre: "Monet. El triunfo del impresionismo",
    descripcion:"La técnica de pintura impresionista de Claude Monet sigue siendo fuente de inspiración hoy. A través de su deslumbrante serie Los nenúfares o su obra fundadora, Impresión, sol naciente, descubra por qué Monet se convirtió en maestro de la pintura francesa en el siglo XIX, gracias a esta exploración de su vida y obra.",
    precio: "US$60",
    stock: 15,
    img: "/src/img/ARTE/monet.jpg",
  },
  {
    id: "23",
    categoria:"arte",
    nombre: "Van Gogh",
    descripcion:"Elogiado como pionero del postimpresionismo, Vincent van Gogh representa como nadie al prototipo del artista atormentado. Este libro nos introduce en el universo del genial artista francés a través de sus lienzos más famosos para descubrirnos su genio, a menudo febril, sus temáticas y estados de ánimo.",
    precio: "US$16",
    stock: 5,
    img: "/src/img/ARTE/vangogh.jpg",
  },
  {
    id: "24",
    categoria:"arte",
    nombre: "Warhol on Basquiat. The Iconic Relationship Told in Andy Warhol’s Words and Pictures",
    descripcion: "Producido en colaboración con The Andy Warhol Foundation y los herederos de Jean-Michel Basquiat, este libro explora la compleja relación personal y profesional de ambos artistas a través de cientos de fotografías inéditas de Basquiat tomadas por Warhol así como extractos de los legendarios Andy Warhol Diaries, material de archivo poco conocido y ejemplos de las obras de arte que crearon en común.",
    precio: "US$60",
    stock: 8,
    img: "/src/img/ARTE/warholBasquiat.jpg",
  },

  // arquitectura y diseño

  {
    id: "25",
    categoria:"arquitectura",
    nombre: "100 Interiors Around the World. Un viaje por el mundo de los interiores",
    descripcion: "PrEste catálogo, que incluye lo mejor del interiorismo en todos los continentes, ofrece al lector los hogares más elegantes de Biarritz a Brasil. Deléitese con las imágenes tomadas por ilustres fotógrafos de diseño de interiores que muestran todo tipo de casas imaginables. Desde el minimalismo de hormigón y las líneas limpias hasta el eclecticismo más desenfadado, espacios y estilos en los que brillan las texturas y las tendencias.",
    precio: "US$20",
    stock: 10,
    img: "/src/img/ARQ&DISEÑO/100interiors.jpg",
  },
  {
    id: "26",
    categoria:"arquitectura",
    nombre: "Bauhaus. Edición actualizada",
    descripcion: "Esta práctica edición actualizada explora la Escuela de Arte y Diseño Bauhaus a través de 575 ilustraciones en 552 páginas, además de las biografías de sus figuras clave. Realizada en colaboración con el Bauhaus-Archiv de Berlín, esta obra de referencia está ahora disponible en edición Bibliotheca Universalis, la guía perfecta para su próximo viaje a Berlín, Weimer o Dessau.",
    precio: "US$20",
    stock: 14,
    img: "/src/img/ARQ&DISEÑO/bauhaus.jpg",
  },
  {
    id: "27",
    categoria:"arquitectura",
    nombre: "Cabins",
    descripcion: "¿Echa de menos la sencillez de lo rústico? Venga y asómese a Cabañas, una magnífica muestra de viviendas minimalistas, aisladas y de bajo impacto de todo el mundo. Desde un estudio en la costa de Inglaterra que invita a la contemplación a cabañas ecológicas en las Ghats occidentales, en India, cada una de estas viviendas es un modelo de innovación, respeto al medio ambiente y vida sostenible y consciente.",
    precio: "US$20",
    stock: 3,
    img: "/src/img/ARQ&DISEÑO/cabins.jpg",
  },
  {
    id: "28",
    categoria:"arquitectura",
    nombre: "Calatrava. Complete Works 1979–Today",
    descripcion: "Esta monografía actualizada de Calatrava incluye todas sus obras originales, así como los proyectos más recientes. Desde el intercambiador del World Trade Center de Manhattan hasta el Museo del Mañana de Río de Janeiro, descubra las formas orgánicas y la sensibilidad por el equilibro de Calatrava gracias a entradas detalladas, fotografías y los bocetos originales en acuarela que lo distinguen como un maestro creativo único.",
    precio: "US$60",
    stock: 4,
    img: "/src/img/ARQ&DISEÑO/calatrava.jpg",
  },
  {
    id: "29",
    categoria:"arquitectura",
    nombre: "Contemporary Houses. 100 Homes Around the World",
    descripcion: "Entre en cien de las casas más hermosas e innovadoras de las últimas dos décadas. De la mano de arquitectos destacados, como Daniel Libeskind, Herzog & de Meuron y Zaha Hadid, este es un compendio mundial sobre los matices, desafíos y oportunidades al trasladar todos los requisitos emocionales y prácticos de un hogar a una construcción real.",
    precio: "US$80",
    stock: 2,
    img: "/src/img/ARQ&DISEÑO/ContemporaryHouses.jpg",
  },
  {
    id: "30",
    categoria:"arquitectura",
    nombre: "Eames",
    descripcion: "La pareja creativa formada por Charles y Ray Eames marcó un antes y un después en la historia del diseño. Marido y mujer definieron una nueva modernidad multifuncional en los ámbitos del mobiliario, la fotografía, la arquitectura, el diseño textil, el diseño industrial y el cine. Descubra las múltiples facetas de su ilustre repertorio y su revolucionario impacto en la vida de la clase media estadounidense",
    precio: "US$16",
    stock: 7,
    img: "/src/img/ARQ&DISEÑO/eames.jpg",
  },
  {
    id: "31",
    categoria:"arquitectura",
    nombre: "Living in Provence ",
    descripcion: "Visite una tierra de tranquilas plazas adoquinadas, cerámica rústica y campos de lavanda. Descubra el encanto rural que sedujo a artistas de la talla de Vincent van Gogh y Picasso con esta monografía dedicada a las casas e interiores de la Provenza. Desde espléndidos castillos hasta tranquilos y antiguos retiros campestres, esta edición actualizada incluye reveladoras explicaciones, evocadoras imágenes a doble página y nuevas fotografías.",
    precio: "US$20",
    stock: 3,
    img: "/src/img/ARQ&DISEÑO/livingInProvence.jpg",
  },
  {
    id: "32",
    categoria:"arquitectura",
    nombre: "Zaha Hadid",
    descripcion: "Descubra el audaz futurismo de Zaha Hadid. La arquitecta, la primera mujer en ganar el premio Pritzker y la Medalla de Oro del RIBA, rompió las reglas y redefinió el sector, pese a que para algunos sus diseños no se podían construir. En el momento de su inesperada muerte en 2016, Hadid era reconocida como la primera gran arquitecta de la primera década del siglo XXI.",
    precio: "US$16",
    stock: 6,
    img: "/src/img/ARQ&DISEÑO/zahaHadid.jpg",
  },
];

function ItemDetailContainer() {

const [productoDelArray, setProductoDelArray] = useState({});
const {detailId}=useParams();


const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(libros);
  }, 1000);
});

useEffect(() => {
  promesa
    .then((respuesta) => {
      setProductoDelArray(respuesta.find((item)=> item.id === detailId));
    })
}, []);

  return (
    <div>
      <ItemDetail nombre={productoDelArray.nombre} id={productoDelArray.id} precio={productoDelArray.precio} descripcion={productoDelArray.descripcion} img={productoDelArray.img} stockDis={productoDelArray.stock} />
    </div>
  );
}

export default ItemDetailContainer;
