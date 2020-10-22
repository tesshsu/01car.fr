import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const DetailsBasic = () => {
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
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed underline text-gray-800 font-bold uppercase rounded">
				    <i class="fas fa-info"></i> DETAILS DU VÉHICULE 
				</h4>
			</div>		
			<div className="container px-2 mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-gas-pump"></i> Energie: </span>
					</div>
					<div className="w-full px-4 flex-1">
						  <span className="carburant text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200"> Essence sans plomb</span>
					</div>						
				</div>
			</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-tachometer-alt"></i> Kilométrage: </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="km text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">23000 <span>km</span></span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-file-invoice-dollar"></i> Boîte de vitesses :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="boiteVitesse text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">Manuelle</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-car-side"></i> Nombre de portes :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="doors text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">5</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-car-battery"></i> Deuxième jeu de clés ou carte : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="cv text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">7 CV / 130 ch</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i class="far fa-calendar-alt"></i> Année : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="annee text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">2012</span>
						</div>						
					  </div>
					</div>
		</div>
    </>
  );
};

export default DetailsBasic;
