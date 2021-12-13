import { Link } from 'react-router-dom'
import './pricing.css'

export default function Pricing() {
    return (
        <div className='PricingWrap'>
            <div className="container">
                <section className="text-center">
                    <h4 className="mb-4 pricingTitle"><strong>Learn More About COSMA Packages</strong></h4>

                    <div className="row gx-lg-5">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card pricingCard">

                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0 pricingHeadBtnBgOne subBtn">Subscription</h5>
                                </div>

                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">2 - 100 Users</li>
                                        <li className="list-group-item">Quarterly and Annual Subscription</li>
                                        <li className="list-group-item">Auto-Subscription until cancelled</li>
                                        <li className="list-group-item">24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-white py-3">
                                    <Link to="/checkout">
                                        <a type="button" className="pricing-btn-info pricing-btn-info-One">Subscribe</a>
                                    </ Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card pricingCardTwo">

                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0 pricingHeadBtnBgTwo subBtn">Licensing</h5>
                                </div>

                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Unlimited Users</li>
                                        <li className="list-group-item">Annual Licensing</li>
                                        <li className="list-group-item">COSMA Platform Integration</li>
                                        <li className="list-group-item">COSMA Training to all Staff</li>
                                        <li className="list-group-item">24/7 Customer Support</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-white py-3">
                                    <Link to="/checkout">
                                        <a type="button" className="pricing-btn-info pricing-btn-info-Two">Subscribe</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card pricingCardThree">

                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0 pricingHeadBtnBgThree subBtn">Distribution</h5>
                                </div>

                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Users Based Pricing</li>
                                        <li className="list-group-item">Renewal Contract</li>
                                        <li className="list-group-item">Discounted Contracts</li>
                                        <li className="list-group-item">COSMA Training to all Staff</li>
                                        <li className="list-group-item">24/7 Customer Support</li>
                                    </ul>
                                </div>

                                <div className="card-footer bg-white py-3">
                                    <Link to="/checkout">
                                        <a type="button" className="pricing-btn-info pricing-btn-info-Three">Subscribe</a>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>
    )
}