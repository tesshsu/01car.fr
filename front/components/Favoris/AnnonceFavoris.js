import React from "react";
import Link from "next/link";

export default function AnnonceFavoris() {
  return (
    <>
        <div className="container px-4 mx-auto">
		  <div className="favoris-block flex-wrap">
			<div className="w-full px-4 mt-4 flex-1">
			  <img
                    alt="..."
                    src={require("assets/img/team-4-800x800.jpg")}
                    className="shadow-lg mx-auto rounded-lg"
                  />
			</div>
			<div className="w-full px-4 flex-1">
			  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
			        <div class="top justify-between">
					  <div class="font-bold text-lg text-orange-700 text-center py-2 m-2">
					     RENAULT - GRAND SCENIC IV
					  </div>
					  <div class="price font-bold text-orange-500  text-2xl text-center bg-gray-400 px-4 py-2">
					    10 700 €
					  </div>
					</div>
					<div className="container mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-1/3">
						  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">Essence</span>
						</div>
						<div className="w-1/3">
						  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">Manuelle</span>
						</div>
						<div className="w-1/3">
						  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">82 000 km</span>
						</div>
						<div className="w-1/3">
						  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">2017</span>
						</div>
					  </div>
					</div>
					<div className="button-block justify-left">
						<button
						  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/annonce_details">
							  <a
								href="#pablo"
								className={
								  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
								}
							  >
								Voir
							  </a>
						  </Link>
						</button>
						 <button
						  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/annonce">
							  <a
								href="#pablo"
								className={
								  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
								}
							  >
								Supprimer l'annonce
							  </a>
						  </Link>
						</button>
                    </div>
					<p className="mt-4 px-6 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
						Note de Conficance: 14/20
				    </p>

			  </span>
			</div>
		  </div>
		</div>
    </>
  );
}
