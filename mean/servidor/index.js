const express=require('express');
const conectarDB = require('./config/db');

// Crear servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000,()=>{
    console.log("Servidor funcionando correctamente")
})