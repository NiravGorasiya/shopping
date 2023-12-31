import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductData } from '../data/ProductData';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <Container>
            <Row>
                {ProductData?.map((product) => (
                    <Fragment key={product.id}>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mb-2' key={product.id}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Title>{product.price}</Card.Title>
                                    <Link to={product.link}><Button variant="primary">Shop now</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fragment>
                ))}
            </Row>
        </Container>
    )
}

export default Product