import {Button, Card} from "react-bootstrap"


function TablaBody(props){
    const {
        data
    }=props
    
    return( 
    
        data.data.map((item)=>{
            return(<>
            <div className="col-lg-2 col-md-2 col-sm-6">
                <Card>
                    <h2>{item.nombre}</h2>
                    <h3>Precio:${item.precio}</h3>
                    <Button variant="danger" onClick={(e)=>data.handleDelete(e, item.id)}>Eliminar</Button>
                </Card>  
            </div>
            </>
            )
        })
        )
    }

  
function TablaCarrito(props){
    const {
        comprar, data, CarritoVacio,  handleSubmit
    }=props;
    
    let total=0;
    
    for (var i=0; i<data.length; i++){
           total+=data[i].precio
           console.log(data[i].precio)
       }
       
       return ( 
            <>
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-o"></div>
                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12">
                    <div className="row">
                        <TablaBody data={props} />
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1 col-xs-0" >
                    <Card >
                        <h2><CarritoVacio/> </h2>
                        <h3 id="total" >Total: {total}  </h3>
                        <Button  variant="info" id="botonCarrito1" onClick={()=> handleSubmit(comprar,total)}>{props.comprar? "Comprar":"Agregar comida"}</Button>
                    </Card>
                </div>
            </div>
            </>)
            }

    export default TablaCarrito;