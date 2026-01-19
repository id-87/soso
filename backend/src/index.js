const express= require('express')
const cors=require('cors')
const userRoutes=require('./routes/userRoutes')
const postRoutes=require('./routes/postRoutes')
require("dotenv").config();
const User = require('./models/User');
const connectDB = require("./config/db");
const authMiddleware=require('./middlewares/authMiddleware')


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
app.use('/posts',postRoutes)


module.exports=app
