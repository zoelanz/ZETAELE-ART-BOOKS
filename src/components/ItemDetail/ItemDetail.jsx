import ItemCount from "../itemCount/itemCount";
import "./ItemDetail.css";


function ItemDetail({nombre,img,descripcion,precio,stockDis}) {

	function cart(count) {
		alert(`${count} items agregados al carrito`);
	  }

  return (
    <div className="containerDetail">
		<div className="cardDetail">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={img}/></div>
						  <div className="tab-pane" id="pic-2"><img src={img} /></div>
						  <div className="tab-pane" id="pic-3"><img src={img} /></div>
						  <div className="tab-pane" id="pic-4"><img src={img} /></div>
						  <div className="tab-pane" id="pic-5"><img src={img} /></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={img} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={img} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={img} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={img} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={img} /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{nombre}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
						</div>
						<p className="product-description">{descripcion}</p>
						<h4 className="price">Precio: <span>{precio}</span></h4>
						<div className="action">
							{/* <button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button> */}
							<ItemCount stock={stockDis} initial={1} onAdd={cart} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ItemDetail
