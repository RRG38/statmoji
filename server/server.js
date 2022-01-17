require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authCtrl')
// const authenticateUser = require('./middlewares/authenticateUser')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

app.use(cors())




//auth endpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.delete('/api/auth/logout', authCtrl.logout)







massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})
.then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`DB up & Server running on ${SERVER_PORT}`))
})
.catch(err => console.log(err))