import React, { Component } from "react";
import Slider from "react-slick";
//import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const annonce_photos = [
  { src: require('assets/img/car/o1car_01.jpg'), alt: "pic-1" },
  { src: require('assets/img/car/o1car_02.jpg'), alt: "pic-2" },
  { src: require('assets/img/car/o1car_03.jpg'), alt: "pic-4" },
  { src: require('assets/img/car/o1car_04.jpg'), alt: "pic-5" },
  { src: require('assets/img/car/o1car_05.jpg'), alt: "pic-6" },
  { src: require('assets/img/car/o1car_06.jpg'), alt: "pic-7" },
  { src: require('assets/img/car/o1car_07.jpg'), alt: "pic-8" },
  { src: require('assets/img/car/o1car_08.jpg'), alt: "pic-9" },
  { src: require('assets/img/car/o1car_09.jpg'), alt: "pic-10" },
  { src: require('assets/img/car/o1car_010.jpg'), alt: "pic-11" }
];

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
            {annonce_photos.map(annonce_photo => (
				<div>
				  <img class="sliderImg" src={annonce_photo.src} alt={annonce_photo.alt} />
				</div>
			))}          
          </Slider>
        </>
    );
  }
