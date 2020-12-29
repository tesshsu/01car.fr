import React, {useEffect} from 'react';
import MondalContact from "components/Mondal/MondalContact.js";
import NoteConfiance from "components/Tabs/NoteConfiance.js";
import {connect} from "react-redux";
import {pubs} from 'helpers/constant';
const DetailsSide = ({ dispatch,
					  loading,
					  car}) => {
  const basics = [
	  { icon: "fas fa-gas-pump", value: car?.fuel },
	  { icon: "fas fa-tachometer-alt", value: car?.km },
	  { icon: "fas fa-magic", value: car?.transmission },
	  { icon: "fas fa-car-side", value: car?.doors },
	  { icon: "fas fa-car-battery", value: car?.power }
  ];

  let prix_api = car?.price
  return (
    <>
        <div className="w-full lg:w-4/12 px-12 mt-4">
			<div className="priceVehicule font-bold px-1 text-2xl text-gray-800 text-left">
				Prix du vendeur
			</div>
			<div className="priceVehicule font-bold px-1 text-5xl text-orange-500 text-left underline">
				{car?.estimate_price} €
			</div>
			{ prix_api != null && car?.premium  ? (
				<div className="flex flex-wrap rounded border border-solid border-gray-500 p-1">
				<div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
					<span className="font-bold px-1 text-xl text-orange-500 text-left underline">Entre {car?.price} € et 19 278 €</span>
				</div>
				<p className="text-md block p-3 text-orange-500 rounded"><i class="far fa-thumbs-up"></i> Valeur estimée par la base de données nationale </p>
				</div>
				) : (
				  null
			)}

			<div className="flex flex-wrap mt-4">
			   <NoteConfiance />
			</div>
			{basics.map(basic => (
				<div className="flex flex-wrap">
					<div className="w-4/12">
						<span className="text-lg block p-3 text-gray-800 rounded border border-solid border-gray-200"><i className={basic.icon}></i></span>
					</div>
					<div className="w-8/12">
					  <span className="carburant text-lg block p-3 text-gray-800 rounded border border-solid border-gray-200">{basic.value}</span>
					</div>
				</div>
			))}
			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center justify-center h-full">
					<MondalContact transparent />
                </div>
			</div>
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsSide)
