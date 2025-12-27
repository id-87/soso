const express= require('express')
const cors=require('cors')
const app=express()
app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*'
}));

app.get('/health',(req,res)=>{
    res.status(200).send("Healthy")
})

app.listen(3000,()=>{
    console.log('running')
})

