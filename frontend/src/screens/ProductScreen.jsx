import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  const { id: productId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`)
      setProduct(data)
    }
    fetchProduct()
  }, [productId])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>
            <h6>Description:</h6> {product.description}
          </ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    {' '}
                    <strong>Price:</strong>
                  </Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInstock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
                <Row>
                  <Col>Category:</Col>
                  <Col>{product.category}</Col>
                </Row>
                <Row>
                  <Col>Brand:</Col>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroup.Item>
              {product.countInstock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>
                      <FormControl
                        as='select'
                        // value={}
                      >
                        {[...Array(product.countInstock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                {}
                <Button
                  // onClick={addToCartHandler}
                  className='btn-block'
                  type='button'
                  disabled={product.countInstock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
