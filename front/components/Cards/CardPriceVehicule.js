import React from "react";
import PropTypes from "prop-types";
import Notice from 'components/Notices/Notice';

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
          <h1 className="font-bold text-4xl text-orange-500"> Prix qualifié par programmation </h1>
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
		  <Notice text="C'est ainsi un prix auquel on peut se fier pour vendre ou acheter son véhicule, les mises à jour sont quotidiennes conférant aux prix une très bonne fiabilité à tous les instants de la transaction.La cote de l'année en cours est publiée seulement après 6 mois d'existence du millésime" />
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
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
