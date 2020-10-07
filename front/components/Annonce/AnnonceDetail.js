import React from "react";
import Link from "next/link";
import NotificationDropdown from "components/Dropdowns/TableDropdown.js";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import DetailsDropdown from "components/Dropdowns/AnnonceDetails/DetailsDropdown.js";
import DetailsPremiumDropdown from "components/Dropdowns/AnnonceDetails/DetailsPremiumDropdown.js";
import MondalContact from "components/Mondal/MondalContact.js";

export default function AnnonceDetail() {
  return (
    <>
		<div className="w-full lg:w-8/12 lg:mb-0 mb-12  my-6 shadow-lg rounded-lg">
				<div className="container px-4 mx-auto">
				  <div className="flex flex-wrap">
					<div className="w-1/3 px-4">
					  <h4 className="font-bold text-2xl text-orange-700">
					      RENAULT - GRAND SCENIC IV
					  </h4>
					</div>
					<div className="w-1/3 px-4 mt-1">
					  <p className="text-md text-gray-500">
						Essence | Manuelle
					  </p>
					</div>
					<div className="w-1/3 px-4 mt-1">
					  <span className="text-md leading-relaxed text-gray-800">
						2015 / <span>23000</span> KM
					  </span>
					</div>
				  </div>
				</div>
				<img
                    alt="..."
                    src={require("assets/img/team-4-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="flex flex-wrap">
				    <DetailsDropdown transparent />		
				</div>
				
				<div className="flex flex-wrap">
				    <DetailsPremiumDropdown transparent />		
				</div>
        </div>
 
        <div className="w-full lg:w-4/12 px-4 mt-10">
		    <div className="flex flex-wrap">
				<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
						Note de Conficance: 14/20
					  </p>
				</div>
				<div className="w-full mt-2 py-2 flex-1">					  	 
					  <span className="font-bold px-1 text-xl text-orange-500 text-right">
					    10 700 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Manuelle
						</p>
					  </div>					   
				</div>
				<ul className="list-none mt-6">
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
}
