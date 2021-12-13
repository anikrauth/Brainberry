import FeaturedSection from "../Components/FeaturedSection";
import Slider from "../Components/HeroSlider/index";
import Services from "../Components/Services";
import { Link } from "react-router-dom";
import './home.css';
import Pricing from "../Components/Pricing";
import BlogSection from "../Components/BlogSection";

const imgOne = 'https://cosmatherapy.co.uk/wp-content/uploads/2021/08/Slide_2-removebg-preview.png';

export default function Home() {
    return (
        <>
            <Slider />
            <FeaturedSection />
            <Services />
            {/* elevateCosma */}
            <div className="elevateCosma">
                <div className="row container m-auto">
                    <div className="col-lg-8">
                        <div className="elevateContent">
                            <h1>Elevate your search with COSMA</h1>
                            <p className="contentOne" >Intelligently search and target the right opportunities with advanced search filters, analysis tools, and company alerts.</p>
                            <p className="contentTwo">Already have an account? <span><Link to="/login"><a className="log">Log in</a></Link></span></p>
                            <Link to="/login"><a className="getStarted">Get Started</a></Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="elevateImage">
                            <img src={imgOne} alt="ssd" />
                        </div>
                    </div>
                </div>
            </div>
            {/* elevateCosma */}
            <Pricing />
            {/* contact us end */}
            <div className="ContactUs">
                <div className="row container m-auto text-center">
                    <div className="col-lg-8">
                        <div className="ContactUsContent">
                            <h1>Start your journey with us now</h1>
                            <p>Contact us for more information</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/contact"><a className="getStarted">Contact us</a></Link>
                    </div>
                </div>
            </div>
            {/* contact us end */}
            {/* Blog start */}
            <div className="BlogWraper">
                <div className="container">
                    <h1 className="blogHeader">Our Blog</h1>
                    <BlogSection />
                </div>
            </div>
            {/* Blog end */}
        </>
    )
}