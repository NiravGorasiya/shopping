import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductData } from '../../data/ProductData';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./styles.scss"
import { Search, Bag, Cart } from 'react-bootstrap-icons';

const Product = () => {
    return (
        <Container>
            <div className='text-center'>
                <div className='section-title'>
                    <span className='sub-title'>Check our All products</span>
                    <h2>Our products</h2>
                </div>
            </div>
            <div className='text-center'>
                <div className='product-filter'>
                    <ul>
                        <li className='filter active'>All</li>
                        <li className='filter'>Sale</li>
                        <li className='filter'>Bestseller</li>
                        <li className='filter'>Featured</li>
                    </ul>
                </div>
            </div>
            <div className='product_item'>
                <Row>
                    {ProductData?.map((product) => (
                        <Fragment key={product.id}>
                            <Col md={3} xs={6}>
                                <div className='product-grid'>
                                    <div className='product-image'>
                                        <ul className='social'>
                                            <li><Link to={product.link}><Search color='blue' /></Link></li>
                                            <li><Link to={product.link}><Bag /></Link></li>
                                            <li><Link to={product.link}><Cart /></Link></li>
                                        </ul>
                                        <span className='product-new-label'>-20%</span>
                                        <Card className='mb-2' key={product.id}>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Title>{product.price}</Card.Title>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <ul className='rating'>
                                        <li>sd</li>
                                    </ul>

                                </div>
                            </Col>
                        </Fragment>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default Product