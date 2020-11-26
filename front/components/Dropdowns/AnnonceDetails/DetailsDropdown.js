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
  const ncs = [
	  { icon: "fas fa-male", name: "Annonces par", value: "particulier" },
	  { icon: "far fa-calendar-alt", name: "Vehicule est disponible", value: "Dans un mois" },
	  { icon: "fas fa-file-invoice-dollar", name: "Véhicule est Non fumeur", value: "oui" },
	  { icon: "fas fa-certificate", name: "Le double des clés", value: "oui" },
	  { icon: "fas fa-certificate", name: "La raison pour vendre", value: "Autre project" },
	  { icon: "fas fa-key", name: "Nombre de mains", value: "3ème mains ou plus" },
	  { icon: "fas fa-globe-europe", name: "Etat de vehicule", value: "Neuf ou moins de 4 ans" },
	  { icon: "fas fa-globe-europe", name: "Nombre de mains", value: "3ème mains ou plus" },
	  { icon: "fas fa-key", name: "Origine du véhicule", value: "France" },
  ];
  const exterieur_equipements = [
	  { value: "toit ouvrant" },
	  { value: "aide parking av/ar" },
	  { value: "caméra de recul" },
	  { value: "pack sport" },
	  { value: "banquette 1/3 - 2/3" },
	  { value: "climatisation automatique" },
	  { value: "direction assistée" },
	  { value: "fermeture électrique" },
	  { value: "ABS" },
  ];
  const interieur_equipements = [
	  { value: "vitres électriques" },
	  { value: "banquette rabattable" },
	  { value: "démarrage sans clef" },
	  { value: "écran tactile" },
	  { value: "fermeture électrique" },
	  { value: "GPS" },
	  { value: "kit téléphone main libre" },
	  { value: "palettes au volant" },
	  { value: "pédalier alu" },
	  { value: "prédisposition téléphone" }
  ];
  const securite_equipements = [
	  { value: "ABS" },
	  { value: "affichage tête haute" },
	  { value: "essuie-glaces automatiques" },
	  { value: "fixations ISOFIX" },
	  { value: "phares av. de jour à LED" }
  ];
  const antivol_equipements = [
	  { value: "alarme" },
	  { value: "anti démarrage" },
	  { value: "gravage des vitres" }
  ];
  const confort_equipements = [
	  { value: "Bluetooth" },
	  { value: "système d'entrée sans clef" },
	  { value: "virtual cockpit" }
  ];
  const autre_equipements = [
	  { value: "kit de réparation crevaison" },
	  { value: "système Start & Stop" },
  ];
  return (
    <>
        <div className="flex flex-wrap">
			<div className="w-full px-8 py-2 px-2 flex-1">
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded">
				    <i class="fas fa-thumbs-up"></i> NOTE DE CONFIANCE
				</h4>
			</div>
            {ncs.map(nc => (
				<div className="container px-2 mx-auto">
						<div className="flex flex-wrap">
							<div className="w-full px-4 flex-1">
								  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className={nc.icon}></i> {nc.name} : </span>
							</div>
							<div className="w-full px-4 flex-1">
								  <span className="question-1 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200"> {nc.value}</span>
							</div>
						</div>
				</div>
			))}

			<h4 className="mt-2 px-6 py-2 text-md leading-relaxed text-gray-600 underline font-bold uppercase rounded">
				ÉQUIPEMENTS DE SÉRIE ET OPTIONS :
		    </h4>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {exterieur_equipements.map(exterieur_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {exterieur_equipement.value} </span>
							</div>
						))}
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {interieur_equipements.map(interieur_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {interieur_equipement.value} </span>
							</div>
						))}
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {securite_equipements.map(securite_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {securite_equipement.value} </span>
							</div>
						))}
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {antivol_equipements.map(antivol_equipement => (
						    <div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {antivol_equipement.value} </span>
							</div>
						))}
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {confort_equipements.map(confort_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {confort_equipement.value} </span>
							</div>
                        ))}
					  </div>
					</div>
					<div className="container px-2 mx-auto">
					  <div className="flex flex-wrap">
					    {autre_equipements.map(autre_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {autre_equipement.value} </span>
							</div>
                        ))}
					  </div>
					</div>
		</div>
    </>
  );
};

export default DetailsDropdown;
