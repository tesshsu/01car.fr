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
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 font-bold uppercase rounded">
				    <i class="fas fa-info-circle"></i> Informations générales ( 1- 10 questionaires ) 
				</h4>
			</div>		
			<div className="container px-2 mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-male"></i> Annonce par : </span>
					</div>
					<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline"> particulier</span>
					</div>						
				</div>
			</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="far fa-calendar-alt"></i> Mise en circulation : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">17/10/2013</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-file-invoice-dollar"></i> Puissance fiscale :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">10 CV</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-certificate"></i> Garantie :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-key"></i> Deuxième jeu de clés ou carte : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">oui</span>
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
		</div>
    </>
  );
};

export default DetailsDropdown;
