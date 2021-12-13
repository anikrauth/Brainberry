import './blogSection.css';



import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../HeroSlider/swiper-bundle.min.css";

import "./blogSection.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { Link } from 'react-router-dom';



SwiperCore.use([Pagination, Navigation]);


// end

const data = [
    {
        id: 1,
        img: 'https://www.creative-tim.com/blog/content/images/size/w750/wordpress/2021/06/web_developer_portfolio_website.jpg',
        category: 'Education',
        title: 'How to Build Your First Web Developer Portfolio Website'
    },
    {
        id: 2,
        img: 'https://www.creative-tim.com/blog/content/images/size/w750/wordpress/2021/06/web_developer_portfolio_website.jpg',
        category: 'sssss',
        title: 'How to Build Your First Web Developer Portfolio Website'
    },
    {
        id: 3,
        img: 'https://www.creative-tim.com/blog/content/images/size/w750/wordpress/2021/06/web_developer_portfolio_website.jpg',
        category: 'Education',
        title: 'How to Build Your First Web Developer Portfolio Website'
    },
    {
        id: 4,
        img: 'https://www.creative-tim.com/blog/content/images/size/w750/wordpress/2021/06/web_developer_portfolio_website.jpg',
        category: 'Education',
        title: 'How to Build Your First Web Developer Portfolio Website'
    },
]



export default function BlogSection() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }}
                className="BlogSlider"
            >

                {data.map(item => (

                    <SwiperSlide>
                        <div key={item.id} className='blogItem'>
                            <div className='blogItemHeader'>
                                <img src={item.img} alt="sss" />
                                <div className='cateWrap'>
                                    <h1>{item.category}</h1>
                                </div>
                            </div>
                            <div className='blogItemFooter'>
                                <Link to="/single"><h1>{item.title}</h1></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    );
}