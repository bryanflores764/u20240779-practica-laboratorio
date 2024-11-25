const express = require('express')

const app = express()
const PORT = process.env.PORT ||3000

app.get("/",(req,res)=>{
    res.send("Hola mundo este es mi servidor express")
})

app.listen(PORT,()=>{
    console.log(`Servidor express corriendo en http://localhost:${PORT}`)
})