import React, { Component } from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ENVS from '../../environment';

const CardAnnonceSlider = ({ dispatch,
					  loading,
					  car}) => {
    

	
	let uploadFiles = car?.uploads
	
	const settings = {
		  customPaging: function(i) {
				return (
				  <a>
					<img src={ ENVS.DEV.API_URL + uploadFiles[i].url } />
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
	
	
	return (
        <>
		  <Slider {...settings}>
            {uploadFiles?.map(uploadFile => (
				<div>
				  <img class="sliderImg" src={ ENVS.DEV.API_URL + uploadFile.url } alt={uploadFile.name} />
				</div>
			))}          
          </Slider>
        </>
    );
  }

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceSlider)