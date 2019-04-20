const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
var cors = require('cors')


app.use(cors())


// Body parser, to access `req.body`
app.use(bodyParser.json())



// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', function (req, res) {
    console.log("request!")
  if (req.body.username === 'user@user.com' && req.body.password === 'user') {
    req.session.authUser = { username: 'user@user.com', role: 'user' }
    return res.json({ username: 'user@user.com', role: 'user' })
  }
  if (req.body.username === 'admin@admin.com' && req.body.password === 'admin') {
    req.session.authUser = { username: 'admin@admin.com', role: 'admin' }
    return res.json({ username: 'admin@admin.com', role: 'admin' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})
app.listen(8000)
console.log('Server is listening on http://localhost:8000')