const express=require("express")
const routes=require("./src/Routes/Routes")
const cors=require("cors")
require("dotenv").config();

const app=express();

app.use(express.json())

  

app.use("/api", cors(), routes)



const PORT=process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
})