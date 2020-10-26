import React, { Component } from "react";
import Slider from "react-slick";
//import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  customPaging: function(i) {
        return (
          <a>
            <img src={require(`assets/img/car/o1car_0${i + 1}.jpg`)} />
          </a>
        );
    },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  adaptiveHeight: false,
  className: "annoceSlider",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
		{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
			dots: false,
			aautoplay: true,
			autoplaySpeed: 500
          }
        }
      ]
};
export default function CardAnnonceSlider() {
    return (
        <>
          <Slider {...settings}>
            <div>
              <img class="sliderImg" src={require('assets/img/car/o1car_01.jpg')} />
            </div>
            <div>
              <img class="sliderImg" src={require('assets/img/car/o1car_02.jpg')} />
            </div>
            <div>
              <img class="sliderImg" src={require('assets/img/car/o1car_03.jpg')} />
            </div>
            <div>
             <img class="sliderImg" src={require('assets/img/car/o1car_04.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_05.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_06.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_07.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_08.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_09.jpg')} />
            </div>
			<div>
             <img class="sliderImg" src={require('assets/img/car/o1car_010.jpg')} />
            </div>
          </Slider>
        </>
    );
  }
