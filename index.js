const express = require('express')
const app = express()
const port = 3000

app

  .get('/', (req, res) => res.send('Hello World!'))
  .use('/about', about)
  .use('/login', login)
  .use('/profiles', profiles)
  .use('/users', users)
  .get('*', (req, res) => res.status(404).send('The page you are looking for doesn\'t exist. Better luck next time!'))

  .listen(port, () => console.log(`Example app listening on port ${port}!`))

function about (req, res) {
  res.send('about')
}

function login (req, res) {
  res.send('login')
}

function profiles (req, res) {
  res.send('profiles')
}

function users (req, res) {
  res.send('users')
}
