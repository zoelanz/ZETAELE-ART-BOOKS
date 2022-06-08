import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";



function NavBar() {

  return (
    <header>
       <NavLink activeclassname='currentCategory' className='text-white' to={`/tienda`}>
       <h1>ZETAELE | Art Books</h1>
       </NavLink>
      <div>
        <nav>
          <ul>
            <Link to={`/tienda`}>
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
        </nav>
      </div>
    </header>
  );
}

export default NavBar; 


