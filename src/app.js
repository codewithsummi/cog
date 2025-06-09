import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import categoryRoutes from './routes/category.route.js'
import dbConnect from './db.js';
const app=express();
dbConnect();
 app.use(cors());//allow cors 
 app.use(express.json());//deal with json data to parse
// // const statisDIR=`${__dirname}/uploads`;
 app.use(express.static('uploads'));
// //call routes 
 app.use("/api/user",userRoutes);
 app.use("/api/product",productRoutes);
app.use("/api/category",categoryRoutes);

app.use((req,res)=>{
    res.status(404).json({"err":1,"msg":"No route found"})
})
export default app;