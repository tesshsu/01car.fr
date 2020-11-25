import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnonceFavoris from "components/Favoris/AnnonceFavoris.js";
import Pagination from "components/Annonces/Pagination.js";

const listPubs = [
	  { icon: "far fa-smile text-lg mr-1", title: "Note de confiance" },
	  { icon: "fas fa-unlock-alt text-lg mr-1", title: "Sécuriser au maximum" },
	  { icon: "far fa-thumbs-up text-lg mr-1", title: "Vendre facilement" }
  ];
export default function Favoris() {
   return (
    <>
      <IndexNavbar fixed />
      <main className="favoris-page">
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Mes annonces favorites sauvegardées
            </h4>
			 <div className="flex justify-center">
                      {listPubs.map(listPub => (
						  <div className="mr-4 p-3 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
								  <i className={listPub.icon}></i>
								</span>
								<span className="text-sm text-gray-500">{listPub.title}</span>
						  </div>
					  ))}
             </div>
		</section>
		<section className="pt-10 pb-8 mt-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <AnnonceFavoris transparent />
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
