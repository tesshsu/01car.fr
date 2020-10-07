import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const DetailsPremiumDropdown = () => {
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
        <div className="w-full px-8 py-2 px-2 flex-1">
			<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 font-bold uppercase rounded animate-bounce-once">
				<i class="fas fa-thumbs-up"></i> Informations transparence totale du véhicule ( 11- 20 questionaires ) 
			</h4>
		</div>
		<div className="container px-2 mx-auto">
			<div className="flex flex-wrap">
			     <ul className="flex flex-col lg:flex-row lg:justify-start ist-none px-6">					  
					  <li className="flex items-center">
						<a
							className="lg:text-gray-800 lg:hover:text-gray-300 text-gray-800 px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
							href="#"
							ref={btnDropdownRef}
							onClick={(e) => {
							  e.preventDefault();
							  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
							}}
						  >
							 <div className="container px-2 mx-auto rounded border border-solid border-gray-200 text-gray-500 active:bg-grey-500">
								<div className="flex flex-wrap">				
										<span className="text-sm block my-2 p-3"> Rapport Sécurité </span>
										<span className="text-sm block my-2 p-3"><i class="fas fa-chevron-circle-down"></i></span>										
								</div>
							</div>
							 
						 </a>
						<div
							ref={popoverDropdownRef}
							className={
							  (dropdownPopoverShow ? "block " : "hidden ") +
							  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg max-w-580-px"
							}
						>
							<div className="flex justify-center">
								<div className="mr-4 p-3 text-center">                       
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
									  <i className="far fa-smile text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Note de confiance > 15 </span>
								</div>
								<div className="mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
										<i className="fas fa-unlock-alt text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Sécuriser au maximum</span>
								</div>
								<div className="lg:mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
										<i className="fas fa-certificate text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Garantie qualite</span>
								</div>
							</div>			
						</div>
					  </li>

					  <li className="flex items-center">
						<button
						  className="text-gray-500 active:bg-gray-700 text-xs font-bold uppercase px-3 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
						  type="button"
						>
						  <Link href="/vendre">
							  <a
								href="#pablo"
								className={
								  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
								}
							  >
								Vendre
							  </a>
						  </Link>
						</button>
					  </li>					 					   					 					  
				</ul>                  				
                <div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-male"></i> subit 1 Accident : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline"> oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="far fa-calendar-alt"></i> Sous garantie : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-file-invoice-dollar"></i> Respect des entretiens périodiques :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-certificate"></i> Date du prochain entretien :</span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline">01/12/2022</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-key"></i> Carte Grise : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline">oui</span>
						</div>						
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className="fas fa-globe-europe"></i> Possédez-vous le carnet d’entretien : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-orange-500 underline">Oui</span>
						</div>						
					  </div>
					</div>				
	        </div>
	    </div>
    </>
  );
};

export default DetailsPremiumDropdown;
