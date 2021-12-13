
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./swiper-bundle.min.css";

import "./slider.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
// install Swiper modules
import Button from "../Button";


SwiperCore.use([Pagination, Navigation]);

const SliderData = [
  {
    id: 1,
    Image: 'https://cosmatherapy.co.uk/wp-content/uploads/2021/08/final.jpg',
    SliderTitle: 'COSMA Cognitive Behavioural Platform to support dementia care',
    SliderDes: 'A cognitive and emotional wellness stimulating system aimed at better care and delayed progression of dementia.',
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  {
    id: 2,
    Image: 'https://cosmatherapy.co.uk/wp-content/uploads/2021/08/Screenshot-2021-08-19-at-19.34.13-2.png',
    SliderTitle: 'COSMA Cognitive Behavioural Platform to support dementia care',
    SliderDes: 'A cognitive and emotional wellness stimulating system aimed at better care and delayed progression of dementia.',
    buttonText: 'Learn More',
    buttonLink: '/'
  },
]

export default (props) => {
  return (
    <>
      <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">
        {SliderData.map((item) => (
          <SwiperSlide key={item.id} style={{backgroundImage: `url(${item.Image})` }} >
              <div className="sliderContentWrap">
                  <h1>{item.SliderTitle}</h1>
                  <p>{item.SliderDes}</p>
                  <Button to={item.buttonLink} BtnContent={item.buttonText} />
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};