import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const DetailsDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
        <div className="flex flex-wrap">
			<div className="w-full px-8 py-2 px-2 flex-1">
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded">
				    <i class="fas fa-thumbs-up"></i> NOTE DE CONFIANCE 
				</h4>
			</div>		
			<div className="container px-2 mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-male"></i> Annonce par : </span>
					</div>
					<div className="w-full px-4 flex-1">
						  <span className="vendeurStatus text-xl block my-2 p-3 text-orange-500 underline"> particulier</span>
					</div>						
				</div>
			</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="far fa-calendar-alt"></i> Vehicule est disponible : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">Dans un mois</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-file-invoice-dollar"></i> Véhicule est Non fumeur :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-certificate"></i> Le double des clés :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-key"></i> Nombre de mains : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">3ème mains ou plus</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-globe-europe"></i> Etat de vehicule : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">Neuf ou moins de 4 ans</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-globe-europe"></i> Origine du véhicule : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">France</span>
						</div>						
					  </div>
					</div>
					<h4 className="mt-2 px-6 py-2 text-md leading-relaxed text-gray-600 underline font-bold uppercase rounded">
				      ÉQUIPEMENTS DE SÉRIE ET OPTIONS : 
				    </h4>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> toit ouvrant </span>
						</div>
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">aide parking av/ar</span>
						</div>
                        <div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">caméra de recul</span>
						</div>
                        <div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">pack sport</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> banquette 1/3 - 2/3 </span>
						</div>
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">climatisation automatique</span>
						</div>
                        <div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">direction assistée</span>
						</div>
                        <div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">fermeture électrique</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> ABS </span>
						</div>
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">alerte franchissement ligne</span>
						</div>
                        <div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200">feux et essuie-glaces automatiques</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> anti démarrage </span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-3 flex-1">
						  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> kit de réparation crevaison </span>
						</div>						
					  </div>
					</div>
		</div>
    </>
  );
};

export default DetailsDropdown;
