const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport')
const cors = require('cors')
const user = require('./routes/api/api-routes')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server) 
const chatDB = require('./config/chatDB.js')

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

  // console.log('connected' + client.id)

  io.to(client.id).emit('assign-socket', client.id)

  // client.broadcast.emit('assign-remote', client.id)

  client.on('log-user-info', function(data) {
    // console.log(data)
    chatDB.addSocket(data)
  })

  client.on('request-friends-list', function() {
    //console.log('friends requested')
    const friends = Promise.resolve(chatDB.listFriends())
      friends.then(value => client.emit('send-friends-list', value))
  })
  
  // retrieve past logs from database 

  client.on('switch-chat', function(user) {
    const newUser = Promise.resolve(chatDB.findSocket(user.remoteUser))
      newUser.then(value => {
        // console.log('remote ' + value[0].socket)
        // console.log('local' + user.localUser)
        io.to(user.localUser).emit('update-chat', value)
      })
  })

  client.on('send-chat-to-server', function(data) {
      // console.log(data)
      io.to(data.remoteUser).emit('send-chat-to-client', data.message) // add display names 
      io.to(data.localUser).emit('send-chat-to-client', data.message)
      // io.emit('send-chat-to-client', data.message)
  })

  client.on('disconnect', function(reason) {
      if (reason === 'io server disconnect') {
          client.connected()
      }
      chatDB.delSocket(client.id)
      // save chat to database 
      // console.log('user disconected' + client.id)
      //search database for client.id and delete
  })

})

server.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})