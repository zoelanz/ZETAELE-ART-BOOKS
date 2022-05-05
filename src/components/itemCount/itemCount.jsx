
import "./itemCount.css"
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

function ItemCount({stock, initial, onAdd}){

    const [count, setCount]= useState(initial);

    // const [date, setDate]= useState(Date);

    function contadorMas(){
        if(count<stock){
            setCount(count+1);
            // setDate(Date());
        }
    }

    function contadorMenos(){
        if(count>initial){
            setCount(count-1);
            // setDate(Date());
        }
    }


return(
<div className="containerContadorTodo">

<h1>STOCK DISPONIBLE: {stock}</h1>

<div className="containerContador">

<button className="boton" onClick={contadorMenos}> <FaMinus/></button> 

<p className="numero">{count}</p>

<button className="boton" onClick={contadorMas}> <FaPlus/></button>

</div>

<div className="containerBotonCarrito">

<button className="botonCarrito" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>

</div>







{/* <p>FECHA DEL ULTIMO CLICK :{date}</p> */}

</div>

)

}

export default ItemCount