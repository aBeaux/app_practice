import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import CarritoTable from "../tables/CarritoTable"
import CarritoModal from "../modals/CarritoModal";





const carritoInit=[
    {"id":"",
    "nombre":"",
    "precio":""
}
]

function Carrito(props){
    const [carritoList, setCarritoList]=useState(carritoInit)
    const [comprar, setComprar]=useState(false)
    const [openModal, setOpenModal]=useState(false)
    const [total, setTotal]=useState(0)
    
    useEffect(async()=>{
        await getCarrito()
    },[])


    const getCarrito=async()=>{
        const data=await axios.get("http://localhost:8080/api/carrito")
        .then (response => {
    
        setCarritoList(response.data)
        if (response.data.length>0){
            setComprar(true)
        }else{
            setComprar(false)
            }
                        //console.log(data.data)
            }).catch(error => {
            console.log(error); })
         } 

        

    const handleDelete=async(e, id)=>{
        await axios.delete(`http://localhost:8080/api/carrito/${id}`)
        .then (response=>{
            //console.log(response)
            const newData=carritoList.filter(data=>data.id!==id)
            //console.log(newData)
            setCarritoList(newData)
            getCarrito()
        })
    }

    const handleSubmit=(comprar,total)=>{
        if (comprar){
            handleOpenModal(total)
        }else{
            agregarComida()
            }
         }
       
    const agregarComida=()=>{
        props.history.push("/productos/comida")
    }

    const handleOpenModal=(total)=>{
        setOpenModal(true);
        setTotal(total)
    }

    const handleCloseModal=()=>{
        setOpenModal(false)
    }

    const handlePagar=(total)=>{


    }

    const CarritoVacio=()=>{
        let elem=""
        if (comprar){
           elem=null;
                 
        }else{
            elem=<h3>El carrito esta vacio</h3>
        }
        return elem; 
    }
    return (
    <>
    <h1 align="center" > Carrito </h1>

    <CarritoTable
    handleSubmit={handleSubmit}
    data={carritoList}
    handleDelete={handleDelete}
    comprar={comprar}
    CarritoVacio={CarritoVacio}
    agregar={agregarComida}
    />

    <CarritoModal
    total={total}
    show={openModal}
    handlePagar={handlePagar}
    onHide={handleCloseModal}

    />
    </>

     )
    }

export default Carrito;