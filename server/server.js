require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const userCtrl = require('./controllers/userCtrl')
const feelingsEntriesCtrl = require("./controllers/feelingsEntriesCtrl")


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

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
app.post("/api/auth/register", userCtrl.register);
app.post("/api/auth/login", userCtrl.login);
app.get("/api/auth/me", userCtrl.getUser);
app.post("/api/auth/logout", userCtrl.logout);

//feelings-entries endpoints
app.get('/api/feelings-emojis', feelingsEntriesCtrl.getFeelingsEmojis)
app.get('/api/feelings-entries/:id', feelingsEntriesCtrl.getUserFeelingsEntries)
app.post('/api/feelings-entries', feelingsEntriesCtrl.createUserFeelingsEntry)
app.delete('/api/feelings-entries/:id', feelingsEntriesCtrl.deleteUserFeelingsEntry)





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