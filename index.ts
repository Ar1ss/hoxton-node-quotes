import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 2345

const quotes = [
  {
    id: 1,
    quote: 'Either write something worth reading or do something worth writing',
    quoteName: 'Benjamin Franklin'
  },
  {
    id: 2,
    quote: 'The best way to predict the future is to create it',
    quoteName: 'Abraham Lincoln'
  },
  {
    id: 3,
    quote: 'That which does not kill us makes us stronger.',
    quoteName: 'Friedrich Nietzsche'
  },
  {
    id: 4,
    quote: 'When the going gets tough, the tough get going.',
    quoteName: 'Joe Kennedy'
  },
  {
    id: 5,
    quote: 'You only live once, but if you do it right, once is enough.',
    quoteName: 'Mae West'
  },
  {
    id: 6,
    quote: 'The best revenge is massive success.',
    quoteName: 'Frank Sinatra'
  },
  {
    id: 7,
    quote: 'Life is like a box of chocolates. You never know what you’re going to get.',
    quoteName: 'Forrest Gump'
  },
]

app.get('/', (req, res) => {
  res.send(`
  <h1>Hello World</h1>
  <a href="/quotes">Quotes</a>
  `)
  
})

app.get('/quotes', (req, res) => {
    res.send(quotes)
  })
  

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}/`)
)
