import React, {useEffect, useState} from 'react';
import DetailsBasic from "components/Dropdowns/AnnonceDetails/DetailsBasic.js";
import DetailsSide from "components/Dropdowns/AnnonceDetails/DetailsSide.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import DetailsPremiumDropdown from "components/Dropdowns/AnnonceDetails/DetailsPremiumDropdown.js";
import CardAnnonceSlide from "components/Cards/CardAnnonceSlider.js";
import FavorisButton from 'components/Favoris/FavorisButton';
import ShareButton from 'components/Annonce/ShareButton';

import { connect } from 'react-redux'
import {fetchPost} from 'service/actions/annonce';
import {useRouter} from "next/router";

const AnnonceDetail = ({
  dispatch,
  cars,
  hasErrors,
  loading,
}) => {
	const router = useRouter();
	let post;
  useEffect(() => {
    //const { id } = match.params
	const id = router.query.id;
	post = cars.filter(c => c.id = id);
	console.log(car);
  }, [dispatch])
  return (
    <>
		<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
			<CardAnnonceSlide />
				<h4 className="marqueBlock bg-orange-500 font-bold text-2xl text-white px-4 py-3 shadow-lg">
					 <span className="brand">{post?.brand}</span> - <span className="model">{post?.model}</span> <span className="generation">{post.generation}</span>
					 <span className="favoris"><FavorisButton /></span>
				</h4>
				<h4 className="marqueBlock font-bold text-2xl text-white mt-16 px-4 py-3">
					 <span className="favoris"><ShareButton /></span>
				</h4>

				<div className="flex flex-wrap">
				     <DetailsBasic />
				</div>

				<div className="flex flex-wrap">
				    <DetailsDropdown />
				</div>

				<div className="flex flex-wrap">
				    <DetailsPremiumDropdown />
				</div>
        </div>

        <DetailsSide />

    </>
  );
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	cars: state.carsReducer.cars,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(AnnonceDetail)
