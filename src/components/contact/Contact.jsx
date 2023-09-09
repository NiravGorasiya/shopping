import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Styles.scss"
import { Map } from 'react-bootstrap-icons'

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col md={6} lg={6}>
                    <div className='contact_frm_area text-left'>
                        <h3>Get in Touch</h3>
                        <form>
                            <div className='form-row'>
                                <div className='form-group col-sm-6'>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className='form-group col-sm-6'>
                                    <input type="text" className='form-control' placeholder='Enter a name' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' placeholder='Subject' />
                            </div>
                            <div className='form-group'>
                                <textarea placeholder='messages' className='form-control'></textarea>
                            </div>
                            <div className='input-area submit-area'>
                                <button className='btn border-btn' type='submit'>send message</button>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='contact-info'>
                        <h3>Contact Info</h3>
                        <p className='subtitle'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className='single_info'>
                            <div className='con_icon'>
                                <Map />
                            </div>
                            <p>
                                201 radheshyam
                                <br />
                                surat gujarat
                            </p>
                        </div>
                        <div className='single_info'>
                            <div className='con_icon'>
                                <Map />
                            </div>
                            <p>
                                Phone:+772-607-0042
                                <br />
                                Fax:+772-607-0042
                            </p>
                        </div>
                        <div className='single_info'>
                            <div className='con_icon'>
                                <Map />
                            </div>
                            <p>
                                niravgorasiya10@gmail.com
                                <br />
                                niravgorasiya10@gmail.com
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact