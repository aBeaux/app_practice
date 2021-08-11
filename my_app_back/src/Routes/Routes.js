const express=require("express")
router=express.Router()
const Controller=require("./Controller/Controller")

router.get("/comidas", Controller.getComidas)


router.get("/carrito", Controller.getCarrito)

router.post("/carrito", Controller.postCarrito)


router.delete("/carrito/:id", Controller.deleteCarrito)

module.exports=router;