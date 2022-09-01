import express from 'express'
import cors from 'cors'
import { quotes} from './data'
import { quotesAuthor } from './data'

const app = express()
app.use(cors())
app.use(express.json())
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

app.get(`/randomQuote`, (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  res.send(randomQuote)
})

app.get('/quotes', (req, res) => {
  let quotesToSend = quotes.map(quote => {
    let quoteAuthor = quotesAuthor.find(author => author.id === quote.authorId) 
    return { ...quote , quoteAuthor }
  })
  res.send(quotesToSend)
})

app.post ('/quotes', (req, res) => {
  const newQuote = {
    id : quotes[quotes.length - 1].id + 1,
    quote : req.body.quote,
    authorId : req.body.authorId
  }
  quotes.push(newQuote)
  res.send(newQuote)
})

app.get ('/quotesAuthor', (req, res) => {
  res.send(quotesAuthor)
})

app.post ('/quotesAuthor', (req, res) => {
  const newAuthor = {
    id : quotesAuthor[quotesAuthor.length - 1].id + 1,
    authorName : req.body.authorName,
    authorAge : req.body.authorAge,
    image : req.body.image
  }
  quotesAuthor.push(newAuthor)
  res.send(newAuthor)
})

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}/`)
)


