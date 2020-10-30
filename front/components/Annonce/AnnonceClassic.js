import React from "react";
import Link from "next/link";
const annonces = [
  { brand: "RENAULT", model: "GRAND SCENIC", generation: "IV", year: "2012", km:"82000", nc: "14", price:"10 700", fuel: "Essence", transmission: "Manuelle" },
  { brand: "RENAULT", model: "CAPTUR", generation: "V", year: "2015", km:"92000", nc: "12", price:"12 700", fuel: "Essence", transmission: "Manuelle" },
  { brand: "DACIA", model: "DUSTER", generation: "IV", year: "2012", km:"62000", nc: "13", price:"10 700", fuel: "Essence", transmission: "Manuelle" }
];
export default function AnnonceClassic() {
  return (
    <>
        {annonces.map(annonce => (
			<div className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
					
					<img
						alt="..."
						src={require("assets/img/team-4-800x800.jpg")}
						className="shadow-lg mx-auto rounded-lg"
					  />
					<div className="w-full px-4 py-2 flex-1">				
						  <h4 className="font-bold text-lg text-orange-700">
						  {annonce.brand} - {annonce.model} {annonce.generation}
							  <button
									className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
									type="button"
								>
								  <i className="far fa-heart"></i>
								</button>
						  </h4>
						  <p className="text-md leading-relaxed text-gray-500">
							{annonce.year} / <span>{annonce.km}</span> KM
						  </p>
					</div>
					<hr className="border-b-1 border-gray-400" />
					<div className="flex flex-wrap">
						<div className="w-full px-8 py-2 px-2 flex-1">
						  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
							Note de Conficance: {annonce.nc}/20
						  </p>
						</div>
						<div className="w-full mt-2 py-2 flex-1">					  	 
						  <span className="font-bold px-1 text-xl text-orange-500 text-right">
							{annonce.price} €
						  </span>
						  <div className="w-full mt-2 flex-1">
							<p className="text-md text-gray-500 text-justify truncate">
							{annonce.fuel} | {annonce.transmission}
							</p>
						  </div>					   
						</div>
					</div>
			</div>
		))}
    </>
  );
}
