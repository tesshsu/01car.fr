import React from "react";
import DetailsBasic from "components/Dropdowns/AnnonceDetails/DetailsBasic.js";
import DetailsSide from "components/Dropdowns/AnnonceDetails/DetailsSide.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import DetailsPremiumDropdown from "components/Dropdowns/AnnonceDetails/DetailsPremiumDropdown.js";
import CardAnnonceSlide from "components/Cards/CardAnnonceSlider.js";
import FavorisButton from 'components/Favoris/FavorisButton';
import ShareButton from 'components/Annonce/ShareButton';

export default function AnnonceDetail() {
  return (
    <>
		<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
			<CardAnnonceSlide />
				<h4 className="marqueBlock bg-orange-500 font-bold text-2xl text-white px-4 py-3 shadow-lg">
					 <span className="brand">RENAULT</span> - <span className="model">GRAND SCENIC</span> <span className="generation">IV</span>
					 <span className="favoris"><FavorisButton /> <ShareButton /></span>
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
