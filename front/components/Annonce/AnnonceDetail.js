import React, {useEffect, useState} from "react"
import DetailsBasic from "components/Dropdowns/AnnonceDetails/DetailsBasic.js";
import DetailsSide from "components/Dropdowns/AnnonceDetails/DetailsSide.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import DetailsPremiumDropdown from "../../components/Dropdowns/AnnonceDetails/DetailsPremiumDropdown.js";
import CardAnnonceSlide from "components/Cards/CardAnnonceSlider.js";
import FavorisButton from 'components/Favoris/FavorisButton';
import ShareButton from 'components/Annonce/ShareButton';
import {fetchCar} from 'service/actions/cars';
import Moment from 'react-moment';

import {connect} from 'react-redux'
import Router, {useRouter} from "next/router";
import {create} from "../../service/actions/favorites";
import useLoggedUser from "../../service/hooks/useLoggedUser";

const AnnonceDetail = ({
						   dispatch,
						   car,
						   favorites
					   }) => {
	const router = useRouter();
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const {
		isAuthentificated,
		loggedUser
	} = useLoggedUser();

	const isFavorite = (id) => {
		let currentFavoritesIs = favorites?.map(i => i.entity_id);
		return currentFavoritesIs.includes(id);
	}

	useEffect(() => {
		dispatch(fetchCar(router.query.id))
	}, [dispatch])

	const onClickFavoris = async (payload) => {
		try {
			if (!isAuthentificated || !loggedUser) {
				Router.push("/auth/login")
			} else {
				dispatch(create(payload));
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
				<CardAnnonceSlide/>
				{ car?.premium ? (
					<img
							alt="..."
							src={require("assets/img/qualite_logo.png")}
							className="hasPrenium w-full align-center togBadgeBig animate-ping ease-in-out"
					/> ) : ( null )
				}
				<h4 className="marqueBlock bg-orange-500 font-bold text-2xl text-white px-4 py-3 shadow-lg">
					<span className="brand">{car?.brand} {car?.model}</span> <span
					className="generation">{car?.generation} | <i class="fas fa-hourglass-half"></i> <Moment format="DD" element="fr" locale="fr" fromNow>{car?.expire_at}</Moment> Jours </span>
					<span className="codePostal ml-2"><i className="fas fa-map-marker-alt"></i> {car?.postal_code} </span>
					<span className="favoris">
						{isFavorite(car?.id) ? (
							<button
								className="bg-orange-500 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
								type="button"
							>
								<i className="fas fa-heart text-white"> </i>
							</button>
						): (<FavorisButton category="car" entity_id={car?.id} action={onClickFavoris}/>)}
					</span>
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

				{car?.premium == true &&(
					<div className="flex flex-wrap p-4">
						<button type="button" className="mr-4 p-2 border border-solid border-gray-600 text-lg text-orange-500 font-bold uppercase rounded" onClick={() => setNavbarOpen(!navbarOpen)}>
							<i className="far fa-thumbs-up animate-bounce"></i> Premium note de Confiance <i
							className="fas fa-chevron-circle-down"></i></button>
						<div
							className={
								"flex flex-wrap mt-4" +
								(navbarOpen ? " block" : " hidden")
							}
							id="example-navbar-warning"
						>
							<DetailsPremiumDropdown/>
						</div>

					</div>
				)}
			</div>

			<DetailsSide/>

		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
	favorites: state.favoritesReducer.favorites
})

export default connect(mapStateToProps)(AnnonceDetail)
