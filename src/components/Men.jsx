import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { menData } from '../data/ProductData';
import { Link } from 'react-router-dom';

const Men = () => {
    return (
        <Container>
            <Row>
                {menData?.map((product, index) => (
                    <Fragment key={index}>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mb-2'>
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

export default Men