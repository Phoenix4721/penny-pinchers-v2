const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport')
const cors = require('cors')
const user = require('./routes/api/api-routes')
const io = require('socket.io')() 
const socketDB = require('./config/chat.js')

const app = express()
const PORT = process.env.PORT || 7001
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())


app.use(user)

io.on('connection', client => {

  console.log('connected' + client.id)
  client.emit('assign-socket', client.id)
  // client.broadcast.emit('assign-remote', client.id)

  // retrieve past logs from database 

  client.on('send-chat-to-server', function(data) {
      console.log('data' + data)
      // io.to(data.remoteUser).emit('send-chat-to-client', data.message)
      io.emit('send-chat-to-client', data.message)
  })

  client.on('disconnect', function(reason) {
      if (reason === 'io server disconnect') {
          client.connected()
      }
      
      // save chat to database 
      console.log('user disconected' + client.id)
  })

})

io.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})

