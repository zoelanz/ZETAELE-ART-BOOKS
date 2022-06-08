import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/Form";
import "./CartModal.css";
import {FiHeart} from "react-icons/fi"
import {GrClose} from "react-icons/gr"

function CartModal({ show, handleShow, handleClose }) {
  return (
    <>
      <Button className="buttonEndPurchase" variant="primary" onClick={handleShow}>
        Finalizar compra!
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="modalContainer "
      >
        <Modal.Header className="modalHeader text-center" closeButton>
          <Modal.Title className="modalTitle w-100">
            Ultimo paso para tener tu libro con vos! <FiHeart size={25}/>
          </Modal.Title>
          <GrClose onClick={handleClose} size={30} className="closeButton"/>
        </Modal.Header>

          <Modal.Body className="modalBody">
           <Form />
          </Modal.Body>
      

        <Modal.Footer className="modalFooter">
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
