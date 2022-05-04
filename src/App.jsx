import './App.css'
import NavBar from './components/NavBar/NavBar' // importo el archivo del navbar
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/itemCount/itemCount'

function App() {

// llamo a la funcion donde cree el navbar: SE LO LLAMA ELEMENTO, llamo a las apis o fuentes externas

  return (
<div>
<NavBar/> 
{/* <ItemListContainer greeting="Hola!"/>  */}
<div className='containerGeneralContador'>
<ItemCount stock={10} initial={1}/> 
</div>
</div>
  )
}

export default App 






// === === === === === === === === //

// REACT CLASE 2

//CAMPOS DINAMICOS DE UN OBJETO

// let id="1"

// const obj={
//   nombre:"zoe",
//   apellido:"lanz",
//   ["zoe_" + id]:"zz29"
// }

//DESTRUCTURING: extraigo una propiedad del objeto en este caso extraigo nombre y apellido

// const {nombre:name, apellido,edad=28}=obj // y con name renombre nombre.. con : renombro.
// console.log(name)
// console.log(apellido)
// console.log(edad)


//Asignacion en DESTRUCTURING:

// agregue edad al objeto 

// === === === === === === === === //

// REACT CLASE 3


// COMPONENTES: UN COMPONENTE ES UNA FUNCION QUE COMIENZA CON MAYUSCULA QUE RETORNA JSX.  

// ELEMENTO: ES LA LLAMADA A LA FUNCION



