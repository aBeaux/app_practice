import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ComidaTable from "../tables/ComidaTable"
import ComidaModal from "../modals/ComidaModal"
import axios from "axios"


const ini=[{
    "id":"",
    "nombre":"",
    "precio":""
}]


function Comida(props){
    const[comidasList, setComidasList]=useState(ini)
    const[comidasData, setComidasData]=useState({})
    const[openModal, setOpenModal]=useState(false)
    const [isAdd, setIsAdd]=useState(false)

    useEffect(async()=>{
        await getComida()
    },[] )

    const getComida=async()=>{
        const data=await axios.get("http://localhost:8080/api/comidas")
        .then (response => {
            setComidasList(response.data)
        }).catch(error => {
             console.log(error);
        });
        


      }

    function handleOpenModal(isAdd, data){
        if (isAdd){
            setIsAdd(true);
        }
        setOpenModal(true);
        setComidasData(data)
        console.log(data)

       }
       
    function handleCloseModal(){
        setOpenModal(false);
        setComidasData({});
        setIsAdd(false);

    }


    function handleComida(event, data){
        event.preventDefault();
        handleOpenModal(false, data);
        console.log("data:"+data) 
    }

    const handleAgregar=async (data)=>{
        await axios.post("http://localhost:8080/api/carrito", data )
        .then(response=> {
        console.log(response.data)
    }).catch(error => {
        console.log(error);
    });

            
            
           }
           
           


    function handleSubmit(event, data){
        event.preventDefault();
        handleAgregar(data)
        console.log(data)
        handleCloseModal()
    }
    
    return  (

        <>
        <h1 align="center">Comidas</h1>
        <ComidaTable 
        data={comidasList}
        handleComida={handleComida}
        
        />
        
        <ComidaModal
        comidasData={comidasData}
        show={openModal}
        onHide={handleCloseModal}
        handleSubmit={handleSubmit}
        isAdd={isAdd}
        comidasList={comidasList}
        />
       </>
    )
}






export default Comida;