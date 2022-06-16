import { Link } from "react-router-dom";

function InputCount() {
  return (
    <div className="containerChangeButton w-75 m-auto justify-content-between mt-5">
      <Link to="/carrito">
        <button className="buttonOptions">Terminar compra!</button>
      </Link>
      <Link to="/tienda">
        <button className="buttonOptions">Seguir comprando!</button>
      </Link>
    </div>
  );
}

export default InputCount;
