const express = require('express')


const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static('public'));

//Rutas

app.get('/',(Req,Res)=>{
    Res.sendFile(path.join(__dirname,'views','index.html'));
})
app.get('/about',(Req,Res)=>{
    Res.sendFile(path.join(__dirname,'views','about.html'));
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname ,'views','404.html'))
});


//Iniciar el servidor 

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
})