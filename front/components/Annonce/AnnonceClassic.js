import React from "react";
import Link from "next/link";

export default function AnnonceClassic() {
  return (
    <>
        <div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
                    alt="..."
                    src={require("assets/img/team-4-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="w-full px-4 py-2 flex-1">				
					  <h4 className="font-bold text-lg text-orange-700">
					      RENAULT - GRAND SCENIC IV
					      <button
								className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
								type="button"
						    >
							  <i className="far fa-heart"></i>
						    </button>
					  </h4>
					  <p className="text-md leading-relaxed text-gray-500">
						2015 / <span>23000</span> KM
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
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
				</div>
        </div>
		
		<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
                    alt="..."
                    src={require("assets/img/team-5-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="w-full px-4 py-2 flex-1">				
					  <h4 className="font-bold text-lg text-orange-700">
					      RENAULT - GRAND SCENIC IV
					      <button
								className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
								type="button"
						    >
							  <i className="far fa-heart"></i>
						    </button>
					  </h4>
					  <p className="text-md leading-relaxed text-gray-500">
						2015 / <span>23000</span> KM
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
				<div className="flex flex-wrap">
					<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
						Note de Conficance: 13/20
					  </p>
					</div>
					<div className="w-full mt-2 py-2 flex-1">			 
					  <span className="font-bold px-1 text-xl text-orange-500 text-right">
					    12 000 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Manuelle
						</p>
					  </div>					   
					</div>
				</div>
        </div>
		
		<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
                    alt="..."
                    src={require("assets/img/team-6-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="w-full px-4 py-2 flex-1">				
					  <h4 className="font-bold text-lg text-orange-700">
					     RENAULT - GRAND SCENIC IV
					      <button
								className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
								type="button"
						    >
							  <i className="far fa-heart"></i>
						    </button>
					  </h4>
					  <p className="text-md leading-relaxed text-gray-500">
						2015 / <span>23000</span> KM
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
				<div className="flex flex-wrap">
					<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
						Note de Conficance: 9/20
					  </p>
					</div>
					<div className="w-full mt-2 py-2 flex-1">			 
					  <span className="font-bold px-1 text-xl text-orange-500 text-right">
					    14 000 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Automatique
						</p>
					  </div>					   
					</div>
				</div>
        </div>
    </>
  );
}
