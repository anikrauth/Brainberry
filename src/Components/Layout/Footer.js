import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <div className='footerWrap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='footerItem'>
                            <h1>Subscribe</h1>
                            <ul>
                                <li><Link to="/brainberry">BrainBerry</Link></li>
                                <li><Link to="https://news.crunchbase.com/">News</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Subscribe to COSMA</Link></li>
                                <li>
                                    <p className='followTitle'>Follow Us</p>
                                    <ul className='socialList'>
                                        <li><Link to="facebook.com"></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footerItem'>
                            <h1>Who we are</h1>
                            <ul>
                                <li><Link to="/brainberry">Company</Link></li>
                                <li><Link to="https://news.crunchbase.com/">About us</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Blog</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Press</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footerItem'>
                            <h1>Your Details</h1>
                            <ul>
                                <li><Link to="/brainberry">My Account</Link></li>
                                <li><Link to="https://news.crunchbase.com/">Orders</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Shopping cart</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footerItem'>
                            <h1>Information</h1>
                            <ul>
                                <li><Link to="/brainberry">Create Profile</Link></li>
                                <li><Link to="https://news.crunchbase.com/">Terms of Service</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Pricing</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Helpful Links</Link></li>
                                <li><Link to="https://www.crunchbase.com/login">Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copyRight'>
                    <ul className='text-center d-flex justify-content-center align-items-stretch'>
                        <li><Link to="https://about.crunchbase.com/terms-of-service/">Terms of services</Link></li>
                        <li><Link to="https://about.crunchbase.com/terms-of-service/privacy-policy/">Privacy Policy</Link></li>
                        <li><Link to="https://www.crunchbase.com/sitemap">Site map</Link></li>
                        <li><p>© 2021 BrainBerry Ltd. All Rights Reserved. </p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}