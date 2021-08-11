let dataComidas=require("../DB/comidas.json")
let dataCarrito=require("../DB/carrito.json")

exports.getComidas=(req, res)=>{
    res.send(dataComidas)
}

exports.getCarrito=(req,res)=>{
    res.send(dataCarrito)
}

exports.postCarrito=(req, res)=>{
    console.log(req.body)
    const post=req.body;
    let id=null;
    const ids=dataCarrito.map(data=>data.id)
    if (dataCarrito.length<1){
        id=1

    }else{
        maxId = Math.max(...ids)
        id = maxId + 1;
    }
    const newData={
      id:id,
      nombre:post.nombre,
      precio:post.precio
  }
  dataCarrito=[...dataCarrito, newData]
  res.json(newData)

}

exports.deleteCarrito=(req, res)=>{
    const id=Number(req.params.id)
    dataCarrito=dataCarrito.filter(carrito=> carrito.id!=id)
    res.json(req.body)


}