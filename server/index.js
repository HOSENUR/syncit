const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const userSocketMap = {}
function getAllConnectedClients(roomID) {
    return Array.from(io.sockets.adapter.rooms.get(roomID)||[]).map((socketID) => {
        return{
            socketID,
            username : userSocketMap[socketID]
        }
    })
}
io.on('connection', (socket) => {
    socket.on('join',({roomID,nickname})=>{
        userSocketMap[socket.id] = {nickname}
        socket.join(roomID)
        const client = getAllConnectedClients(roomID)

    })
})
const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
