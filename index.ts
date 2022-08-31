import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 2345

const quotes = [
  {
    id: 1,
    quote: 'Either write something worth reading or do something worth writing',
    quoteName: 'Benjamin Franklin',
    age: 43,
    image:
      'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU4MDk5NzU4ODk0ODE5MDk3/franklin.jpg'
  },
  {
    id: 2,
    quote: 'The best way to predict the future is to create it',
    quoteName: 'Abraham Lincoln',
    age: 57,
    image:
      'https://www.whitehouse.gov/wp-content/uploads/2021/01/16_abraham_lincoln.jpg'
  },
  {
    id: 3,
    quote: 'That which does not kill us makes us stronger.',
    quoteName: 'Friedrich Nietzsche',
    age: 54,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg'
  },
  {
    id: 4,
    quote: 'When the going gets tough, the tough get going.',
    quoteName: 'Joe Kennedy',
    age: 63,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Joseph_P._Kennedy%2C_Sr._1938.jpg'
  },
  {
    id: 5,
    quote: 'You only live once, but if you do it right, once is enough.',
    quoteName: 'Mae West',
    age: 60,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/fd/Mae_West_LAT.jpg'
  },
  {
    id: 6,
    quote: 'The best revenge is massive success.',
    quoteName: 'Frank Sinatra',
    age: 72,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg/1200px-Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg'
  }
]

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
  res.send(quotes)
})

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}/`)
)

app.get(`/randomQuote`, (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  res.send(randomQuote)
})
