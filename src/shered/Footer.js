import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
           <footer className="footer-area">
            <div className="container-fulid">
             
              
                <div className="footer-main">
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>QUICK LINKS</h3>
                                <ul className='f_list'>
                                    <li><Link to="">about</Link></li>
                                    <li><Link to="">blog</Link></li>
                                    <li><Link to="">faq</Link></li>
                                    <li><Link to="">contact</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>CATEGORIES</h3>
                                <ul className='f_list'>
                                    <li><Link to="">Electronics</Link></li>
                                    <li><Link to="">shoes</Link></li>
                                    <li><Link to="">watches</Link></li>
                                    <li><Link to="">clothes</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>STORE</h3>
                                <ul className='f_list'>
                                    <li><Link to="">Affiliate</Link></li>
                                    <li><Link to="">Sale</Link></li>
                                    <li><Link to="">Discount</Link></li>
                                    <li><Link to="">All Collection</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>QUICK LINKS</h3>
                                <ul className='f_list'>
                                    <li>If you have any question. please contact us<Link to="mailto:demo@example.com" className='f_mail'> demo@example.com</Link></li>
                                    <li><Link to=""><i className="fa-solid fa-location-dot"></i></Link>Your address goes here. 123, Address.</li>
                                    <li><Link to=""><i className="fa-solid fa-phone"></i></Link>+ 0 123 456 789</li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="footer-bottom">
                    <p className="copyright">© 2022 create by <i className="fa fa-heart"></i> by <Link to="/"> TIXLY</Link></p>
                    
                </div>
              
            </div>
        </footer>
        </>
    );
};

export default Footer;