
const Service=require("../Service/Service")

exports.getComidas=(req,res)=>{
    Service.getComidas(req, res)
}

exports.getCarrito=(req, res)=>{
    Service.getCarrito(req,res)
}

exports.postCarrito=(req, res)=>{
    
    Service.postCarrito(req,res)
}
exports.deleteCarrito=(req, res)=>{
    Service.deleteCarrito(req, res)
}