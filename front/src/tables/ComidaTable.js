import { Button } from "react-bootstrap";
import {Card} from "react-bootstrap"

function TablaBody(props){
    const {data}=props;

return data.data.map((item)=>{
    
    return(
        <div className="col-lg-2 col-md-2 col-sm-6">
            <Card>
                
                    <h2>{item.nombre}</h2>
                    <h3>Precio:${item.precio}</h3>
                    <Button onClick={(event)=> data.handleComida(event, item)}> Ver </Button>
              
                
            </Card>
        </div>
  
  
    );
})
    }
   
   function TablaComidas(props){

        return (
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-o"></div>
                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12">
                    <div className="row">
        <TablaBody data={props}/>
        </div>

        </div>
        <div className="col-lg-2 col-md-2 col-sm-1 col-xs-0"></div>
        </div>
        )
    }

    export default TablaComidas;

    