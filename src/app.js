const express = require('express')
const morgan = require('morgan')
const getAllFiles = require('./services/getAllFiles')
const config = require('./config')

const app = express()
const port = process.env.APP_PORT || 4000
const prefix = config.picturesPath

app.use(morgan('dev'))

app.get('/images', (req, res) => {
  const files = getAllFiles(prefix).map((x) => x.replace(prefix, ''))
  const images = files.filter((f) => f.endsWith('.jpg'))
  res.json(images)
})

app.use(express.static('public'))
app.use(express.static(prefix))
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
