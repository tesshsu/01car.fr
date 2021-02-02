import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from '../service/hooks/useLoggedUser';
import ModalPayment from "../components/Modal/ModalPayment.js";
import {basics} from "helpers/constant";

export default function PubContent() {
  const {
    isAuthentificated
  } = useLoggedUser();


  return (
    <>
      <section className="block relative z-1 bg-white-700">
		    <div className="container mx-auto px-4 pb-32 pt-16">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
					<h1 className="font-bold text-4xl text-orange-700">
						Avantages pour le vendeur
					</h1>
				  <div className="md:pr-12">
					<h3 className="text-xl font-semibold">
						Payez le questionnaire 20 pour obtenir une note de <span className="font-bold text-3xl text-orange-500">confiance MAXIMALE</span> et tous les <span className="font-bold text-3xl text-orange-500">AVANTAGES</span> pour vendre votre vehicule sur 1car.fr
					</h3>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">
						Mettez toutes les chances de votre côté
					</p>
					<ul className="list-none mt-2">
					  {basics.map(basic => (
						  <li key={basic.name.replace(/\s+/g, '_')} className="py-2">
							<div className="flex items-center">
							  <div>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-gray-100 mr-3">
								  <i className={basic.icon}></i>
								</span>
							  </div>
							  <div>
								<h4 className="text-lg text-gray-600">
									{basic.name}
								</h4>
							  </div>
							</div>
						  </li>
					  ))}
					</ul>
					{!isAuthentificated ? (
					       <button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <Link href="/auth/login">
								  <a
									href="#pablo"
									className={
									  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								  >
									<i className="far fa-laugh mr-1 animate-spin"> </i> Vendre votre véhicule sur Top list
								  </a>
							  </Link>
					  </button>
					     ) : (
						<button
							className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
							type="button"
						>
							<Link href="/mesAnnonces">
								<a
									href="#pablo"
									className={
										"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								>
									<i className="fas fa-list-alt animate-bounce"></i> Choisir votre annonce
								</a>
							</Link>
						</button>
						 )
					  }
				  </div>
				</div>

				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
				  <img
					alt="..."
					className="max-w-full rounded-lg shadow-xl"
					style={{
					  transform:
						"scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
					}}
					src={require("assets/img/question_payant.jpg")}
				  />
				</div>
			  </div>
			</div>
	    </section>
    </>
  );
}
