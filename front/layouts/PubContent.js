import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLogguedUser from 'service/hooks/useLogguedUser';
import ModalPayment from "components/Mondal/ModalPayment.js";

const basics = [
	  { icon: "fas fa-hands-helping", name: "informations principales du véhicule" },
	  { icon: "fas fa-clipboard-check", name: "Tête de liste, grande visibilité" },
	  { icon: "far fa-paper-plane", name: "Modifier à tout moment le prix du véhicule" },
	  { icon: "fas fa-database", name: "Fiabilité des données du véhicule" },
	  { icon: "fas fa-award", name: "Les valeurs de déclenchement de transaction particulier et professionel qualifié"}
  ];
export default function PubContent() {
  const {
    isAuthentificated,
    logguedUser
  } = useLogguedUser();   
  
  let [tokken,settokken]=useState(null);
  
  useEffect(() => {
    if (isAuthentificated && logguedUser) {
        try{
			const getTokken=async ()=>{
              const tok= await localStorage.getItem('ACCESS_TOKEN');
			  if(tok){
				settokken(tok);
			  }
			}
			getTokken();
		}catch(err){
			console.log(err);
        }
    }
  }, [isAuthentificated, logguedUser]);
  return (
    <>
      <section className="block relative z-1 bg-white-700">
		    <div className="container mx-auto px-4 pb-32 pt-16">
			  <div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
				  <div className="md:pr-12">
					<h3 className="text-xl font-semibold">
						Payez le questionnaire 20 pour obtenir une note de <span className="font-bold text-3xl text-orange-500">confiance MAXIMALE</span> et tous les <span className="font-bold text-3xl text-orange-500">AVANTAGES</span> pour vendre votre vehicule sur o1car.fr
					</h3>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">
						Mettez toutes les chances de votre côté
					</p>
					<ul className="list-none mt-2">
					  {basics.map(basic => (
						  <li className="py-2">
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
					{!isAuthentificated || (tokken = null) ? (
					       <button
							  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							  type="button"
							>
							  <Link href="/auth/login">
								  <a
									href="#pablo"
									className={
									  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								  >
									<i class="far fa-laugh mr-1 animate-spin"></i> Vendre votre véhicule sur Top list
								  </a>
							  </Link>
					  </button>
					     ) : (
					       <ModalPayment />
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
