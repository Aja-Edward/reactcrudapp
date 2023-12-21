import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @desc fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc   Fetch single product by Id
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
  // const product = products.find((p) => p._id === req.params.id)
  // res.status(404).json({ message: 'Product not found' })
})

export { getProducts, getProductById }
