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
	  { icon: "fas fa-key", value: car?.finition }
  ];

  let prix_api = car?.price
  let prenium = car?.prenium
  return (
    <>
        <div className="w-full lg:w-4/12 px-12 mt-4">
			{ prix_api != null && prenium == true  ? (
				<div className="flex flex-wrap rounded border border-solid border-gray-600 animate-bounce p-1">
				<div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
					<span className="font-bold px-1 text-4xl text-orange-500 text-left underline">{car?.price}</span> € Prix marche
				</div>
				<div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
					<span className="font-bold px-1 text-4xl text-orange-500 text-left underline">10 800</span> € Prix pro
				</div>
				<p className="text-lg block my-4 p-3 text-orange-500 rounded"><i class="far fa-thumbs-up"></i> Valeur de transaction qualifié par notre analyse de données </p>
				</div>
				) : (
				  null
			)}
			<div className="priceVehicule font-bold px-1 text-5xl text-orange-500 text-left underline">
				{car?.estimate_price} €
			</div>
			<div className="priceVehicule font-bold px-1 text-2xl text-gray-800 text-left">
				Prix par le vendeur
			</div>
			<div className="flex flex-wrap">
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
			<div className="flex flex-wrap">
				<ul className="list-none">
                  {pubs.map(pub => (
					  <li className="py-2">
						<div className="flex items-center">
						  <div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
							  <i className={pub.icon}></i>
							</span>
						  </div>
						  <div>
							<h4 className="text-gray-600">
							  {pub.name}
							</h4>
						  </div>
						</div>
					  </li>
				  ))}
                </ul>
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
