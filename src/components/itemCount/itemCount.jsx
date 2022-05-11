
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

<h3>STOCK DISPONIBLE: {stock}</h3>

<div className="containerContador">

<button className="boton" onClick={contadorMenos}> <FaMinus/></button> 

<p className="numero">{count}</p>

<button className="boton" onClick={contadorMas}> <FaPlus/></button>

</div>

<div className="containerBotonCarrito">

<button className="cta" onClick={()=>onAdd(count)}>
  <span className="hover-underline-animation"> AÑADIR AL CARRITO </span>
  <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
  </svg>
</button>

{/* <button className="botonCarrito" onClick={()=>onAdd(count)}>AÑADIR AL CARRITO</button> */}

</div>







{/* <p>FECHA DEL ULTIMO CLICK :{date}</p> */}

</div>

)

}

export default ItemCount