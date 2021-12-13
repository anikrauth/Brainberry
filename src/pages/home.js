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
            <section class="py-9">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-4">
                            <div class="icon icon-shape icon-md bg-gradient-warning shadow-warning mx-auto text-center mb-4">
                                <i class="material-icons opacity-10">person</i>
                            </div>
                            <h3>Subscribe</h3>
                            <p>This is the paragraph where you can write more details about your product.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="col-lg-6">
                            <form method="" action="">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="input-group input-group-outline">
                                            <label class="form-label">Your Email...</label>
                                            <input class="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4 ps-0">
                                        <button type="button" class="btn bg-gradient-warning w-100">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


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