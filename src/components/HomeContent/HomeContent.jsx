import { Link } from "react-router-dom";
import "./HomeContent.css";


function HomeContent() {
  return (
    <div className="containerGallery">
      <div className="item item1"></div>
      <div className="item item2"></div>
      <div className="item item3"></div>
      <div className="item item4"></div>
      <div className="item item5"></div>
      <div className="item item6"></div>
      <div className="item item7"></div>
      <div className="item item8"></div>
      <Link to= "/tienda" className="buttonHome"> ZETAELE ARTBOOKS - TIENDA</Link>
    </div>
  );
}

export default HomeContent;
