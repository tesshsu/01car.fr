import React from "react";
import PropTypes from "prop-types";

export default function CardPriceVehicule({
  statSubtitleCote,
  statCote,
  statSubtitlePro,
  statCotePro,
  statArrow,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
	  <div className="min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg mt-4">      
          <div className="w-full flex-1">
				<span className="text-2xl block p-3 text-gray-800 font-bold rounded"><i className="fas fa-tag"></i> {statSubtitleCote} : </span>
				<span className="font-semibold text-4xl text-orange-500">
                {statCote} €
              </span>
		  </div>
		  
			
          <div className="w-full flex-1">
				<span className="text-2xl block p-3 text-gray-800 font-bold rounded"><i className="fas fa-dollar-sign"></i> {statSubtitlePro} : </span>
				<span className="font-semibold text-4xl text-orange-500">
                {statCotePro} €
              </span>
		  </div>
      </div>
    </>
  );
}

CardPriceVehicule.defaultProps = {
  statSubtitleCote: "Prix pour Vendeur particulier",
  statCote: "7400",
  statSubtitlePro: 'Prix pour Vendeur professionnel',
  statCotePro: "7600",
  statArrow: "up",
  statPercentColor: "text-green-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-orange-500",
};

CardPriceVehicule.propTypes = {
  statSubtitleCote: PropTypes.string,
  statCote: PropTypes.string,
  statSubtitlePro: PropTypes.string,
  statCotePro: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
