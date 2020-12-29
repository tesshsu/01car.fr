import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import MonAnnonceLists from '../components/Annonce/MonAnnonceLists.js';
import Pagination from '../components/Annonce/Pagination.js';
import {listPubs} from "helpers/constant";

export default function MonAnnonce() {
   return (
    <>
      <IndexNavbar fixed />
      <main className="favoris-page">
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Gérer mes annonces déposées
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
                <MonAnnonceLists />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
