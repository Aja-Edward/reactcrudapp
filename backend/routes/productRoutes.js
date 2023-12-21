import express from 'express'
const router = express.Router()
// import products from '../data/products.js'
// import asyncHandler from '../middleware/asyncHandler.js'
// import Product from '../models/productModel.js'
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products)
//   })
// )

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     if (product) {
//       return res.json(product)
//     }
// const product = products.find((p) => p._id === req.params.id)
//     res.status(404).json({ message: 'Product not found' })
//   })
// )

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


export default router
