import React from "react"
import {Modal, Button} from "react-bootstrap"



const ComidaModal=(props)=>{
    const {
        show,
        comidasData,
        onHide,
        handleSubmit,
    }=props;
    
    
    
    return <Modal 
    show={show}
    onHide={onHide}> 
    <Modal.Header closeButton>
        <Modal.Title>Producto</Modal.Title>

    </Modal.Header>
    <Modal.Body>
        
    <h1> {comidasData.nombre}</h1>
    <h2> Precio: ${comidasData.precio}</h2>
 
    </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Cancelar </Button>
        <Button variant="succes" onClick={(event)=>handleSubmit(event, comidasData)}>Agregar a carrito</Button>
    </Modal.Footer>
    
    </Modal>
}

export default ComidaModal;

