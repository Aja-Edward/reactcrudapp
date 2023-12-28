// import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
// import axios from 'axios'

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products')
  //     console.log(data)

  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])
  // return (
  //   <>
  //     <h1>Latest Products</h1>
  //     <Row>
  //       {products.map((product) => (
  //         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
  //           <Product product={product} />
  //         </Col>
  //       ))}
  //     </Row>
  //   </>
  // )
  return (
    <>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
