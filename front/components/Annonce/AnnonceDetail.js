import React, {useEffect} from 'react';
import DetailsBasic from "components/Dropdowns/AnnonceDetails/DetailsBasic.js";
import DetailsSide from "components/Dropdowns/AnnonceDetails/DetailsSide.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import DetailsPremiumDropdown from "components/Dropdowns/AnnonceDetails/DetailsPremiumDropdown.js";
import CardAnnonceSlide from "components/Cards/CardAnnonceSlider.js";
import FavorisButton from 'components/Favoris/FavorisButton';
import ShareButton from 'components/Annonce/ShareButton';
import {fetchCar} from 'service/actions/cars';

import {connect} from 'react-redux'
import {useRouter} from "next/router";

const AnnonceDetail = ({
						   dispatch,
						   car,
						   hasErrors,
						   loading,
					   }) => {
	const router = useRouter();
	useEffect(() => {
		dispatch(fetchCar(router.query.id))
	}, [dispatch])
	return (
		<>
			<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
				<CardAnnonceSlide/>
				{ car?.prenium == true ? (
					<img
							alt="..."
							src={require("assets/img/qualite_logo.png")}
							className="hasPrenium w-full align-center togBadge animate-ping ease-in-out"
					/> ) : ( null )
				}
				<h4 className="marqueBlock bg-orange-500 font-bold text-2xl text-white px-4 py-3 shadow-lg">
					<span className="brand">{car?.brand}</span> - <span className="model">{car?.model}</span> <span
					className="generation">{car?.generation}</span>
					<span className="favoris"><FavorisButton/></span>
				</h4>
				<h4 className="marqueBlock font-bold text-2xl text-white mt-16 px-4 py-3">
					<span className="favoris"><ShareButton/></span>
				</h4>

				<div className="flex flex-wrap">
					<DetailsBasic/>
				</div>

				<div className="flex flex-wrap">
					<DetailsDropdown/>
				</div>

				<div className="flex flex-wrap">
					<DetailsPremiumDropdown/>
				</div>
			</div>

			<DetailsSide/>

		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(AnnonceDetail)
