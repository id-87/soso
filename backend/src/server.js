const {Server}=require('socket.io')
const http=require('http')
const app=require('./index')

const server=http.createServer(app)
const io=new Server(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
  }
})
require('./socket')(io)
server.listen(3000,()=>{
    console.log("Server is running through server.js")
})
