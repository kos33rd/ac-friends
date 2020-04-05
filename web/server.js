'use strict'

const path = require('path')
const express = require('express')

const port = 8000
const host = '0.0.0.0'

const app = express()
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('Express static web server is OK\n')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, host)
console.log(
  `Express static web server is up and running on http://${host}:${port}`
)
