import React from "react";
import Link from "next/link";

export default function AnnoncePremier() {
  return (
    <>
        <Link href="/annonce_details">
		<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo_satisfait.png")}
					  className="w-full align-center topImage"
					/>
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo.png")}
					  className="w-full align-center togBadge animate-ping ease-in-out"
					/>
				<img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="w-full px-4 py-2 flex-1">				
					  <h4 className="font-bold text-lg text-orange-700">
					    RENAULT Clio / V 1.0 TCE 100 ZEN
							<button
								className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none ml-2 mb-1"
								type="button"
						    >
							  <i className="far fa-heart"></i>
						    </button>
					  </h4>
					  <p className="text-md leading-relaxed text-gray-500">
						2015 / <span>23000</span> KM <i className="far fa-grin-beam text-orange-500"></i>
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
				<div className="flex flex-wrap">
					<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-orange-500 text-white font-bold uppercase rounded text-center animate-ping-small">
						Note de Conficance: 19/20
					  </p>
					</div>
					<div className="w-full mt-2 py-2 flex-1">
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-unlock-alt"></i>
                      </button>	
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="far fa-thumbs-up"></i>
                      </button>                  					  
					  <span className="font-bold px-1 text-xl ml-3 text-orange-500 text-right">
					    12 240 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Automatique
						</p>
					  </div>					   
					</div>
				</div>
        </div>
		</Link>
		
		<Link href="/annonce_details">
		<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo_satisfait.png")}
					  className="w-full align-center topImage"
					/>
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo.png")}
					  className="w-full align-center togBadge animate-ping ease-in-out"
					/>
				<img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
				<div className="w-full px-4 py-2 flex-1">				
					  <h4 className="font-bold text-lg text-orange-700">
					      RENAULT - GRAND SCENIC IV
					      <button
								className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none ml-2 mb-1 transform transition duration-500 ease-in-out hover:bg-red-500"
								type="button"
						    >
							  <i className="far fa-heart"></i>
						   </button>
					  </h4>
					  <p className="text-md leading-relaxed text-gray-500">
						2015 / <span>23000</span> KM <i className="far fa-grin-beam text-orange-500"></i>
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
				<div className="flex flex-wrap">
					<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-orange-500 text-white font-bold uppercase rounded text-center animate-ping-small">
						Note de Conficance: 19/20
					  </p>
					</div>
					<div className="w-full mt-2 py-2 flex-1">
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-unlock-alt"></i>
                      </button>	
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="far fa-thumbs-up"></i>
                      </button>				 
					  <span className="font-bold px-1 text-xl ml-3 text-orange-500 text-right">
					    12 850 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Automatique
						</p>
					  </div>					   
					</div>
				</div>
        </div>
		</Link>
		
		<Link href="/annonce_details">
		<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo_satisfait.png")}
					  className="w-full align-center topImage"
					/>
				<img
					  alt="..."
					  src={require("assets/img/qualite_logo.png")}
					  className="w-full align-center togBadge animate-ping ease-in-out"
					/>
				<img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg")}
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
						2015 / <span>23000</span> KM <i className="far fa-grin-beam text-orange-500"></i>
					  </p>
				</div>
				<hr className="border-b-1 border-gray-400" />
				<div className="flex flex-wrap">
					<div className="w-full px-8 py-2 px-2 flex-1">
					  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-orange-500 text-white font-bold uppercase rounded text-center animate-ping-small">
						Note de Conficance: 15/20
					  </p>
					</div>
					<div className="w-full mt-2 py-2 flex-1">
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fas fa-unlock-alt"></i>
                      </button>	
					  <button
                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="far fa-thumbs-up"></i>
                      </button>			 
					  <span className="font-bold px-1 text-xl text-orange-500 ml-3 text-right">
					    13 340 €
					  </span>
					  <div className="w-full mt-2 flex-1">
						<p className="text-md text-gray-500 text-justify truncate">
						Essence | Manuelle
						</p>
					  </div>					   
					</div>
				</div>
        </div>
		</Link>
    </>
  );
}
