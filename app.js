import pluralize from 'pluralize'
import express from 'express'
import fs from 'fs'
const app = express();

app.get('/', async (req, res) => {
  res.type('text/html')
  let fileContent = await fs.readFileSync('index.html', 'utf8')
  res.send(fileContent)
})

app.get('/style.css', async (req, res) => {
  res.type('css');
  let fileContent = fs.readFileSync('style.css', 'utf8')
  res.send(fileContent)
})

app.get('/index.js', async (req, res) => {
  res.type('js');
  let fileContent = fs.readFileSync('index.js', 'utf8')
  res.send(fileContent)
})

app.get('/api/getTime', async (req, res) => {
  res.type('text/plain')
  res.send(new Date().toLocaleTimeString())
})

app.get('/api/checkWord', async (req, res) => {
  res.type('text/plain')
  let word = req.query.word
  let result = pluralize(word)
  res.send(result)
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})