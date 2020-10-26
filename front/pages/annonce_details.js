import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnonceDetail from "components/Annonce/AnnonceDetail.js";


export default function AnnonceDetails() {
   return (
    <>
      <IndexNavbar fixed />
      <main>
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Annonces avec note de confiance
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
		<section className="pt-10 pb-8 mt-4 mb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <AnnonceDetail transparent />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
