import express from 'express';
import cors from 'cors';
//importamos la coneccion a la DB
import db from './database/db.js';
//importo el enrutador 

import blogRoutes from './routes/routes.js'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)
try {
    await db.authenticate()
    console.log('Coneccion exitosa a la DB')
} catch (error) {
    console.log (`El error de conexion es : ${error}`)
    
}
/*
app.get('/',(req,res)=>{
    res.send('HOLA MUNDO');
}) 
*/
app.listen(8000,()=>{
    console.log('Server up ronning in http://localhost:8000/')

})



