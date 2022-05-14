


function ItemDetail({img,nombre,precio,descripcion}){
  return (
    <div>
      <img src={img} alt="" />
      <h1>{nombre}</h1>
      <p>{precio}</p>
      <p>{descripcion}</p>
    </div>
  )
}

export default ItemDetail
