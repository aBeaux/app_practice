import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./containers/Home";
import Carrito from "./containers/Carrito";
import Menu from "./menu/Menu";
import Comida from "./containers/Comida";

function App (){
    return (
        <>
        <Router>
        
            <Menu/>
           


        <Switch >
    
        
            <Route exact path="/" component={Home}/>
            <Route exact path="/carrito" component={Carrito}/>
            <Route exact path="/productos/comida" component={Comida}/>
        
        </Switch>
        </Router>
        </>
    )
}

export default App;