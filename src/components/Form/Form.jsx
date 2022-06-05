
import "./Form.css"


function Form() {
  return (
    <div className="contenedorFormulario">
           <form action="">
        <div className="row">
         
          <div className="col-100">
            <input  type="text" placeholder="Nombre" className="w-100 input" />
          </div>

       
          <div className="col-75">
            <input type="text" placeholder="Apellido" className="w-100 input" />
          </div>

          <div className="col-75">
            <input type="text" placeholder="Celular" className="w-100 input" />
          </div>

          <div className="col-75">
            <input type="text" placeholder="Domicilio" className="w-100 input" />
          </div>

      
          <div className="col-75">
            <input type="email" placeholder="Email" className="w-100 input" />
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default Form;
