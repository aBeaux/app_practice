import React from "react"
import {Modal, Button} from "react-bootstrap"



const CarritoModal=(props)=>{
    const {
        show,
        onHide,
        total,
        handlePagar
    }=props;
    
    return <Modal 
    show={show}
    onHide={onHide}> 
    <Modal.Header closeButton>
        <Modal.Title>Total</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
        <h1> ${total}</h1>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Cancelar </Button>
        <Button variant="succes" onClick={(event)=>handlePagar(total)}>Pagar</Button>
    </Modal.Footer>
    
    </Modal>
}

export default CarritoModal;