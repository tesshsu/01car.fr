import React from "react";
import Link from "next/link";
import {connect} from "react-redux";
import {exterieur_equipements, interieur_equipements, securite_equipements, antivol_equipements, confort_equipements, autre_equipements} from 'helpers/constant';

const DetailsDropdown = ({ dispatch,
					  loading,
					  car}) => {
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
  return (
    <>
        <div className="flex flex-wrap">
			<div className="w-full px-8 py-2 px-2 flex-1">
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded">
				    <i class="fas fa-thumbs-up"></i> NOTE DE CONFIANCE
				</h4>
			</div>
            {ncs ?.map(nc => (
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

			<h4 className="mt-2 px-6 py-2 text-xl leading-relaxed text-gray-600 underline font-bold uppercase rounded">
				ÉQUIPEMENTS DE SÉRIE ET OPTIONS :
		    </h4>
			       {exterieur_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Exterieur equipements :</div>
					  <div className="flex flex-wrap">
					    {exterieur_equipements ?.map(exterieur_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {exterieur_equipement.name} </span>
							</div>
						))}
					  </div>
				    </div> ) : (null)}
					
				   {interieur_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Interieur equipements :</div>
					  <div className="flex flex-wrap">
					    {interieur_equipements ?.map(interieur_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {interieur_equipement.name} </span>
							</div>
						))}
					  </div>
					</div> ) : (null)}
					
				   {securite_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Securite equipements :</div>
					  <div className="flex flex-wrap">
					    {securite_equipements ?.map(securite_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {securite_equipement.name} </span>
							</div>
						))}
					  </div>
					</div>) : (null)}
					
				   {antivol_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Antivol equipements :</div>
					  <div className="flex flex-wrap">
					    {antivol_equipements ?.map(antivol_equipement => (
						    <div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {antivol_equipement.name} </span>
							</div>
						))}
					  </div>
					</div>) : (null)}
					
				   {confort_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Confort equipements :</div>
					  <div className="flex flex-wrap">
					    {confort_equipements ?.map(confort_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {confort_equipement.name} </span>
							</div>
                        ))}
					  </div>
					</div>) : (null)}
					
				   {autre_equipements.length ? (
					<div className="container px-2 mx-auto">
					  <div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Autre equipements :</div>
					  <div className="flex flex-wrap">
					    {autre_equipements ?.map(autre_equipement => (
							<div className="w-full px-3 flex-1">
							  <span className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {autre_equipement.name} </span>
							</div>
                        ))}
					  </div>
					</div>) : (null)}
		</div>
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsDropdown)