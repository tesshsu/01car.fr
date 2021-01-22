import React from "react";
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
					<img src={ process.env.NEXT_PUBLIC_API_URL + uploadFiles[i].url } />
				  </a>
				);
			},
		  dots: true,
		  arrows: true,
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

    //const imgSrc = uploadFiles ? (process.env.NEXT_PUBLIC_API_URL + uploadFile.url) : (require("assets/img/car/default.jpg"))
	//const imgAlt = uploadFiles ? uploadFile.name : "defalut carImg"
	return (
        <>
			{uploadFiles?.length > 0 ? (
				<Slider {...settings}>
					{
						uploadFiles?.map(uploadFile => (
							<div>
								<img className="sliderImg" src={process.env.NEXT_PUBLIC_API_URL + uploadFile.url} alt={uploadFile.name}/>
							</div>
						))}
				</Slider> ) : (
				<div>
					<img className="sliderImg" src={require("assets/img/car/default_big.jpg")} alt="defalut carImg"/>
				</div>
			 )
			}
        </>
    );
  }

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(CardAnnonceSlider)
