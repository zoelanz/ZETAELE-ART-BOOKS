import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
  return (
    <header>
      <h1>ZETAELE | Art Books</h1>
      <div className="navegador">
        <nav>
          <ul>
            <li>
              <a href="">TODOS LOS TíTULOS</a>
            </li>
            <li>
              <a href="">MODA</a>
            </li>
            <li>
              <a href="">FOTOGRAFíA</a>
            </li>
            <li>
              <a href="">ARTE</a>
            </li>
            <li>
              <a href="">ARQUITECTURA & DISEÑO</a>
            </li>
            <CartWidget/> 
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



