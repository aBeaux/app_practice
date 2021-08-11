import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";

function Menu(){
   
    return(
        <>
        <Navbar bg="danger" variant="dark">
      <Navbar.Brand>  Logo
        </Navbar.Brand> 
        <Nav>
        <Nav.Link as={Link} to="/"> Home</Nav.Link>
        <NavDropdown title="Productos">
          <NavDropdown.Item href="/productos/comida">
              Comida
          

          </NavDropdown.Item>
      

      </NavDropdown>
        
    
    
        
   
      <Nav.Link as={Link} to="/carrito"> Carrito </Nav.Link>

     
 
     
      

     



     
</Nav>
</Navbar>
</> )
}

export default Menu;