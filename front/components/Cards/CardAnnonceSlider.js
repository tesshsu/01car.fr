import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const settings = {
  
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
export default function CardAnnonceSlider() {
    return (
        <>
          <Slider {...settings}>
            <div>
              <img src="https://i.ibb.co/WgjCXky/1.jpg" />
            </div>
            <div>
              <img src="https://i.ibb.co/ZWWMLgR/kia-PNG95.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/RpmyF8F/2.jpg" />
            </div>
            <div>
              <img src="https://i.ibb.co/Fq6XzjP/IMG-2455.jpg" />
            </div>
          </Slider>
        </>
    );
  }
