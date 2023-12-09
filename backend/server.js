// First console.log('Hello World')

// 2nd set up the express sever
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import products from './data/products.js'
// const port = 5000
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

// 3RD fetch the data from backend to frontend

app.get('/api/products', (req, res) => {
  res.json(products)
})

// Here is the time to install Nodemone to avoid resarting all the time.
// Also we need to install concurrently, so we do not run frontend and backend differently

// fetch single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
app.listen(port, () => console.log(`Server is running on port ${port}...`))
