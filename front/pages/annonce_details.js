import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnonceDetail from "components/Annonce/AnnonceDetail.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";

export default function AnnonceDetails() {
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
