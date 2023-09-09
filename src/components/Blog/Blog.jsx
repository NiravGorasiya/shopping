import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './styles.scss'
import { Eye, Person, Chat } from 'react-bootstrap-icons';


const Blog = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='single_blog'>
                        <div className='single_blog_img'>
                            <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'></img>
                            <div className='blog_date text-center'>
                                <div className='bd_date'>09</div>
                                <div className='bd_month'>Aug</div>
                            </div>
                        </div>
                        <div className='blog-content'>
                            <ul className='meta-data'>
                                <li><Person color='blue' className='me-1' size={15} />Admin</li>
                                <li><Chat color='blue' className='me-1' size={15} />comments</li>
                                <li><Eye color='blue' className='me-1' size={15} />views</li>
                            </ul>
                            <h4 className='post-title'>Proin in blandit lacus. Nam pellentesque</h4>
                            <p>Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ....</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='single_blog'>
                        <div className='single_blog_img'>
                            <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'></img>
                            <div className='blog_date text-center'>
                                <div className='bd_date'>09</div>
                                <div className='bd_month'>Aug</div>
                            </div>
                        </div>
                        <div className='blog-content'>
                            <ul className='meta-data'>
                                <li><Person color='blue' className='me-1' size={15} />Admin</li>
                                <li><Chat color='blue' className='me-1' size={15} />comments</li>
                                <li><Eye color='blue' className='me-1' size={15} />views</li>
                            </ul>
                            <h4 className='post-title'>Proin in blandit lacus. Nam pellentesque</h4>
                            <p>Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ....</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='single_blog'>
                        <div className='single_blog_img'>
                            <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'></img>
                            <div className='blog_date text-center'>
                                <div className='bd_date'>09</div>
                                <div className='bd_month'>Aug</div>
                            </div>
                        </div>
                        <div className='blog-content'>
                            <ul className='meta-data'>
                                <li><Person color='blue' className='me-1' size={15} />Admin</li>
                                <li><Chat color='blue' className='me-1' size={15} />comments</li>
                                <li><Eye color='blue' className='me-1' size={15} />views</li>
                            </ul>
                            <h4 className='post-title'>Proin in blandit lacus. Nam pellentesque</h4>
                            <p>Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ....</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Blog