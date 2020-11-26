import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import MondalContact from "components/Mondal/MondalContact.js";
import NoteConfiance from "components/Tabs/NoteConfiance.js";
import {connect} from "react-redux";

const DetailsSide = ({ dispatch,
					  loading,
					  car}) => {

  return (
    <>
        <div className="w-full lg:w-4/12 px-12 mt-4">
		    <div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
				<span className="font-bold px-1 text-4xl text-orange-500 text-left underline">{car?.price}</span> € Prix marche
			</div>
			<div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
				<span className="font-bold px-1 text-4xl text-orange-500 text-left underline">10 800</span> € Prix pro
			</div>
			<p className="text-lg block my-4 p-3 text-orange-500 rounded border border-solid border-gray-200">Valeur de transaction qualifié !!</p>
			<div className="flex flex-wrap">
			   <NoteConfiance />
			</div>
			<div className="flex flex-wrap">
			    <div className="w-4/12">
					<span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-gas-pump"></i></span>
				</div>
				<div className="w-8/12">
				  <span className="carburant text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">Essence sans plomb</span>
				</div>
			</div>
			<div className="flex flex-wrap -my-1">
			    <div className="w-4/12">
					<span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-tachometer-alt"></i></span>
				</div>
				<div className="w-8/12">
				  <span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><span className="km">23000</span> KM</span>
				</div>
			</div>
			<div className="flex flex-wrap -my-1">
			    <div className="w-4/12">
					<span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-magic"></i></span>
				</div>
				<div className="w-8/12">
				  <span className="boiteVitesse text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">Manuelle</span>
				</div>
			</div>
			<div className="flex flex-wrap -my-1">
			    <div className="w-4/12">
					<span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-car-side"></i></span>
				</div>
				<div className="w-8/12">
				  <span className="boiteVitesse text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">Chic - <span className="doors">5</span> portes</span>
				</div>
			</div>
			<div className="flex flex-wrap -my-1">
			    <div className="w-4/12">
					<span className="text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-car-battery"></i></span>
				</div>
				<div className="w-8/12">
				  <span className="boiteVitesse text-lg block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><span className="cy">1.6</span>L, <span className="cv">5</span>cv</span>
				</div>
			</div>
			<div className="flex flex-wrap">
				<ul className="list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="fas fa-hands-helping"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Un intermédiaire de confiance
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="fas fa-clipboard-check"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Sécuriser au maximum l'achat de son véhicule
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          ACHETER FACILEMENT VOTRE VÉHICULE
                        </h4>
                      </div>
                    </div>
                  </li>
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
