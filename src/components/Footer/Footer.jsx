import React from 'react'
import "./Styles.scss"
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Pinterest } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className='footer_area'>
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="single_ftr footer-contact-info">
                                <h4 class="sf_title">Contacts</h4>
                                <ul>
                                    <li>4060 Reppert Coal Road Jackson,<br /> MS 39201 USA</li>
                                    <li>(+123) 685 78 <br /> (+064) 987 245</li>
                                    <li> contact@yoursite.com <br /> support@yoursite.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="single_ftr">
                                <h4 class="sf_title">Information</h4>
                                <ul>
                                    <li><Link to="/about" className='infomation'>About Us</Link></li>
                                    <li><Link to="/deliveryinformation" className='infomation'>Delivery Information</Link></li>
                                    <li><Link to="/privacypolicy" className='infomation'>Privacy Policy</Link></li>
                                    <li><Link to="/terms" className='infomation'>Terms & Conditions</Link> </li>
                                    <li><Link to="/contact" className='infomation'>Contact Us </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2 col-sm-6">
                            <div class="single_ftr">
                                <h4 class="sf_title">Services</h4>
                                <ul>
                                    <li><Link to="/returns" className='services'>Returns</Link></li>
                                    <li><Link to="/sitemap" className='services'>Site Map</Link></li>
                                    <li><Link to="/wishlist" className='services'>Wish List</Link></li>
                                    <li><Link to="/myaccout" className='services'>My Account</Link></li>
                                    <li><Link to="/order" className='services'>Order History</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="single_ftr">
                                <h4 class="sf_title">Join Us Newsletter</h4>
                                <div class="newsletter_form">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean lobortis  </p>
                                    <form method="post" class="form-inline">
                                        <input name="EMAIL" id="email" placeholder="Enter Your Email" class="form-control" type="email" />
                                        <button type="submit" class="btn btn-default"><i class="fa fa-paper-plane-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="ftr_btm_area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="ftr_social_icon">
                                <ul>
                                    <li>
                                        <Link to="/facebook" className='social_link'><Facebook /></Link>
                                    </li>
                                    <li>
                                        <Link to="/pinterest" className='social_link'><Pinterest /></Link>
                                    </li>
                                    <li>
                                        <Link to="/linkedin" className='social_link'><Linkedin /></Link>
                                    </li>
                                    <li>
                                        <Link to="/twitter" className='social_link'><Twitter /></Link>
                                    </li>
                                    <li>
                                        <Link to="/instagram" className='social_link'><Instagram /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <p class="copyright_text text-center">Copyright &copy; 2020 RapidShop, All rights Reserved.</p>
                        </div>

                        <div class="col-sm-4">
                            <div class="payment_mthd_icon text-right">
                                <img src="https://getmasum.com/html-preview/rapidshop/img/card.png" alt="Card" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer