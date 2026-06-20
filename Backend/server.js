import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { urlencoded } from 'body-parser';
import { connectDB } from './config/db.js';
import dns from 'dns';
import userRouter from './routes/userRoute.js';


const app = express()
const PORT = 4000;

// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//DB
connectDB();

//ROUTES
app.use("/api/user",userRouter)
app.get('/',(req,res)=>{
    res.send("API WORKING");
})

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`);
    
})


