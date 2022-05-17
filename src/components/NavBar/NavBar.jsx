import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {

  return (
    <header>
      <h1>ZETAELE | Art Books</h1>
      <div className="navegador">
        <nav>
          <ul>
            <Link to="/tienda">
            <li>
              <a href="">TODOS LOS TíTULOS</a>
            </li>
            </Link>
           <Link to={`/tienda/moda`}>
              <li>
                <a href="">MODA</a>
              </li>
           </Link>
           <Link to={`/tienda/fotografia`}>
              <li>
                <a href="">FOTOGRAFíA</a>
              </li>
           </Link>
          <Link to={`/tienda/arte`}>
              <li>
                <a href="">ARTE</a>
              </li>
          </Link>
            <Link to={`/tienda/arquitectura`}>
              <li>
                <a href="">ARQUITECTURA & DISEÑO</a>
              </li>
            </Link>
           <Link to={`/carrito`}>
              <CartWidget/>
           </Link> 
          </ul>
          {/* <div id="containerMenu" className="barsHide iconos">
            <i className="fa-solid fa-bars-staggered" aria-hideen="true" />
            <i className="fa-brands fa-opencart " />
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar; // exporto el navbar



