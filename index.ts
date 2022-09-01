import express from 'express'
import cors from 'cors'
import { quotes} from './data'
import { quotesAuthor } from './data'

const app = express()
app.use(cors())
const port = 2345

app.get('/', (req, res) => {
  res.send(`
  <h1>Hello World</h1>
  <a href="/quotes">Quotes</a>
  `)
})

app.get('/quotes/:id', (req, res) => {
  const id = Number(req.params.id)
  const match = quotes.find(quote => quote.id === id)

  if (!match) {
    res.status(404).send({ error: 'Not found' })
  } else {
    res.send(match)
  }
})

app.get('/quotes', (req, res) => {
  let quotesToSend = quotes.map(quote => {
    let quoteAuthor = quotesAuthor.find(author => author.id === quote.authorId) 
    return { ...quote , quoteAuthor }
  })
  res.send(quotesToSend)
})

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}/`)
)

app.get(`/randomQuote`, (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  res.send(randomQuote)
})
