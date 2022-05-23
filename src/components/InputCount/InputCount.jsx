import { Link } from "react-router-dom";
import "./InputCount.css"



function InputCount() {
  return (

    <div className="containerChangeButton w-75 m-auto justify-content-between mt-5">
    <Link to= "/carrito">

    <button className="botonesOpciones">
        Terminar compra!
    </button>

    </Link>


    <Link to= "/tienda">

    <button className="botonesOpciones" >
        Seguir comprando!
    </button>

    </Link>
    
    </div>

  )
}

export default InputCount







