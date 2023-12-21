// First console.log('Hello World')

// 2nd set up the express sever
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
import express from 'express'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
// const port = 5000

const port = process.env.PORT || 5000

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

// 3RD fetch the data from backend to frontend

app.listen(port, () => console.log(`Server is running on port ${port}...`))
