const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport')
const cors = require('cors')
const user = require('./routes/api/api-routes')

const app = express()
const PORT = process.env.PORT || 4001
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

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})

