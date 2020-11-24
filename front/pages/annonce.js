import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnoncePremier from "components/Annonce/AnnoncePremier.js";
import AnnonceClassic from "components/Annonce/AnnonceClassic.js";
import AnnonceSearchForm from "components/Annonce/AnnonceSearchForm.js";
import Pagination from "components/Annonce/Pagination.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";

export default function Annonce() {
   return (
    <>
      <IndexNavbar fixed />
      <main>
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Annonces avec note de confiance
            </h4>
			<PubContentThreeIcons />
		</section>
	    <AnnonceSearchForm />
		<section className="pt-10 pb-8 mt-4">
          <div className="container mx-auto px-4">            
            <div className="flex flex-wrap">
                <AnnoncePremier transparent />
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
