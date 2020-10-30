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
  const premium_ncs = [
	  { icon: "fas fa-certificate", name: "Sous garantie", value: "oui" },
	  { icon: "fas fa-car-crash", name: "Ayant déjà subit 1 accident", value: "non" },
	  { icon: "fas fa-car-crash", name: "Des défauts griffes, coups, usures", value: "oui" },
	  { icon: "fas fa-certificate", name: "Justifier le parcours kilometrique", value: "oui" },
	  { icon: "fas fa-calendar-check", name: "Contrôle technique ok", value: "oui" },
	  { icon: "far fa-list-alt", name: "Respect des entretiens périodiques", value: "oui" },
	  { icon: "far fa-calendar-alt", name: "Prochaine entretien", value: "Moins de 5000km" },
	  { icon: "fas fa-print", name: "Facture d'achat", value: "oui" },
	  { icon: "far fa-id-badge", name: "Carte grise", value: "Oui" },
	  { icon: "fas fa-copy", name: "Possède le carnet d'entretien", value: "Oui" }
  ];
  return (
    <>
        <div className="w-full px-8 py-2 px-2 flex-1">
			<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 font-bold underline uppercase rounded animate-bounce-once">
				<i class="fas fa-certificate"></i> NOTE DE CONFINANCE TOP GARANTIE
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
				</ul> 
				{premium_ncs.map(premium_nc => (				
                    <div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
						  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i class={premium_nc.icon}></i> {premium_nc.name} : </span>
						</div>
						<div className="w-full px-4 flex-1">
						  <span className="question-11 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">{premium_nc.value}</span>
						</div>						
					  </div>
					</div>
				))}
			</div>
	    </div>
    </>
  );
};

export default DetailsPremiumDropdown;
