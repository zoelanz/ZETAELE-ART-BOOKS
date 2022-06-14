import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function NavBar() {
  return (
    <header>
      <NavLink
        activeclassname="currentCategory"
        className="text-white"
        to={`/tienda`}
      >
        <h1>ZETAELE | Art Books</h1>
      </NavLink>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/tienda`}>TODOS LOS TíTULOS</Link>
            </li>
            <li>
              <Link to={`/tienda/moda`}>MODA</Link>
            </li>
            <li>
              <Link to={`/tienda/fotografia`}>FOTOGRAFíA</Link>
            </li>
            <li>
              <Link to={`/tienda/arte`}>ARTE</Link>
            </li>
            <li>
              <Link to={`/tienda/arquitectura`}>ARQUITECTURA & DISEÑO</Link>
            </li>
            <Link to={`/carrito`}>
              <CartWidget />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
