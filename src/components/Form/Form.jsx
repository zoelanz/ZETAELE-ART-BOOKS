import "./Form.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Form() {
  const { purchaseOrder } = useContext(CartContext);

  return (
    <div className="contenedorFormulario">
      <form action="">
        <div className="row">
          <div className="col-100">
            <input
              required
              id="formName"
              type="text"
              placeholder="Nombre*"
              className="w-100 input"
            />
          </div>

          <div className="col-75">
            <input
              required
              id="formSurname"
              type="text"
              placeholder="Apellido*"
              className="w-100 input"
            />
          </div>

          <div className="col-75">
            <input
              required
              id="formPhone"
              type="number"
              placeholder="Celular"
              className="w-100 input"
            />
          </div>

          <div className="col-75">
            <input
              required
              id="formAddress"
              type="text"
              placeholder="Domicilio*"
              className="w-100 input"
            />
          </div>

          <div className="col-75">
            <input
              required
              id="formEmail"
              type="email"
              placeholder="Email*"
              className="w-100 input"
            />
          </div>
          <div>
          <p className="required">*Obligatorio</p>
          <Button
            // type="submit"
            onClick={(e) => purchaseOrder(e)}
            className="modalButton"
            variant="secondary"
          >
            FINALIZAR COMPRA
          </Button>
        

          </div>

         
        </div>
      </form>
    </div>
  );
}

export default Form;
