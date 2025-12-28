const express= require('express')
const cors=require('cors')
const userRoutes=require('./routes/userRoutes')
require("dotenv").config();
const User = require('./models/User');
const connectDB = require("./config/db");


const app=express()



app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*'
}));
app.use(express.json())
connectDB()
app.get('/health',(req,res)=>{
    res.status(200).send("Healthy")
})

app.use('/users',userRoutes)


app.listen(3000,()=>{
    console.log('running')
})

