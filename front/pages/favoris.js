import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnoncePremier from "components/Annonce/AnnoncePremier.js";
import AnnonceClassic from "components/Annonce/AnnonceClassic.js";
import Pagination from "components/Annonce/Pagination.js";

export default function Favoris() {
   return (
    <>
      <IndexNavbar fixed />
      <main className="favoris-page">
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Votre list favoris
            </h4>
			 <div className="flex justify-center">
                      <div className="mr-4 p-3 text-center">                       
						<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="far fa-smile text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Note de confiance</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="fas fa-unlock-alt text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Sécuriser au maximum</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                          <i className="far fa-thumbs-up text-lg mr-1"></i>
                        </span>
                        <span className="text-sm text-gray-500">Vendre facilement</span>
                      </div>
                    </div>
		</section>
	    <section className="mt-6">
		  <div className="container mx-auto px-4">
			<div className="flex flex-wrap content-center items-center justify-center h-full">
				<div className="w-full lg:w-6/12 px-4">
					<div className="relative flex w-full flex-wrap items-stretch mb-3">
					  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
						<i className="fas fa-search"></i>
					  </span>
					  <input type="text" placeholder="Recherche" className="px-3 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
					</div>
				</div>
				<div className="w-full lg:w-6/12 px-4">
					<div className="relative flex w-full flex-wrap items-stretch mb-3">
					  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						<option>Tire par</option>
						<option>Annonces les plus récentes</option>
						<option>marques A - Z</option>
						<option>marques Z - A</option>
					  </select>
					  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
						<i className="fas fa-angle-down text-2xl my-4"></i>
					  </div>
					</div>
				</div>
			</div>
		  </div>
        </section>
		<section className="pt-10 pb-8 mt-4">
          <div className="container mx-auto px-4">            
            <div className="flex flex-wrap">
                <AnnoncePremier transparent />
                <AnnonceClassic transparent />
                <AnnonceClassic transparent />
                <AnnonceClassic transparent />				
            </div>
			<div className="flex content-center items-center justify-center h-full mb-24 mt-8">
               <Pagination transparent />
            </div>			
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
